import CommonStatusBadge from '@components/status/CommonStatusBadge';
import { STATUS_CHIP_MAP } from '@constants/style.constant';

interface StatusChipProps {
    // Determines the chip style
    status: keyof typeof STATUS_CHIP_MAP;
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
    status
}: StatusChipProps) {
    const { backgroundColor, textColor, label } = STATUS_CHIP_MAP[status]; // Destructure the style and label for the current status

    return (
        <CommonStatusBadge
            className="border-[0px] font-[600] gap-[4px] h-[16px] inline-flex items-center leading-[16px] px-[8px] rounded-[9999px]"
            iconProps={{
                height: 6,
                width: 6
            }}
            label={label}
            status="INFO"
            style={{
                backgroundColor,
                color: textColor
            }}
        />
    );
}