import { IconSvgProps } from '@type/common.type';

/**
 * CheckIcon
 * Renders a checkmark as an SVG icon.
 *
 * Props:
 * - height: height of the SVG icon (default: 12).
 * - width: width of the SVG icon (default: 12).
 * - ...props: any additional SVG props (className, style, etc.).
 *
 * @example
 * <CheckIcon className="h-[12px] w-[12px]" />
 */
export default function CheckIcon({
    height = 12,
    width = 12,
    ...props
}: IconSvgProps) {
    return (
        <svg fill="currentColor" height={height} viewBox="0 0 256 256" width={width} xmlns="http://www.w3.org/2000/svg" {...props} >
            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" stroke="currentColor" strokeWidth = "30" > </path>
        </svg>
    );
}