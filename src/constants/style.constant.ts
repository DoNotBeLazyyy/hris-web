import { ButtonSizeStyleMap, ButtonVariantStyleMap } from '@type/common/style.type';

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