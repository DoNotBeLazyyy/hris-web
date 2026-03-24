import { FormControlLabel, Switch, SwitchProps } from '@mui/material';
import React, { useState } from 'react';

type SwitchSize = 'SMALL' | 'MEDIUM' | 'LARGE';

interface CommonToggleSwitchProps extends Omit<SwitchProps, 'size'> {
    size?: SwitchSize;
    label?: string;
}

export default function CommonToggleSwitch({
    size = 'MEDIUM',
    label,
    sx,
    ...props
}: CommonToggleSwitchProps) {
    const [checked, setChecked] = useState(false);
    const sizeConfig: Record<SwitchSize, {
        width: number;
        height: number;
        thumb: number;
        padding: number;
    }> = {
        SMALL: {
            width: 32,
            height: 18,
            thumb: 14,
            padding: 2
        },
        MEDIUM: {
            width: 44,
            height: 24,
            thumb: 20,
            padding: 2
        },
        LARGE: {
            width: 60,
            height: 32,
            thumb: 26,
            padding: 3
        }
    };
    const { width, height, thumb, padding } = sizeConfig[size];
    const baseStyle = {
        width: `${width}px`,
        height: `${height}px`,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: `${padding}px`,
            '&.Mui-checked': {
                color: '#ffffff',
                transform: `translateX(${width - thumb - padding * 2}px)`,
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
            height: `${thumb}px`,
            width: `${thumb}px`,
            top: `calc(50% - ${thumb / 2}px)`
        },
        '& .MuiSwitch-track': {
            backgroundColor: '#D4D4D8',
            borderRadius: `${height / 2}px`,
            height: `${height}px`,
            width: `${width}px`,
            opacity: 1
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
                gap: '16px', // 👈 this controls spacing
                margin: 0, // optional: removes default margin
                '& .MuiFormControlLabel-label': {
                    marginLeft: 0 // ensure no extra spacing
                }
            }}
        />
    );
}