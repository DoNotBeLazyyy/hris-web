import { STATUS_BADGE_STYLE } from '@constants/style.constant';
import { HTMLDivAttributes, IconSvgProps } from '@type/common.type';
import { classMerge } from '@utils/css.util';

export interface CommonStatusBadgeProps extends HTMLDivAttributes {
    // Customize the badge icon
    iconProps?: IconSvgProps;

    // The text displayed inside the status badge
    label: string;

    // Determine the badge style and color from STATUS_BADGE_STYLE
    status?: keyof typeof STATUS_BADGE_STYLE;
}

/**
 * CommonStatusBadge
 *
 * A reusable status badge component that displays a label with an optional icon.
 * The appearance (color, background, and icon) is determined by the `status` prop.
 *
 * @example
 * <CommonStatusBadge
 *   iconProps={{
 *      height: 12,
 *      width: 12
 *   }}
 *   label="Active"
 *   status="SUCCESS"
 * />
 */
export default function CommonStatusBadge({
    className,
    status = 'INFO',
    label,
    iconProps,
    ...props
}: CommonStatusBadgeProps) {
    const { color, backgroundColor, icon } = STATUS_BADGE_STYLE[status]; // Destructure the style configuration for the current status
    const Icon = icon; // Assign the icon component from the style config to a local variable for rendering

    return (
        <div
            className={
                classMerge(
                    'border-[1px] font-[600] gap-[4px] h-[16px] inline-flex items-center justify-center leading-[16px] min-w-[63px] px-[6px] rounded-[4px]',
                    className
                )
            }
            style={{
                borderColor: color,
                backgroundColor,
                color
            }}
            {...props}
        >
            <Icon {...iconProps} />
            <span className="font-[700] text-[12px]">
                {label}
            </span>
        </div>
    );
}