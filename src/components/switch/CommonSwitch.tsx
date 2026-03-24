import { Switch, SwitchProps } from '@mui/material';

interface CommonSwitchProps extends SwitchProps{
    // Controls whether the switch is ON (true) or OFF (false)
    checked: boolean;

    // Disables the switch (no interaction allowed)
    disabled?: boolean;

    // Background color of the track when the switch is ON
    trackBgToggled?: string;

    // Background color of the track when the switch is OFF
    trackBgUntoggled?: string;

    // Background color of the thumb (the circular handle)
    thumbBg?: string;

    // Background color of the track when the switch is disabled
    disabledTrackBg?: string;

    // Opacity of the track when the switch is ON
    opacityToggled?: string;

    // Opacity of the track when the switch is OFF
    opacityUntoggled?: string;

    // Opacity of the track when the switch is disabled
    disabledOpacity?: string;

    // Total width of the switch component
    switchWidth?: number;

    // Total height of the switch component
    switchHeight?: number;

    // Size (width & height) of the thumb
    thumbSize?: number;

    // Border radius of the track (controls roundness)
    trackRadius?: number;

    // Padding inside the switch base (affects thumb spacing)
    basePadding?: number;

    // Callback function triggered when the switch value changes
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * CommonSwitch
 * A customizable toggle switch component built on MUI's Switch.
 * Supports custom track colors, thumb color, size, radius, padding,
 * and opacity for normal, toggled, and disabled states.
 *
 * Example:
 * <CommonSwitch
 *   checked={true}
 *   onChange={(e) => console.log(e.target.checked)}
 *   trackBgToggled="#022179"
 *   thumbBg="#ffffff"
 * />
 */
export default function CommonSwitch({
    checked,
    disabled,
    trackBgToggled,
    trackBgUntoggled,
    thumbBg,
    disabledTrackBg,
    opacityToggled,
    opacityUntoggled,
    disabledOpacity,
    switchWidth,
    switchHeight,
    thumbSize,
    trackRadius,
    basePadding,
    onChange
}: CommonSwitchProps) {
    const thumbDefaultBg = '#ffffff'; // Default color of the thumb (circular handle) when not specified
    const trackDefaultToggledBg = '#022179'; // Default background color of the track when switch is ON
    const trackDefaultUntoggledBg = '#D4D4D8'; // Default background color of the track when switch is OFF
    const disabledTrackDefaultBg = '#A1A1AA'; // Default background color of the track when switch is disabled
    const opacityDefaultToggled = '1'; // Default opacity of the track when switch is ON
    const opacityDefaultUntoggled = '1'; // Default opacity of the track when switch is OFF
    const disabledOpacityDefault = '1'; // Default opacity of the track when switch is disabled
    const defaultWidth = 44; // Default total width of the switch component
    const defaultHeight = 24; // Default total height of the switch component
    const defaultThumbSize = 20; // Default width and height of the thumb
    const defaultRadius = 20; // Default border radius of the track (makes it rounded)
    const defaultBasePadding = 0.25; // Default padding inside the switch base (affects thumb spacing)
    const isChecked = disabled
        ? false
        : checked; // If disabled, force switch to OFF visually; otherwise use checked value

    return (
        <Switch
            checked={isChecked}
            disabled={disabled}
            sx={{
                height: switchHeight || defaultHeight,
                width: switchWidth || defaultWidth,
                padding: 0,
                '& .MuiSwitch-switchBase': {
                    padding: basePadding ?? defaultBasePadding,
                    '&.Mui-checked': {
                        color: thumbBg || thumbDefaultBg,
                        transform: `translateX(${(switchWidth ?? defaultWidth) - (thumbSize ?? defaultThumbSize) - ((basePadding ?? defaultBasePadding) + 3.5)}px)`,
                        '& + .MuiSwitch-track': {
                            backgroundColor: trackBgToggled || trackDefaultToggledBg,
                            opacity: opacityToggled || opacityDefaultToggled
                        }
                    },
                    '&:hover': {
                        backgroundColor: 'transparent'
                    }
                },
                '& .MuiSwitch-thumb': {
                    backgroundColor: thumbBg || thumbDefaultBg,
                    height: thumbSize || defaultThumbSize,
                    top: '50%',
                    width: thumbSize || defaultThumbSize
                },
                '& .MuiSwitch-track': {
                    backgroundColor: trackBgUntoggled || trackDefaultUntoggledBg,
                    borderRadius: trackRadius || defaultRadius,
                    height: switchHeight || defaultHeight,
                    opacity: opacityUntoggled || opacityDefaultUntoggled,
                    width: switchWidth || defaultWidth
                },
                '& .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track': {
                    backgroundColor: disabledTrackBg || disabledTrackDefaultBg,
                    opacity: disabledOpacity || disabledOpacityDefault
                }
            }}
            onChange={onChange}
        />
    );
}