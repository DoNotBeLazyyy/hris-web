import { ThemeSx } from '@type/common.type';

// Button style props
export type ButtonSize = 'XSMALL' | 'SMALL' | 'MEDIUM' | 'LARGE' | 'XLARGE';
export type ButtonVariant = 'PRIMARY' | 'SECONDARY' | 'OUTLINE' | 'GHOST';
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
    iconSize: string;
}

// Status badge config
interface StatusBadgeTypeConfig {
    color: string;
    backgroundColor: string;
    icon: React.ReactNode;
}