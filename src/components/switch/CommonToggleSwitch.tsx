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

export default function CommonToggleSwitch({
    label,
    size = 'MEDIUM',
    sx,
    ...props
}: CommonToggleSwitchProps) {
    const [checked, setChecked] = useState(false);
    const { width, height, thumbSize, padding } = TOGGLE_SWITCH_STYLE[size];
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
    };

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