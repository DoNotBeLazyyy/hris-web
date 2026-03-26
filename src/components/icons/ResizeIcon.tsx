import { IconSvgProps } from '@type/common.type';

/**
 * ResizeIcon
 * Renders a diagonal grip pattern as an SVG, used for resizable container handles.
 *
 * Props:
 * - height: height of the SVG icon.
 * - strokeWidth: thickness of the grip lines.
 * - width: width of the SVG icon.
 *
 * @example
 * <ResizeIcon className="h-[24px] w-[24px]" />
 */
export default function ResizeIcon({
    height = 24,
    strokeWidth = 24,
    width = 24,
    ...props
}: IconSvgProps) {
    return (
        <svg height={height} viewBox="0 0 256 256" width={width}xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect fill="none" height="256" width="256" />
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} x1="208" x2="128" y1="128" y2="208" />
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} x1="192" x2="40" y1="40" y2="192" />
        </svg>
    );
}