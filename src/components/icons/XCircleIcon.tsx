import { IconSvgProps } from '@type/common.type';

/**
 * XCircleIcon
 * Renders a circle with an "X" mark as an SVG icon.
 *
 * Props:
 * - height: height of the SVG icon (default: 12).
 * - width: width of the SVG icon (default: 12).
 * - ...props: any additional SVG props (className, style, etc.).
 *
 * @example
 * <XCircleIcon className="h-[12px] w-[12px]" />
 */
export default function XCircleIcon({
    height = 12,
    width = 12,
    ...props
}: IconSvgProps) {
    return (
        <svg height={height} viewBox="0 0 256 256" width={width} xmlns="http://www.w3.org/2000/svg" {...props} >
            <circle cx="128" cy="128" fill="currentColor" r="108" />
            <path d="M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17Z" fill="#FFFFFF" />
        </svg>
    );
}