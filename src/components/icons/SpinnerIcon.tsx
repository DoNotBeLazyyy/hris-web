import { IconSvgProps } from '@type/common.type';

/**
 * SpinnerIcon
 * Renders an incomplete circular path as an SVG, used for loading indicators.
 *
 * Props:
 * - height: height of the SVG icon.
 * - strokeWidth: thickness of the spinner track.
 * - width: width of the SVG icon.
 *
 * @example
 * <SpinnerIcon className="animate-spin h-[24px] w-[24px]" />
 */
export default function SpinnerIcon({
    height = 24,
    strokeWidth = 24,
    width = 24,
    ...props
}: IconSvgProps) {
    return (
        <svg height={height} viewBox="0 0 256 256" width={width} xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect fill="none" height="256" width="256" />
            <path d="M168,40a97,97,0,0,1,56,88,96,96,0,0,1-192,0A97,97,0,0,1,88,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
        </svg>
    );
}