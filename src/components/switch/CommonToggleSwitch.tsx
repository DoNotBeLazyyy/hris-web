import { TOGGLE_SWITCH_STYLE } from '@constants/style.constant';
import { FormControlLabel, Switch, SwitchProps } from '@mui/material';
import { ToggleSwitchSize } from '@type/common/style.type';
import React, { useState } from 'react';

interface CommonToggleSwitchProps extends Omit<SwitchProps, 'size'> {
    // Optional: defines the size of the switch (SMALL, MEDIUM, LARGE)
    size?: ToggleSwitchSize;

    // Optional: text label displayed next to the switch
    label?: string;
}

/**
 * CommonToggleSwitch
 * A reusable toggle switch component built with MUI that supports
 * multiple predefined sizes and an optional label.
 *
 * Example:
 * <CommonToggleSwitch
 *   size="MEDIUM"
 *   label="Enable Notifications"
 * />
 */
export default function CommonToggleSwitch({
    label,
    size = 'MEDIUM',
    sx,
    ...props
}: CommonToggleSwitchProps) {
    const [checked, setChecked] = useState(false); // Manages the toggle switch checked (on/off) state
    const { width, height, thumbSize, padding } = TOGGLE_SWITCH_STYLE[size]; // Extract size-based styling values for the switch
    const baseStyle = {
        height: `${height}px`,
        padding: 0,
        width: `${width}px`,
        '& .MuiSwitch-switchBase': {
            padding: `${padding}px`,
            '&.Mui-checked': {
                color: '#ffffff',
                transform: `translateX(${width - thumbSize - padding * 2}px)`,
                '& + .MuiSwitch-track': {
                    backgroundColor: '#022179',
                    opacity: 1
                }
            },
            '&:hover': {
                backgroundColor: 'transparent'
            }
        },
        '& .MuiSwitch-thumb': {
            backgroundColor: '#ffffff',
            boxShadow: 'none',
            height: `${thumbSize}px`,
            top: `calc(50% - ${thumbSize / 2}px)`,
            width: `${thumbSize}px`
        },
        '& .MuiSwitch-track': {
            backgroundColor: '#D4D4D8',
            borderRadius: `${height / 2}px`,
            height: `${height}px`,
            opacity: 1,
            width: `${width}px`
        },
        ...sx
    }; // Base styling for the toggle switch, including size, thumb, track, and checked state behavior

    /**
     * Handles the change event for a checkbox input.
     * Updates the local `checked` state based on the input's current value.
     *
     * @param event - The change event from the HTML input element
     */
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setChecked(event.target.checked);
    }

    return (
        <FormControlLabel
            control={
                <Switch
                    checked={checked}
                    sx={baseStyle}
                    onChange={handleChange}
                    {...props}
                />
            }
            label={label}
            sx={{
                gap: '16px',
                margin: 0,
                '& .MuiFormControlLabel-label': {
                    marginLeft: 0
                }
            }}
        />
    );
}