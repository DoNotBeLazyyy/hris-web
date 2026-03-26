import { IconSvgProps } from '@type/common.type';

/**
 * CircleIcon
 * Renders a filled circle as an SVG icon.
 *
 * Props:
 * - height: height of the SVG icon (default: 12).
 * - width: width of the SVG icon (default: 12).
 * - ...props: any additional SVG props (className, style, etc.).
 *
 * @example
 * <CircleIcon className="h-[12px] w-[12px]" />
 */
export default function CircleIcon({
    height = 12,
    width = 12,
    ...props
}: IconSvgProps) {
    return (
        <svg height={height} viewBox="0 0 256 256" width={width} xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="128" cy="128" fill="currentColor" r="96"/>
        </svg>
    );
}