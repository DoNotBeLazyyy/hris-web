import SpinnerIcon from '@components/icons/SpinnerIcon';
import { BUTTON_SIZE_STYLES, BUTTON_STYLES } from '@constants/style.constant';
import Button, { ButtonProps } from '@mui/material/Button';
import { ThemeSx } from '@type/common.type';
import { ButtonSize, ButtonVariant } from '@type/common/style.type';
import { iconSize, normalizeSx } from '@utils/theme.util';
import { ReactNode } from 'react';

interface ButtonLoadingProps {
    // Whether it is loading or not
    isLoading?: boolean;

    // Loading icon
    loadingIcon?: ReactNode;
}

interface CommonButtonProps extends Omit<ButtonProps, 'size' | 'variant'> {
    // Loading props
    loadingProps?: ButtonLoadingProps;

    // Button size
    size?: ButtonSize;

    // Button variant
    variant?: ButtonVariant;
}

/**
 * CommonButton
 *
 * A customizable MUI button component with predefined size and variant styles.
 * Use only one icon position at a time. Provide either `startIcon` or `endIcon`,
 * but do not use both simultaneously.
 *
 * @example
 * <CommonButton
 *  loadingProps={loadingProps}
 *  size="XSMALL"
 *  startIcon={<PlusIcon />}
 * >
 *  Primary
 * </CommonButton>
 */
export default function CommonButton({
    disabled,
    endIcon,
    loadingProps,
    size = 'MEDIUM',
    startIcon,
    sx,
    variant = 'PRIMARY',
    ...props
}: CommonButtonProps) {
    const { buttonStyle, loadingStyle } = BUTTON_STYLES[variant]; // Button styles
    const { buttonSize, buttonIconSize } = BUTTON_SIZE_STYLES[size] ; // Button size styles
    const {
        isLoading = false,
        loadingIcon = <SpinnerIcon className="animate-spin" />
    } = loadingProps ?? {}; // Loading props destructure
    const resolvedStartIcon = resolveIcon(startIcon); // Resolved start icon
    const resolvedEndIcon = startIcon
        ? null
        : resolveIcon(endIcon); // Resolved end icon
    const resolvedLoadingStyle = isLoading
        ? { '&.Mui-disabled': { ...loadingStyle } }
        : {}; // Button loading style
    const baseStyle: ThemeSx = {
        alignItems: 'center',
        display: 'inline-flex',
        fontWeight: '700',
        justifyContent: 'center',
        minWidth: 'unset',
        textTransform: 'none',
        '& .MuiButton-iconSizeMedium': {
            margin: 0,
            '& svg': iconSize(buttonIconSize)
        }
    }; // Button base style
    const isDisabled = disabled || isLoading; // Whether the button should be disabled

    /**
     * Displays the loading icon when the button is loading, the original icon
     * otherwise, or null when no icon is provided.
     *
     * @param icon - The original icon to render.
     * @returns
     */
    function resolveIcon(icon: ReactNode) {
        return icon
            ? (isLoading
                ? loadingIcon
                : icon)
            : null;
    }

    return <Button
        disabled={isDisabled}
        disableElevation
        disableFocusRipple
        disableRipple
        endIcon={resolvedEndIcon}
        startIcon={resolvedStartIcon}
        sx={[
            baseStyle,
            buttonSize,
            buttonStyle,
            resolvedLoadingStyle,
            ...normalizeSx(sx)
        ]}
        {...props}
    />;
}