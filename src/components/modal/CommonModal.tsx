import CommonCard, { CommonCardProps } from '@components/card/CommonCard';
import Dialog, { DialogOwnerState, DialogProps } from '@mui/material/Dialog';
import { PaperProps } from '@mui/material/Paper';
import { DialogCloseProps } from '@type/common.type';
import { classMerge } from '@utils/css.util';
import { normalizeSx } from '@utils/theme.util';

export interface CommonModalProps extends DialogProps {
    // Props explicitly intended for the injected CommonCard component
    cardProps?: CommonCardProps;

    // Determines if clicking the dark backdrop should trigger onClose
    closeOnBackdropClick?: boolean;

    // Determines if escape key down trigger onClose
    closeOnEscape?: boolean;
}

/**
 * CommonModal
 *
 * An MUI Dialog that replaces the native Paper slot with a CommonCard.
 * It strictly merges class names, inline styles, and sx props to ensure
 * developer overrides coexist gracefully without destroying default behaviors.
 *
 * @example
 * <CommonModal
 *  cardProps={{ className: 'custom-card', size: 'MEDIUM' }}
 *  open={true}
 * >
 *  <p>Modal content</p>
 * </CommonModal>
 */
export default function CommonModal({
    cardProps,
    children,
    closeOnBackdropClick = false,
    closeOnEscape = false,
    slotProps,
    slots,
    sx,
    onClose,
    ...dialogProps
}: CommonModalProps) {
    const originalPaperSlot = slotProps?.paper; // Capture the original paper slot to evaluate later
    const resolvedPaperSlot = typeof originalPaperSlot === 'function'
        ? getMergedPaperProps
        : getMergedPaperProps(); // Resolved paper slot
    const baseStyle = { zIndex: 9999 }; // Base style for the dialog

    /**
     * Resolves the MUI paper slot props, safely merging styles, sx arrays,
     * and class names to ensure graceful coexistence of developer props.
     *
     * @param ownerState - The internal MUI state passed to the slot callback.
     * @returns
     */
    function getMergedPaperProps(ownerState?: DialogOwnerState) {
        const resolvedProps = typeof originalPaperSlot === 'function' && ownerState
            ? originalPaperSlot(ownerState)
            : (typeof originalPaperSlot === 'object'
                ? originalPaperSlot
                : {}
            );

        return {
            elevation: 0,
            ...cardProps,
            ...resolvedProps,
            className: classMerge(
                'max-h-[90vh] max-w-[600px] min-h-[200px] min-w-[320px] overflow-y-auto w-[100%]',
                cardProps?.className,
                resolvedProps.className
            ),
            style: {
                ...cardProps?.style,
                ...resolvedProps.style
            },
            sx: [
                ...normalizeSx(cardProps?.sx),
                ...normalizeSx(resolvedProps.sx)
            ]
        } as Partial<PaperProps>;
    }

    /**
     * Intercepts native close events to enforce backdrop click preferences.
     *
     * @param event - The interaction event from MUI or a manual click.
     * @param reason - The reason the dialog is closing.
     * @returns
     */
    function handleClose(event: DialogCloseProps[0], reason?: DialogCloseProps[1]) {
        if (
            (reason === 'backdropClick' && !closeOnBackdropClick)
            || (reason === 'escapeKeyDown' && !closeOnEscape)
        ) {
            return;
        }

        onClose?.(event, reason ?? 'escapeKeyDown');
    }

    return (
        <Dialog
            {...dialogProps}
            slotProps={{
                ...slotProps,
                paper: resolvedPaperSlot
            }}
            slots={{
                paper: CommonCard,
                ...slots
            }}
            sx={[
                baseStyle,
                ...normalizeSx(sx)
            ]}
            onClose={handleClose}
        >
            {children}
        </Dialog>
    );
}