import { INPUT_DEFAULT_PROPS } from '@constants/style.constant';
import { TextFieldProps } from '@mui/material';
import { FieldStyleProps } from '@type/common/style.type';
import { StyledTextField } from '@utils/theme.util';
import { forwardRef } from 'react';

export type CommonInputProps = Omit<TextFieldProps, 'size' | 'variant'> & FieldStyleProps;

/**
 * CommonInput
 *
 * A customizable styled single-line text input built on MUI TextField,
 * with custom size and variant support.
 *
 * @example
 * <CommonInput
 *  inputVariant="OUTLINED"
 *  placeholder="Search"
 * />
 */
const CommonInput = forwardRef<HTMLInputElement, CommonInputProps>(({ ...props }, ref) => {
    return (
        <StyledTextField
            inputRef={ref}
            {...INPUT_DEFAULT_PROPS}
            {...props}
        />
    );
});
CommonInput.displayName = 'CommonInput';

export default CommonInput;