import { IconSvgProps } from '@type/common.type';

/**
 * CloseIcon
 * Renders an SVG close icon inside a circle.
 *
 * Props:
 * - height: Icon height.
 * - strokeWidth: Stroke thickness of the icon paths.
 * - width: Icon width.
 *
 * @example
 * <CloseIcon className="h-[24px] w-[24px]" />
 */
export default function CloseIcon({
    height = 24,
    strokeWidth = 24,
    width = 24,
    ...props
}: IconSvgProps) {
    return (
        <svg height={height} viewBox="0 0 256 256" width={width} xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect fill="none" height="256" width="256" />
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} x1="160" x2="96" y1="96" y2="160" />
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} x1="96" x2="160" y1="96" y2="160" />
            <circle cx="128" cy="128" fill="none" r="96" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
        </svg>
    );
}