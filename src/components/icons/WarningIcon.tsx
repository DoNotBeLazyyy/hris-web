import { IconSvgProps } from '@type/common.type';

/**
 * WarningIcon
 * Renders a warning triangle with an exclamation mark as an SVG icon.
 *
 * Props:
 * - height: height of the SVG icon (default: 12).
 * - width: width of the SVG icon (default: 12).
 * - ...props: any additional SVG props (className, style, etc.).
 *
 * @example
 * <WarningIcon className="h-[12px] w-[12px]" />
 */
export default function WarningIcon({
    height = 12,
    width = 12,
    ...props
}: IconSvgProps) {
    return (
        <svg fill="currentColor" height={height} viewBox="0 0 256 256" width={width} xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M240.26,186.1,152.81,34.23a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Z" fill="currentColor" />
            <rect fill="#FFFFFF" height="56" rx="12" width="24" x="116" y="96" />
            <circle cx="128" cy="176" fill="#FFFFFF" r="12" />
        </svg>
    );
}