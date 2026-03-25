import { INPUT_SIZE_STYLES, INPUT_VARIANT_STYLES } from '@constants/style.constant';
import { TextField } from '@mui/material';
import { CSSObject, styled } from '@mui/material/styles';
import deepmerge from '@mui/utils/deepmerge';
import { ThemeSx } from '@type/common.type';
import { FieldStyleProps } from '@type/common/style.type';
import { ComponentProps, ComponentType } from 'react';

// MUI TextField enhanced with custom size and variant styling via fieldStyled
export const StyledTextField = fieldStyled(TextField);

/**
 * Enhances a MUI component with custom input size and variant styles.
 *
 * @param Component - The MUI component to enhance with custom styles.
 * @returns
 */
export function fieldStyled<T extends ComponentType<ComponentProps<T>>>(Component: T) {
    return styled(
        Component,
        { shouldForwardProp: (prop) => prop !== 'inputSize' && prop !== 'inputVariant' }
    )<FieldStyleProps>(({ inputSize = 'LARGE', inputVariant = 'OUTLINED' }) => {
        const {
            inputSizeStyle: {
                fontSize,
                height,
                lineHeight,
                padding
            },
            multilineSizeStyle: {
                minHeight,
                minWidth
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
                    padding,
                    '&.MuiInputBase-multiline': {
                        alignItems: 'flex-start',
                        height: 'auto',
                        minHeight,
                        minWidth,
                        width: 'auto'
                    },
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
 * Normalizes the MUI sx prop into an array for safe spreading in sx arrays.
 *
 * @param sx - The sx prop value to normalize.
 * @returns
 */
export function normalizeSx(sx?: ThemeSx) {
    return Array.isArray(sx)
        ? sx
        : [sx];
}

/**
 * Returns consistent fontSize, height, and width styles for icon sizing.
 *
 * @param size - The size applied to fontSize, height, and width.
 * @returns
 */
export function iconSize(size: string) {
    return {
        fontSize: size,
        height: size,
        width: size
    };
}