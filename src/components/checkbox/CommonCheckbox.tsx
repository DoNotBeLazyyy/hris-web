import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ReactNode } from 'react';

interface CommonCheckboxProps extends CheckboxProps {
    // whether the checkbox is checked (controlled) or not.
    checked?: boolean;

    // custom color for checked and indeterminate states.
    customColor?: string;

    // whether the checkbox is checked by default (uncontrolled) or not.
    defaultChecked?: boolean;

    // size of the checkbox icon in pixels.
    iconSize?: number;

    // optional label displayed next to the checkbox.
    label?: ReactNode;
}

/**
 * CommonCheckbox
 * A reusable checkbox component that wraps the MUI Checkbox component and
 * provides additional features such as custom colors, indeterminate state, and event handling.
 *
 * Example:
 * <CommonCheckbox
 *   customColor="#E4E4E7"
 *   defaultChecked
 *   onChange={(event, checked) => console.log('Checked:', checked)}
 *   onClick={(event) => console.log('Checkbox clicked')}
 * />
 */
export default function CommonCheckbox({
    customColor,
    checked,
    defaultChecked,
    disabled,
    iconSize,
    label,
    sx,
    ...props
}: CommonCheckboxProps) {
    const color = customColor ?? '#1B2A6B'; // default custom color if not provided

    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    {...props}
                    sx={{
                        color: disabled
                            ? undefined
                            : '#D5D5D5',
                        padding: 0,
                        ...(iconSize && {
                            '& .MuiSvgIcon-root': {
                                fontSize: iconSize
                            }
                        }),
                        '&:hover, &:active, &:focus, &.Mui-focusVisible': {
                            backgroundColor: 'transparent !important'
                        },
                        '& .MuiTouchRipple-root': {
                            display: 'none'
                        },
                        '&.Mui-checked': {
                            color: disabled
                                ? undefined
                                : color
                        },
                        '&.MuiCheckbox-indeterminate': {
                            color: disabled
                                ? undefined
                                : color
                        },
                        ...sx
                    }}
                />
            }
            disabled={disabled}
            label={label}
            sx={{
                margin: 0,
                gap: '8px',
                '& .MuiFormControlLabel-label': {
                    color: '#6B7280',
                    fontSize: '16px'
                }
            }}
        />
    );
}