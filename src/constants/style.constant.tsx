import { ThemeSx } from '@type/common.type';
import { SizeType, ButtonSizeStyleMap, ButtonVariantStyleMap, SxElement } from '@type/common/style.type';

export function RadioIcon({ size, color, backgroundColor, dotColor }: {
    size: number;
    color: string;
    backgroundColor: string;
    dotColor?: string;
}) {
    return (
        <span
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: size,
                height: size,
                borderRadius: '50%',
                border: '2px solid',
                borderColor: color,
                backgroundColor,
                boxSizing: 'border-box'
            }}
        >
            {dotColor && (
                <span
                    style={{
                        width: size * 0.4,
                        height: size * 0.4,
                        borderRadius: '50%',
                        backgroundColor: dotColor
                    }}
                />
            )}
        </span>
    );
}

// Button variant style presets.
export const BUTTON_STYLES: ButtonVariantStyleMap = {
    PRIMARY: {
        buttonStyle: {
            color: '#FFFFFF',
            backgroundColor: '#022179',
            '&:hover': {
                backgroundColor: '#011554',
                boxShadow: '0 0 20px 0 #00000040'
            },
            '&:active': {
                backgroundColor: '#225DB4',
                boxShadow: 'none'
            },
            '&.Mui-disabled': {
                backgroundColor: '#A1A1AA',
                color: '#FFFFFF'
            }
        },
        loadingStyle: {
            backgroundColor: '#022179',
            color: '#FFFFFF'
        }
    },
    SECONDARY: {
        buttonStyle: {
            color: '#387BE0',
            border: '2px solid transparent',
            backgroundColor: '#E4E4E7',
            '&:hover': {
                backgroundColor: '#D4D4D8',
                boxShadow: '0 0 20px 0 #A9CEF740'
            },
            '&:active': {
                backgroundColor: '#F4F4F5',
                border: '2px solid #D4D4D8',
                boxShadow: '0 0 10px 0 #00000040 inset'
            },
            '&.Mui-disabled': {
                backgroundColor: '#E4E4E7',
                color: '#A1A1AA'
            }
        },
        loadingStyle: {
            backgroundColor: '#D4D4D8',
            color: '#27272A'
        }
    },
    OUTLINE: {
        buttonStyle: {
            color: '#022179',
            backgroundColor: 'transparent',
            border: '2px solid #022179',
            '&:hover': {
                backgroundColor: '#A9CEF733',
                border: '2px solid #022179'
            },
            '&:active': {
                backgroundColor: '#81B5F380',
                border: '2px solid #022179',
                boxShadow: '0 0 10px 0 #00000040 inset'
            },
            '&.Mui-disabled': {
                backgroundColor: 'transparent',
                border: '2px solid #A1A1AA',
                color: '#A1A1AA'
            }
        },
        loadingStyle: {
            border: '2px solid #022179'
        }
    },
    GHOST: {
        buttonStyle: {
            color: '#022179',
            '&:hover': {
                backgroundColor: '#A9CEF733'
            },
            '&:active': {
                backgroundColor: '#81B5F380'
            },
            '&.Mui-disabled': {
                color: '#A1A1AA'
            }
        },
        loadingStyle: {
            backgroundColor: 'transparent',
            border: '2px solid #022179'
        }
    }
};

// Button size style presets.
export const BUTTON_SIZE_STYLES: ButtonSizeStyleMap = {
    XSMALL: {
        buttonSize: {
            borderRadius: '8px',
            fontSize: '12px',
            gap: '4px',
            maxHeight: '24px',
            p: '4px'
        },
        iconSize: '16px'
    },
    SMALL: {
        buttonSize: {
            borderRadius: '8px',
            fontSize: '14px',
            gap: '8px',
            maxHeight: '36px',
            p: '8px'
        },
        iconSize: '20px'
    },
    MEDIUM: {
        buttonSize: {
            borderRadius: '8px',
            fontSize: '16px',
            gap: '12px',
            maxHeight: '48px',
            p: '12px'
        },
        iconSize: '24px'
    },
    LARGE: {
        buttonSize: {
            borderRadius: '16px',
            fontSize: '18px',
            gap: '16px',
            maxHeight: '56px',
            p: '16px'
        },
        iconSize: '24px'
    },
    XLARGE: {
        buttonSize: {
            borderRadius: '16px',
            fontSize: '20px',
            gap: '20px',
            maxHeight: '68px',
            p: '20px'
        },
        iconSize: '24px'
    }
};

// Tooltip size style presets.
export const sizeStyles: Record<SizeType, { fontSize: number; padding: string; borderRadius: string }> = {
    sm: { fontSize: 14, padding: '8px 12px', borderRadius: '8px' },
    md: { fontSize: 16, padding: '10px 16px', borderRadius: '8px' },
    lg: { fontSize: 16, padding: '8px 10px', borderRadius: '10px' }
};

interface TabContainerStyleParams {
    // whether the variant is filled
    isFilled: boolean;

    // whether the variant is outlined
    isOutlined: boolean;

    // whether the orientation is vertical
    isVertical: boolean;

    // main color for active state based on variant
    color: string;
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
}: TabContainerStyleParams): Record<string, unknown> {
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

interface TabStyleParams {
    // isActive tab state
    isActive: boolean;

    // main color for active state based on variant
    color: string;

    // text color for active state based on variant
    textColor: string;

    // variant of the tab menu (filled, outlined, soft)
    variant: string;
}

// Tab style function that returns sx styles based on the active state, variant, and color.
export function tabStyle({
    isActive,
    color,
    textColor,
    variant
}: TabStyleParams): Record<string, unknown> {
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