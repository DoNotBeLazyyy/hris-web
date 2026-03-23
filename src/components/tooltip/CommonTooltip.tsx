import { ReactElement, ReactNode } from 'react';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import { SizeType, VariantType, TooltipSlotProps } from '@type/common.type';

const sizeStyles: Record<SizeType, { fontSize: number; padding: string; borderRadius: string }> = {
    sm: { fontSize: 14, padding: '8px 12px', borderRadius: '8px' },
    md: { fontSize: 16, padding: '10px 16px', borderRadius: '8px' },
    lg: { fontSize: 16, padding: '8px 10px', borderRadius: '10px' }
};
interface CommonTooltipProps extends Omit<TooltipProps, TooltipSlotProps> {
    // whether to show the arrow.
    arrow?: boolean;

    // custom background color for the tooltip.
    customColor?: string;

    // custom font size in pixels (overrides size preset).
    fontSize?: number;

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
    fontSize,
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
                        backgroundColor: isFilled
                            ? tooltipColor
                            : color,
                        color: isFilled
                            ? color
                            : tooltipColor,
                        fontSize: fontSize ?? preset.fontSize,
                        fontWeight: 600,
                        padding: preset.padding,
                        borderRadius: preset.borderRadius,
                        border: isFilled
                            ? 'none'
                            : `1.5px solid ${tooltipColor}`,
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                        textAlign: 'center',
                        maxWidth: 'none',
                        ...((slotProps?.tooltip as Record<string, unknown>)?.sx as Record<string, unknown>)
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
                        ...((slotProps?.arrow as Record<string, unknown>)?.sx as Record<string, unknown>)
                    }
                }
            }}
        >
            {children}
        </Tooltip>
    );
}