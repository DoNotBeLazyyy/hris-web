import { ThemeSx } from '@type/common.type';
import { CSSProperties } from 'react';

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

// Input style props
export type InputSize = 'SMALL' | 'LARGE';
export type InputSizeStyleMap = Record<InputSize, CSSProperties>;

// Field style props
export interface FieldStyleProps {
    // Input size
    inputSize?: InputSize;

    // Whether to use flat style
    isFlat?: boolean;
}