import { INPUT_SIZE_STYLES } from '@constants/style.constant';
import { styled } from '@mui/material/styles';
import { FieldStyleProps } from '@type/common/style.type';
import { ComponentProps, ComponentType } from 'react';

/**
 * Applies consistent custom styles to MUI field-based components
 * such as TextField, Select, and Autocomplete input renderers.
 *
 * @param Component - Input component to be styled.
 * @returns
 */
export function fieldStyled<T extends ComponentType<ComponentProps<T>>>(Component: T) {
    return styled(
        Component,
        { shouldForwardProp: (prop) => prop !== 'inputSize' && prop !== 'isFlat' }
    )<FieldStyleProps>(({ inputSize = 'LARGE', isFlat = false }) => {
        const { height, fontSize, lineHeight } = INPUT_SIZE_STYLES[inputSize]; // Input size styles
        const placeholderColor = isFlat
            ? '#52525B'
            : '#3F3F46'; // Placeholder color

        return {
            '& .MuiOutlinedInput-root': {
                backgroundColor: isFlat
                    ? '#F4F4F5'
                    : '#FAFAFA',
                borderRadius: '8px',
                height: height,
                minHeight: height,
                '& fieldset': {
                    border: isFlat
                        ? '0'
                        : '1px solid #D4D4D8'
                },
                '&:hover fieldset': {
                    borderColor: isFlat
                        ? 'transparent'
                        : '#D4D4D8'
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#022179',
                    borderWidth: '2px'
                },
                '&.Mui-disabled': { backgroundColor: '#E4E4E7' },
                '&.Mui-disabled fieldset': {
                    border: isFlat
                        ? '0'
                        : '1px solid #D4D4D8'
                }
            },
            '& .MuiOutlinedInput-input': {
                boxSizing: 'border-box',
                color: '#27272A',
                fontSize: fontSize,
                lineHeight,
                padding: '12px 16px'
            },
            '& .MuiOutlinedInput-input::placeholder': {
                color: placeholderColor,
                opacity: 1
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input::placeholder': {
                color: '#27272A',
                opacity: 1
            },
            '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-input::placeholder': {
                color: '#A1A1AA',
                opacity: 1
            },
            '& .MuiOutlinedInput-root .MuiInputAdornment-root': { color: '#52525B' },
            '& .MuiAutocomplete-inputRoot': {
                height: 'auto',
                minHeight: height
            }
        };
    });
}