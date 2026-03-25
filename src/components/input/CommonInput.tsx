import { TextField, TextFieldProps } from '@mui/material';
import { FieldStyleProps } from '@type/common/style.type';
import { fieldStyled } from '@utils/theme.util';
import { forwardRef } from 'react';

const StyledTextField = fieldStyled(TextField);

type CommonInputProps = Omit<TextFieldProps, 'size' | 'variant'> & FieldStyleProps;

const CommonInput = forwardRef<HTMLInputElement, CommonInputProps>(({
    inputSize = 'LARGE',
    inputVariant = 'FILLED',
    ...props
}, ref) => {
    return (
        <StyledTextField
            fullWidth
            inputRef={ref}
            inputSize={inputSize}
            inputVariant={inputVariant}
            {...props}
        />
    );
});
CommonInput.displayName = 'CommonInput';

export default CommonInput;