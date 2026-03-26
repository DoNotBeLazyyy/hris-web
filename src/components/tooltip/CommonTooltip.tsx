import { sizeStyles } from '@constants/style.constant';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import { RecordStringUnknown, TooltipSlotProps } from '@type/common.type';
import { SizeType, TooltipVariant, VariantType } from '@type/common/style.type';
import { ReactElement, ReactNode } from 'react';

interface CommonTooltipProps extends Omit<TooltipProps, TooltipSlotProps> {
    // whether to show the arrow.
    arrow?: boolean;

    // custom background color for the tooltip.
    customColor?: string;

    // the element that triggers the tooltip.
    children: ReactElement;

    // the content displayed inside the tooltip.
    title: ReactNode;

    // size of the tooltip.
    size?: SizeType;

    // visual variant of the tooltip.
    variant?: VariantType;
}

/**
 * CommonTooltip
 * A reusable tooltip component that wraps the MUI Tooltip component and
 * provides additional features such as custom colors, sizes, variants, and arrow placement.
 *
 * Example:
 * <CommonTooltip
 *     title="Example Tooltip"
 *     placement="top"
 *     size="md"
 *     variant="filled"
 *     customColor="#022179"
 * >
 *     <button>Hover me</button>
 * </CommonTooltip>
 */
export default function CommonTooltip({
    arrow,
    children,
    customColor,
    placement,
    size,
    slotProps,
    title,
    variant,
    ...props
}: CommonTooltipProps) {
    const tooltipColor = customColor ?? '#022179'; // tooltip color based on variant and customColor
    const preset = sizeStyles[size ?? 'sm']; // get size preset based on tooltipSize
    const isFilled = (variant ?? 'filled') === 'filled'; // determine if the tooltip is filled variant
    const color = '#FFFFFF'; // text color for filled variant
    const tooltipSx = {
        backgroundColor: isFilled
            ? tooltipColor
            : color,
        color: isFilled
            ? color
            : tooltipColor,
        fontSize: preset.fontSize,
        fontWeight: 600,
        padding: preset.padding,
        borderRadius: preset.borderRadius,
        border: isFilled
            ? 'none'
            : `1.5px solid ${tooltipColor}`,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
        textAlign: 'center',
        maxWidth: 'none'
    }; // sx styles for the tooltip based on variant and size

    /**
     * Helper function to extract sx styles from slotProps for tooltip and arrow.
     *
     * @param key - 'tooltip' or 'arrow' to specify which slot's sx to extract.
     * @returns
     */
    function sx(key: TooltipVariant) {
        return (slotProps?.[key] as RecordStringUnknown)?.sx as RecordStringUnknown;
    }

    return (
        <Tooltip
            arrow={arrow ?? true}
            placement={placement ?? 'bottom'}
            title={title}
            {...props}
            slotProps={{
                ...slotProps,
                tooltip: {
                    ...slotProps?.tooltip,
                    sx: {
                        ...tooltipSx,
                        ...sx('tooltip')
                    }
                },
                arrow: {
                    ...slotProps?.arrow,
                    sx: {
                        color: isFilled
                            ? tooltipColor
                            : color,
                        '&::before': {
                            borderRadius: '4px',
                            border: isFilled
                                ? 'none'
                                : `1.5px solid ${tooltipColor}`
                        },
                        ...sx('arrow')
                    }
                }
            }}
        >
            {children}
        </Tooltip>
    );
}