import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import { ThemeSx } from '@type/common.type';
import { ProgressBarVariant } from '@type/common/style.type';
import { normalizeSx, getProgressColor } from '@utils/theme.util';
import { ReactNode } from 'react';

interface CommonCircularProgressBarProps extends Omit<CircularProgressProps, ProgressBarVariant> {
    // custom color that overrides the automatic color logic.
    customColor?: string;

    // custom label text displayed inside the circle (e.g. "11/15"). Overrides the default percentage display.
    label?: string | ReactNode;

    // size of the circular progress in pixels.
    size?: number;

    // custom sx styles for the circular progress.
    sx?: ThemeSx;

    // thickness of the circular progress bar.
    thickness?: number;

    // background color of the track circle.
    trackColor?: string;

    // progress value from 0 to 100.
    value: number;
}

/**
 * CommonCircularProgressBar
 * A reusable circular progress bar component that wraps the MUI CircularProgress component.
 * The bar color automatically changes based on the value:
 * - Red: when value is low (0-15%)
 * - Orange: when value is moderate (16-35%)
 * - Blue: when value is high (36-100%)
 *
 * Example:
 * <CommonCircularProgressBar value={75} />
 * <CommonCircularProgressBar value={10} size={80} showLabel />
 * <CommonCircularProgressBar value={50} customColor="#8B5CF6" />
 */
export default function CommonCircularProgressBar({
    customColor,
    label,
    size,
    sx,
    thickness,
    trackColor = '#E5E7EB',
    value,
    ...props
}: CommonCircularProgressBarProps) {
    const clampedValue = Math.min(100, Math.max(0, value));
    const progressSize = size ?? 80;
    const progressThickness = thickness ?? 5;
    const color = getProgressColor(clampedValue, customColor);

    return (
        <div className="relative inline-flex">
            <CircularProgress
                size={progressSize}
                sx={{ color: trackColor }}
                thickness={progressThickness}
                value={100}
                variant="determinate"
            />
            <CircularProgress
                size={progressSize}
                sx={[
                    {
                        color,
                        position: 'absolute',
                        left: 0,
                        transition: 'all 0.3s ease',
                        '& .MuiCircularProgress-circle': {
                            strokeLinecap: 'round'
                        }
                    },
                    ...normalizeSx(sx)
                ]}
                thickness={progressThickness}
                value={clampedValue}
                variant="determinate"
                {...props}
            />

            {label && (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span
                        style={{
                            fontSize: 12,
                            fontWeight: 700,
                            color: '#3F3F46',
                            lineHeight: 1.2
                        }}
                    >
                        {label}
                    </span>
                </div>
            )}

        </div>
    );
}