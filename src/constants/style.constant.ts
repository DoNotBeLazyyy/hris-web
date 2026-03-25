import { CommonInputProps } from '@components/input/CommonInput';
import {
    ButtonSizeStyleMap, ButtonVariantStyleMap, InputSizeStyleMap, InputVariantStyleMap, SizeType
} from '@type/common/style.type';

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
        buttonIconSize: '16px'
    },
    SMALL: {
        buttonSize: {
            borderRadius: '8px',
            fontSize: '14px',
            gap: '8px',
            maxHeight: '36px',
            p: '8px'
        },
        buttonIconSize: '20px'
    },
    MEDIUM: {
        buttonSize: {
            borderRadius: '8px',
            fontSize: '16px',
            gap: '12px',
            maxHeight: '48px',
            p: '12px'
        },
        buttonIconSize: '24px'
    },
    LARGE: {
        buttonSize: {
            borderRadius: '16px',
            fontSize: '18px',
            gap: '16px',
            maxHeight: '56px',
            p: '16px'
        },
        buttonIconSize: '24px'
    },
    XLARGE: {
        buttonSize: {
            borderRadius: '16px',
            fontSize: '20px',
            gap: '20px',
            maxHeight: '68px',
            p: '20px'
        },
        buttonIconSize: '24px'
    }
};

// Input common default props
export const INPUT_DEFAULT_PROPS: Partial<CommonInputProps> = {
    inputSize: 'LARGE',
    inputVariant: 'FILLED'
};

// Input size style presets.
export const INPUT_SIZE_STYLES: InputSizeStyleMap = {
    SMALL: {
        inputSizeStyle: {
            fontSize: '14px',
            height: '36px',
            lineHeight: '20px',
            padding: '8px'
        },
        multilineSizeStyle: {
            minHeight: '134px',
            minWidth: '272px'
        },
        leftIconSize: '20px',
        rightIconSize: '16px'
    },
    LARGE: {
        inputSizeStyle: {
            fontSize: '16px',
            height: '48px',
            lineHeight: '24px',
            padding: '12px 16px'
        },
        leftIconSize: '24px',
        multilineSizeStyle: {
            minHeight: '170px',
            minWidth: '264px'
        },
        rightIconSize: '20px'
    }
} as const;

// Input variant style presets.
export const INPUT_VARIANT_STYLES: InputVariantStyleMap = {
    OUTLINED: {
        '& .MuiOutlinedInput-root': {
            backgroundColor: '#FAFAFA',
            '&.Mui-disabled': { backgroundColor: '#E4E4E7' },
            [`
                &.Mui-focused fieldset,
                &.Mui-focused:hover fieldset
            `]: { border: '2px solid #022179' },
            [`
                & fieldset,
                &:hover fieldset,
                &.Mui-disabled fieldset
            `]: { border: '1px solid #D4D4D8' },
            [`
                & .MuiOutlinedInput-input::placeholder,
                & .MuiOutlinedInput-root .MuiInputAdornment-positionStart svg,
                & .MuiOutlinedInput-root .MuiInputAdornment-positionEnd svg
            `]: { color: '#3F3F46' }
        }
    },
    FILLED: {
        '& .MuiOutlinedInput-root': {
            backgroundColor: '#F4F4F5',
            '&.Mui-focused': { backgroundColor: '#E0EDFD' },
            '&.Mui-disabled': { backgroundColor: '#E4E4E7' },
            '& .MuiInputAdornment-positionStart svg': { color: '#011554' },
            '& .MuiInputAdornment-positionEnd svg': { color: '#18181B' },
            '& .MuiOutlinedInput-input::placeholder': { color: '#52525B' },
            [`
                & fieldset,
                &:hover fieldset,
                &.Mui-focused fieldset,
                &.Mui-disabled fieldset
            `]: { border: '0' }
        }
    }
};

// Textarea resize cursor style presets.
export const RESIZE_CURSORS: Record<string, string> = {
    vertical: 'cursor-ns-resize',
    block: 'cursor-ns-resize',
    horizontal: 'cursor-ew-resize',
    inline: 'cursor-ew-resize',
    both: 'cursor-se-resize'
};

// Tooltip size style presets.
export const sizeStyles: Record<SizeType, { fontSize: number; padding: string; borderRadius: string }> = {
    sm: { fontSize: 14, padding: '8px 12px', borderRadius: '8px' },
    md: { fontSize: 16, padding: '10px 16px', borderRadius: '8px' },
    lg: { fontSize: 16, padding: '8px 10px', borderRadius: '10px' }
};