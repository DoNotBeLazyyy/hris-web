import { INPUT_DEFAULT_PROPS } from '@constants/style.constant';
import { CommonInputProps } from '@type/common.type';
import { normalizeSx, StyledTextField } from '@utils/theme.util';
import { forwardRef, useState } from 'react';

type CommonTextareaProps = CommonInputProps & {
    // Whether there's a text counter or not
    hasTextCount?: boolean;
}

/**
 * CommonTextarea
 * A customizable multiline text input with optional character count display.
 * Extends CommonInput with textarea-specific behavior and styling.
 *
 * Example:
 * <CommonTextarea
 *  inputVariant="OUTLINED"
 *  placeholder="Enter description"
 * />
 */
const CommonTextarea = forwardRef<HTMLDivElement, CommonTextareaProps>(({
    hasTextCount = true,
    slotProps,
    sx,
    value,
    onChange,
    ...props
}, ref) => {
    const [charCount, setCharCount] = useState(0); // Stores text count
    const maxLength = (slotProps?.htmlInput as React.InputHTMLAttributes<HTMLInputElement>)?.maxLength; // Char max length

    /**
     * Handles textarea change events by updating the character count and forwarding the event.
     *
     * @param event - The change event from the textarea element.
     */
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCharCount(event.target.value.length);
        onChange?.(event);
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 min-h-0">
                <StyledTextField
                    multiline
                    ref={ref}
                    slotProps={{ htmlInput: { maxLength } }}
                    sx={[
                        {
                            height: '100%',
                            '& .MuiOutlinedInput-root': {
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            },
                            '& .MuiOutlinedInput-input': {
                                flex: 1,
                                '&.MuiInputBase-inputMultiline': {
                                    overflow: 'auto'
                                }
                            }
                        },
                        ...normalizeSx(sx)
                    ]}
                    value={value}
                    onChange={handleChange}
                    {...INPUT_DEFAULT_PROPS}
                    {...props}
                />
            </div>
            {hasTextCount && (
                <div className="pt-[4px] px-[12px] text-[#71717A] text-[12px]">
                    <span>{charCount}</span>
                    {(maxLength ?? 0) > 0
                        ? <span> / {maxLength}</span>
                        : null
                    }
                </div>
            )}
        </div>
    );
});
CommonTextarea.displayName = 'CommonTextarea';

export default CommonTextarea;