import { ThemeSx } from '@type/common.type';
import { CSSProperties } from 'react';

// Button style props
export type ButtonVariant = 'PRIMARY' | 'SECONDARY' | 'OUTLINE' | 'GHOST';
export type ButtonSize = 'XSMALL' | 'SMALL' | 'MEDIUM' | 'LARGE' | 'XLARGE';
export type ButtonVariantStyleMap = Record<ButtonVariant, ButtonVariantStyleConfig>;
export type ButtonSizeStyleMap = Record<ButtonSize, ButtonSizeStyleConfig>;

// Button variant style configuration
interface ButtonVariantStyleConfig {
    // Button non-loading state style
    buttonStyle: ThemeSx;

    // Button loading state style
    loadingStyle: ThemeSx;
}

// Button size style configuration
interface ButtonSizeStyleConfig {
    // Button non-loading state style
    buttonSize: ThemeSx;

    // Button loading state style
    buttonIconSize: string;
}

// Tab menu variant type
export type TabMenuVariant = 'filled' | 'outlined' | 'soft';

// SizeType used for defining size.
export type SizeType = 'sm' | 'md' | 'lg';

// VariantType used for defining variant.
export type VariantType = 'filled' | 'outlined';

// SizeType used for defining size of CommonRadioButton.
export type CommonRadioButtonSize = 'size' | 'icon' | 'checkedIcon';

// Utility type to extract the element type from a ThemeSx array or return ThemeSx if it's not an array.
export type SxElement = Exclude<ThemeSx, readonly unknown[]>;

export type TabOrientation = 'horizontal' | 'vertical'

export type TooltipVariant = 'tooltip' | 'arrow'

export type ProgressBarVariant = 'value' | 'variant'

// Input style props
export type InputVariant = 'OUTLINED' | 'FILLED';
export type InputSize = 'SMALL' | 'LARGE';
export type InputVariantStyleMap = Record<InputVariant, ThemeSx>;
export type InputSizeStyleMap = Record<InputSize, InputSizeStyleConfig>;

// Field style props
export interface FieldStyleProps {
    // Input size
    inputSize?: InputSize;

    // Input variant
    inputVariant?: InputVariant;
}

// Button variant style configuration
interface InputSizeStyleConfig {
    // Input size style
    inputSizeStyle: CSSProperties;

    // Multiline size style
    multilineSizeStyle: CSSProperties;

    // Left icon size
    leftIconSize: string;

    // Right icon size
    rightIconSize: string;
}

// Tab style props
export interface TabStyleParams {
    // isActive tab state
    isActive: boolean;

    // main color for active state based on variant
    color: string;

    // text color for active state based on variant
    textColor: string;

    // variant of the tab menu (filled, outlined, soft)
    variant: string;
}

export interface TabContainerStyleParams {
    // whether the variant is filled
    isFilled: boolean;

    // whether the variant is outlined
    isOutlined: boolean;

    // whether the orientation is vertical
    isVertical: boolean;

    // main color for active state based on variant
    color: string;
}