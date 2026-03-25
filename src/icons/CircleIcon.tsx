import { IconSvgProps } from '@type/common.type';

export default function CircleIcon({
    height = 12,
    width = 12,
    ...props
}: IconSvgProps) {
    return (
        <svg
            height={height}
            viewBox="0 0 256 256"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx="128" cy="128" fill="currentColor" r="96"/>
        </svg>
    );
}