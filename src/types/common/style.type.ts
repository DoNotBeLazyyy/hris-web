import { ThemeSx } from '@type/common.type';
import { CSSProperties } from 'react';

// Button style props
export type ButtonVariant = 'PRIMARY' | 'SECONDARY' | 'OUTLINE' | 'GHOST';
export type ButtonSize = 'XSMALL' | 'SMALL' | 'MEDIUM' | 'LARGE' | 'XLARGE';
export type ButtonVariantStyleMap = Record<ButtonVariant, ButtonVariantStyleConfig>;
export type ButtonSizeStyleMap = Record<ButtonSize, ButtonSizeStyleConfig>;

// Badge style props
export type StatusBadgeVariant = 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR';
export type StatusBadgeVariantMap = Record<StatusBadgeVariant, StatusBadgeTypeConfig>;

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

// Status badge config
interface StatusBadgeTypeConfig {
    color: string;
    backgroundColor: string;
    icon: React.ReactNode;
}

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