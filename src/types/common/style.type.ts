import { ThemeSx } from '@type/common.type';

// Button style props
export type ButtonSize = 'XSMALL' | 'SMALL' | 'MEDIUM' | 'LARGE' | 'XLARGE';
export type ButtonVariant = 'PRIMARY' | 'SECONDARY' | 'OUTLINE' | 'GHOST';
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
    iconSize: string;
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