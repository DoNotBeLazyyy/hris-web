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