import { IconSvgProps } from '@type/common.type';

/**
 * PlusIcon
 * Renders a plus (+) symbol as an SVG, commonly used for add actions.
 *
 * Props:
 * - height: height of the SVG icon.
 * - strokeWidth: thickness of the vertical and horizontal lines.
 * - width: width of the SVG icon.
 *
 * @example
 * <PlusIcon className="h-[24px] w-[24px]" />
 */
export default function PlusIcon({
    height = 24,
    strokeWidth = 24,
    width = 24,
    ...props
}: IconSvgProps) {
    return (
        <svg fill="none" height={height} viewBox="0 0 256 256" width={width} xmlns="http://www.w3.org/2000/svg" {...props} >
            <rect fill="none" height="256" width="256" />
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} x1="40" x2="216" y1="128" y2="128" />
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} x1="128" x2="128" y1="40" y2="216" />
        </svg>
    );
}