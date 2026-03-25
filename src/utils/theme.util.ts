import { INPUT_SIZE_STYLES, INPUT_VARIANT_STYLES } from '@constants/style.constant';
import { CSSObject, styled } from '@mui/material/styles';
import deepmerge from '@mui/utils/deepmerge';
import { FieldStyleProps } from '@type/common/style.type';
import { ComponentProps, ComponentType } from 'react';

export function fieldStyled<T extends ComponentType<ComponentProps<T>>>(Component: T) {
    return styled(
        Component,
        { shouldForwardProp: (prop) => prop !== 'inputSize' && prop !== 'inputVariant' }
    )<FieldStyleProps>(({ inputSize = 'LARGE', inputVariant = 'OUTLINED' }) => {
        const {
            inputSizeStyle: {
                fontSize,
                height,
                lineHeight
            },
            leftIconSize,
            rightIconSize
        } = INPUT_SIZE_STYLES[inputSize]; // Input size style
        const variantStyle = INPUT_VARIANT_STYLES[inputVariant]; // Input variant style
        const disabledColor = '#A1A1AA'; // Disabled text color

        return deepmerge(
            variantStyle,
            {
                '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    height,
                    minHeight: height,
                    padding: '12px 16px',
                    '& .MuiInputAdornment-positionStart': {
                        marginRight: '12px',
                        '& svg': iconSize(leftIconSize)
                    },
                    '& .MuiInputAdornment-positionEnd': {
                        marginX: 0,
                        '& svg': iconSize(rightIconSize)
                    },
                    '&.Mui-focused': {
                        '& .MuiInputAdornment-positionStart svg': { color: '#011554' },
                        '& .MuiInputAdornment-positionEnd svg': { color: '#18181B' }
                    },
                    '&.Mui-disabled .MuiInputAdornment-root svg': { color: disabledColor }
                },
                '& .MuiOutlinedInput-input': {
                    boxSizing: 'border-box',
                    color: '#27272A',
                    fontSize,
                    lineHeight,
                    padding: 0,
                    '&.Mui-disabled': {
                        color: disabledColor,
                        WebkitTextFillColor: disabledColor
                    }
                },
                '& .MuiAutocomplete-inputRoot': {
                    height: 'auto',
                    minHeight: height
                }
            }
        ) as CSSObject;
    });
}

/**
 * Returns consistent fontSize, height, and width styles for icon sizing.
 *
 * @param size - The size applied to fontSize, height, and width.
 */
function iconSize(size: string) {
    return {
        fontSize: size,
        height: size,
        width: size
    };
}