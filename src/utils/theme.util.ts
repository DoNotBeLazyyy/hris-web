import { INPUT_SIZE_STYLES, INPUT_VARIANT_STYLES } from '@constants/style.constant';
import { TextField } from '@mui/material';
import { CSSObject, styled } from '@mui/material/styles';
import deepmerge from '@mui/utils/deepmerge';
import { ThemeSx, UnknownStringKeyMap } from '@type/common.type';
import { FieldStyleProps, SxElement, TabContainerStyleParams, TabStyleParams } from '@type/common/style.type';
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

/**
 * Spread sx function that takes a sx prop which can be either an object or an array and returns it as an array for consistent usage in MUI components.
 *
 * @param sx - the sx prop which can be a single object or an array of objects.
 * @returns
 */
export function spreadSx(sx?: ThemeSx): readonly SxElement[] {
    if (!sx) {
        return [];
    }

    return (Array.isArray(sx)
        ? sx
        : [sx]) as readonly SxElement[];
}

/**
 * Tab container style function that returns sx styles based on the variant, orientation, and color.
 *
 * @param param0 - object containing isFilled, isOutlined, isVertical, and color properties to determine the styles.
 * @returns
 */
export function tabContainerStyle({
    isFilled,
    isOutlined,
    isVertical,
    color
}: TabContainerStyleParams): UnknownStringKeyMap {
    if (isOutlined) {
        return {
            ...(isVertical && { borderRight: '2px solid #E5E7EB' }),
            '& .MuiTabs-indicator': {
                backgroundColor: color,
                ...(isVertical
                    ? { width: '2px' }
                    : { height: '2px' }
                )
            }
        };
    }

    return {
        ...(isFilled && { backgroundColor: '#F3F4F6' }),
        borderRadius: '10px',
        padding: '4px',
        ...(isVertical && { gap: '4px' }),
        '& .MuiTabs-indicator': {
            display: 'none'
        }
    };
}
// Tab style function that returns sx styles based on the active state, variant, and color.
export function tabStyle({
    isActive,
    color,
    textColor,
    variant
}: TabStyleParams): UnknownStringKeyMap {
    const isFilled = variant === 'filled';
    const isOutlined = variant === 'outlined';

    return {
        textTransform: 'none',
        minHeight: 'unset',
        minWidth: 'unset',
        padding: '7px 10px',
        fontSize: '13px',
        fontWeight: 700,
        transition: 'all 0.2s ease',
        borderRadius: isOutlined
            ? 0
            : '8px',
        color: textColor,
        '&.Mui-selected': {
            color: isFilled
                ? '#FFFFFF'
                : isOutlined
                    ? color
                    : '#3F3F46'
        },
        backgroundColor: isActive
            ? (isFilled
                ? color
                : (isOutlined
                    ? 'transparent'
                    : '#F4F4F5'))
            : 'transparent',
        boxShadow: isActive && variant === 'soft'
            ? '0px 1px 3px rgba(0, 0, 0, 0.1)'
            : 'none',
        '& .MuiTab-iconWrapper': {
            color: isActive
                ? '#FFFFFF'
                : textColor,
            marginRight: '6px'
        },
        '&:hover': {
            backgroundColor: isActive
                ? (isFilled
                    ? color
                    : (isOutlined
                        ? 'transparent'
                        : '#FFFFFF'))
                : 'rgba(0, 0, 0, 0.04)'
        }
    };
}