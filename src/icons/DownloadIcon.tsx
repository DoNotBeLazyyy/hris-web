import { IconSvgProps } from '@type/common.type';

export default function DownloadIcon({
    height = 24,
    strokeWidth = 16,
    width = 24,
    ...props
}: IconSvgProps) {
    return (
        <svg
            fill="none"
            height={height}
            viewBox="0 0 256 256"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                fill="none"
                height="256"
                width="256"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
                x1="128"
                x2="128"
                y1="40"
                y2="168"
            />
            <polyline
                fill="none"
                points="80 120 128 168 176 120"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
                x1="48"
                x2="208"
                y1="216"
                y2="216"
            />
        </svg>
    );
}