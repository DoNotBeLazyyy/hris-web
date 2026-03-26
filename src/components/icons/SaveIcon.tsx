import { IconSvgProps } from '@type/common.type';

/**
 * SaveIcon
 * Renders a floppy disk SVG, representing a save or commit action.
 *
 * Props:
 * - height: height of the SVG icon.
 * - strokeWidth: thickness of the diskette's outlines.
 * - width: width of the SVG icon.
 *
 * @example
 * <SaveIcon className="h-[24px] w-[24px]" />
 */
export default function SaveIcon({
    height = 24,
    strokeWidth = 16,
    width = 24,
    ...props
}: IconSvgProps) {
    return (
        <svg fill="none" height={height} viewBox="0 0 256 256" width={width} xmlns="http://www.w3.org/2000/svg" {...props} >
            <rect fill="none" height="256" width="256" />
            <path d="M48 40H176L208 72V208H48V40Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
            <path d="M80 40V104H160V40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
            <rect fill="none" height="48" rx="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} width="64" x="96" y="144" />
        </svg>
    );
}