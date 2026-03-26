import { ThemeSx } from '@type/common.type';
import { CSSProperties, ReactNode } from 'react';

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

// Badge style props
export type StatusBadgeVariant = 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR';
export type StatusBadgeVariantMap = Record<StatusBadgeVariant, StatusBadgeTypeConfig>;

// Status badge configuration
interface StatusBadgeTypeConfig {
    // Background color of the badge
    backgroundColor: string;

    // Text and border color of the badge
    color: string;

    // Icon displayed alongside the label
    icon: ReactNode;
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

// Toggle switch props
export type ToggleSwitchSize = 'SMALL' | 'MEDIUM' | 'LARGE';
export type ToggleSwitchStyleMap = Record<ToggleSwitchSize, ToggleSwitchStyleConfig>;

// Toggle switch size configuration
interface ToggleSwitchStyleConfig {
    // Total height of the switch component
    height: number;

    // Diameter/size of the switch thumb (the draggable circle)
    thumbSize: number;

    // Internal padding around the thumb within the switch track
    padding: number;

    // Total width of the switch component
    width: number;
}

// Status chip props
export type StatusChipType = 'ACTIVE' | 'INACTIVE' | 'PRESENT' | 'ABSENT';
export type StatusChipTypeMap = Record<StatusChipType,StatusChipTypeConfig>;

//
interface StatusChipTypeConfig {
    // Background color of the status chip
    backgroundColor: string;

    // Text and icon color of the status chip
    textColor: string;

    // Display label for the status
    label: string;
}