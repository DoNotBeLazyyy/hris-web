import { styled } from '@mui/material';
import { ComponentType } from 'react';

/**
 * Applies consistent custom styles to MUI input components (TextField, Autocomplete, etc.).
 *
 * @param Component input component to be styled.
 * @returns
 */
export function fieldStyled<T extends ComponentType<React.ComponentProps<T>>>(Component: T) {
    return styled(Component)(() => {
        const inputHeight = '50px'; // Input height
        const placeholderColor = {
            color: '#B2B2B2',
            fontSize: '15px',
            fontWeight: 500,
            opacity: 1
        }; // Placeholder style
        const commonStyle = {
            borderRadius: '3px',
            height: inputHeight
        }; // Common input style
        const borderStyle = {
            borderColor: '#D5D5D5',
            borderWidth: '1px'
        }; // Border style

        return {
            '& .MuiInputBase-root': {
                ...commonStyle,
                '& input': {
                    color: '#242424',
                    fontSize: '15px',
                    padding: '0 15px'
                },
                '& input::placeholder': placeholderColor,
                '.MuiOutlinedInput-notchedOutline': borderStyle,
                '&.Mui-focused, &.Mui-focused:hover': {
                    '& .MuiOutlinedInput-notchedOutline': borderStyle
                },
                '&:hover': {
                    '& .MuiOutlinedInput-notchedOutline': borderStyle
                },
                '&.Mui-disabled, &.Mui-disabled:hover': {
                    '.MuiOutlinedInput-notchedOutline': borderStyle
                },
                '&.Mui-error .MuiOutlinedInput-notchedOutline': borderStyle
            },
            '&.MuiOutlinedInput-root': {
                ...commonStyle,
                '.MuiOutlinedInput-notchedOutline': borderStyle,
                '&.Mui-focused, &.Mui-focused:hover': {
                    '& .MuiOutlinedInput-notchedOutline': borderStyle
                },
                '&:hover': {
                    '& .MuiOutlinedInput-notchedOutline': borderStyle
                },
                '&.Mui-disabled, &.Mui-disabled:hover': {
                    '.MuiOutlinedInput-notchedOutline': borderStyle
                },
                '&.Mui-error .MuiOutlinedInput-notchedOutline': borderStyle
            },
            '& .MuiAutocomplete-inputRoot': {
                height: 'auto',
                minHeight: inputHeight
            }
        };
    });
}

/**
 * Applies consistent custom styles to MUI input select component.
 *
 * @param Component input component to be styled.
 * @returns
 */
export function selectStyled<T extends ComponentType<React.ComponentProps<T>>>(Component: T) {
    return styled(Component)(() => {
        const borderStyle = {
            border: '1px solid #D4D4D4'
        }; // base border used across components
        const heightStyle = {
            height: '26px',
            minHeight: '26px'
        }; // fixed component height
        const commonBackgroundColor = { backgroundColor: 'transparent' }; // shared transparent background

        return {
            '&.MuiOutlinedInput-root': {
                color: '#171717',
                fontFamily: 'Pretendard',
                fontSize: '12px',
                fontWeight: '400',
                height: '26px',
                lineHeight: 'normal',
                minWidth: '75px',
                padding: '0',
                '& .MuiOutlinedInput-input, & .MuiSelect-select': {
                    ...heightStyle,
                    padding: 0
                },
                '& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input': {
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'flex',
                    padding: '0 24px 0 8px'
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    ...borderStyle
                },
                '&.Mui-focused, &.Mui-focused:hover': {
                    '& .MuiOutlinedInput-notchedOutline': borderStyle
                },
                '&:hover': {
                    '& .MuiOutlinedInput-notchedOutline': borderStyle
                },
                '&.Mui-disabled, &.Mui-disabled:hover': {
                    '.MuiOutlinedInput-notchedOutline': borderStyle
                },
                '& .MuiButtonBase-root': {
                    ':active': commonBackgroundColor,
                    ':focus': commonBackgroundColor,
                    ':hover': commonBackgroundColor,
                    ...commonBackgroundColor,
                    paddingLeft: 0,
                    paddingRight: 0,
                    right: '8px'
                }
            }
        };
    });
}