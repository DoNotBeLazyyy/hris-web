import { INPUT_DEFAULT_PROPS } from '@constants/style.constant';
import { CommonInputProps } from '@type/common.type';
import { StyledTextField } from '@utils/theme.util';
import { forwardRef } from 'react';

/**
 * CommonInput
 * A customizable styled single-line text input built on MUI TextField,
 * with custom size and variant support.
 *
 * Example:
 * <CommonInput
 *  inputVariant="OUTLINED"
 *  placeholder="Search"
 *  slotProps={{
 *      input: {
 *          startAdornment: (
 *              <InputAdornment position="start">
 *                  <SearchIcon fontSize="small" />
 *              </InputAdornment>
 *          )
 *      }
 *  }}
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