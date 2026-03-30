import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import { ThemeSx } from '@type/common.type';
import { ProgressBarVariant } from '@type/common/style.type';
import { getProgressColor, normalizeSx } from '@utils/theme.util';

interface CommonProgressBarProps extends Omit<LinearProgressProps, ProgressBarVariant> {
    // border radius of the progress bar in pixels.
    borderRadius?: number;

    // custom color that overrides the automatic color logic.
    customColor?: string;

    // height of the progress bar in pixels.
    height?: number;

    // custom sx styles for the progress bar.
    sx?: ThemeSx;

    // background color of the track.
    trackColor?: string;

    // progress value from 0 to 100.
    value: number;
}

/**
 * CommonProgressBar
 * A reusable progress bar component that wraps the MUI LinearProgress component.
 * The bar color automatically changes based on the value:
 * - Red: when value is low (0-15%)
 * - Orange: when value is moderate (16-35%)
 * - Blue: when value is high (36-100%)
 *
 * Example:
 * <CommonProgressBar value={75} />
 * <CommonProgressBar value={10} height={12} borderRadius={8} />
 * <CommonProgressBar value={50} customColor="#8B5CF6" />
 */
export default function CommonProgressBar({
    borderRadius,
    customColor,
    height,
    sx,
    trackColor = '#E5E7EB',
    value,
    ...props
}: CommonProgressBarProps) {
    const clampedValue = Math.min(100, Math.max(0, value)); // ensure value is between 0 and 100
    const progressHeight = height ?? 8; // default height if not provided
    const borderProgressRadius = borderRadius ?? 999; // default to pill shape if borderRadius is not provided
    const color = getProgressColor(clampedValue, customColor);
    const progressSx = {
        height : progressHeight,
        borderRadius: borderProgressRadius,
        backgroundColor: trackColor,
        '& .MuiLinearProgress-bar': {
            borderRadius: borderProgressRadius,
            backgroundColor: color,
            transition: 'transform 0.3s ease, background-color 0.3s ease'
        }
    }; // sx styles for the progress bar and the inner bar based on props and value

    return (
        <LinearProgress
            value={clampedValue}
            variant="determinate"
            {...props}
            sx={[
                progressSx,
                ...normalizeSx(sx)
            ]}
        />
    );
}