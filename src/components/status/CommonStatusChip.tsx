import CommonStatusBadge, { CommonStatusBadgeProps } from '@components/status/CommonStatusBadge';
import { STATUS_CHIP_MAP } from '@constants/style.constant';

interface StatusChipProps extends Omit<CommonStatusBadgeProps, 'label'> {
    // Determines the chip style
    chipStatus: keyof typeof STATUS_CHIP_MAP;
}

/**
 * CommonStatusChip
 *
 * A small status indicator chip.
 *
 * @example
 * <CommonStatusChip
 *      status="positive"
 *      iconSize={8}
 *  />
 */
export default function CommonStatusChip({
    chipStatus,
    iconProps,
    ...props
}: StatusChipProps) {
    const { backgroundColor, textColor, label } = STATUS_CHIP_MAP[chipStatus]; // Destructure the style and label for the current status

    return (
        <CommonStatusBadge
            className="border-[0px] font-[600] gap-[4px] h-[16px] inline-flex items-center leading-[16px] px-[8px] rounded-[9999px]"
            iconProps={{
                height: 6,
                width: 6,
                ...iconProps
            }}
            label={label}
            status="INFO"
            style={{
                backgroundColor,
                color: textColor
            }}
            {...props}
        />
    );
}