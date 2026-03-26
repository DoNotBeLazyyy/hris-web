import ResizeIcon from '@components/icons/ResizeIcon';
import { CommonInputProps } from '@components/input/CommonInput';
import { INPUT_DEFAULT_PROPS, RESIZE_CURSORS } from '@constants/style.constant';
import { TextFieldProps } from '@mui/material';
import { ThemeSx } from '@type/common.type';
import { classMerge } from '@utils/css.util';
import { normalizeSx, StyledTextField } from '@utils/theme.util';
import { Properties } from 'csstype';
import { forwardRef, useRef, useState } from 'react';

type CommonTextareaProps = CommonInputProps & Pick<Properties, 'resize'> & {
    // Whether there's a text counter or not
    hasTextCount?: boolean;

    // Max text length
    maxLength?: number;
};

/**
 * CommonTextarea
 *
 * A specialized multi-line text input built on MUI's StyledTextField.
 * Supports custom resizing logic (horizontal, vertical, or both),
 * character counting, and respects parent container boundaries.
 *
 * @example
 * <CommonTextarea
 *  resize="vertical"
 *  maxLength={500}
 *  hasTextCount
 *  placeholder="Enter your description..."
 * />
 */
const CommonTextarea = forwardRef<HTMLDivElement, CommonTextareaProps>(({
    hasTextCount,
    inputSize = 'LARGE',
    maxLength,
    resize = 'none',
    slotProps,
    sx,
    value,
    onChange,
    ...props
}, ref) => {
    const containerRef = useRef<HTMLDivElement>(null); // Ref to control total dimensions
    const dragDataRef = useRef({
        startX: 0,
        startY: 0,
        startWidth: 0,
        startHeight: 0
    }); // Stores initial drag coordinates and sizes
    const [charCount, setCharCount] = useState(0); // Tracks current character length
    const isLarge = inputSize === 'LARGE'; // Flag for large size variant
    const isFullWidth = ['vertical', 'block', 'none'].includes(resize); // Logic for fixed width
    const hasResize = !getResizeMetadata(['none']).isAllowed; // Whether resizable or not
    const widthMeta = getResizeMetadata(['both', 'horizontal', 'inline']); // Horizontal resize data
    const heightMeta = getResizeMetadata(['both', 'vertical', 'block']); // Vertical resize data
    const hasEndadornment = hasTextCount || hasResize; // Whether there's end adornment or not
    const { rootClasses, inputClasses, adornmentClasses, resizeClasses, widthClass, widthStyle } = {
        rootClasses: isLarge
            ? (hasEndadornment
                ? '12px 4px 0px 0px'
                : '12px 4px 12px 16px'
            )
            : (hasEndadornment
                ? '8px 4px 0px 0px'
                : '8px 4px 8px 8px'
            ),
        inputClasses: isLarge
            ? (hasEndadornment
                ? '0px 12px 0px 16px'
                : '0px 12px 0px 0px'
            )
            : (hasEndadornment
                ? '0px 4px 0px 8px'
                : '0px 4px 0px 0px'
            ),
        adornmentClasses: isLarge
            ? 'pl-[16px] pt-[8px]'
            : 'pl-[8px] pt-[4px]',
        resizeClasses: isLarge
            ? 'pr-[12px] pb-[12px]'
            : 'pr-[4px] pb-[8px]',
        widthClass: isFullWidth
            ? 'w-full'
            : '',
        widthStyle: isFullWidth
            ? '100%'
            : 'auto'
    }; // Configuration for size-dependent styles
    const baseStyle: ThemeSx = {
        height: '100%',
        maxHeight: '100%',
        '& .MuiOutlinedInput-root': {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: rootClasses
        },
        '& .MuiOutlinedInput-input': {
            flex: 1,
            overflow: 'auto',
            padding: inputClasses,
            resize: 'none'
        }
    }; // Textarea base style
    const resolvedEndAdornment = (hasTextCount || hasResize)
        ? (
            <div
                className={
                    classMerge(
                        'cursor-default flex items-end text-[#71717A] text-[12px] w-full',
                        adornmentClasses
                    )
                }
            >
                {hasTextCount
                    ? (
                        <div
                            className={
                                classMerge(
                                    'leading-[100%]',
                                    resizeClasses
                                )
                            }
                        >
                            <span>{charCount}</span>
                            {(maxLength ?? 0) > 0
                                ? <span> / {maxLength}</span>
                                : null
                            }
                        </div>
                    )
                    : null
                }
                {hasResize && (
                    <div
                        className={
                            classMerge(
                                'text-[#71717A] ml-auto',
                                resizeClasses,
                                widthMeta.cursor
                            )
                        }
                        onMouseDown={handleMouseDown}
                    >
                        <ResizeIcon
                            height={16}
                            strokeWidth={16}
                            width={16}
                        />
                    </div>
                )}
            </div>
        )
        : null; // Resolved end adornment display
    const baseSlotProps: TextFieldProps['slotProps'] = {
        input: {
            ...slotProps?.input,
            endAdornment: resolvedEndAdornment,
            inputComponent: 'textarea'
        },
        htmlInput: {
            ...slotProps?.htmlInput,
            maxLength
        }
    }; // Base slot props

    /**
     * Resolves resize capabilities and cursor based on the current resize mode.
     *
     * @param allowed - Array of modes that trigger the specific axis.
     * @returns
     */
    function getResizeMetadata(allowed: string[]) {
        return {
            isAllowed: allowed.includes(resize || ''),
            cursor: RESIZE_CURSORS[resize || ''] || 'cursor-default'
        };
    }

    /**
     * Initializes the resize operation.
     *
     * @param event - The React mouse event from the drag handle.
     */
    function handleMouseDown(event: React.MouseEvent) {
        event.preventDefault();

        const { clientX, clientY } = event;
        const rect = containerRef.current?.getBoundingClientRect();
        dragDataRef.current = {
            startX: clientX,
            startY: clientY,
            startWidth: rect?.width || 0,
            startHeight: rect?.height || 0
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }

    /**
     * Updates container dimensions based on mouse movement delta.
     *
     * @param event - The native mouse event from the document.
     */
    function handleMouseMove(event: MouseEvent) {
        if (!containerRef.current) {
            return;
        }

        const parent = containerRef.current.parentElement;

        if (!parent) {
            return;
        }

        const { clientX, clientY } = event;
        const { startX, startY, startWidth, startHeight } = dragDataRef.current;
        const parentRect = parent.getBoundingClientRect();
        const newWidth = startWidth + (clientX - startX);
        const newHeight = startHeight + (clientY - startY);

        if (widthMeta.isAllowed) {
            containerRef.current.style.width = `${Math.min(Math.max(200, newWidth), parentRect.width)}px`;
        }
        if (heightMeta.isAllowed) {
            containerRef.current.style.height = `${Math.min(Math.max(100, newHeight), parentRect.height)}px`;
        }
    }

    /**
     * Cleans up the resize operation by removing global listeners.
     */
    function handleMouseUp() {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }

    /**
     * Syncs the character count and propagates the change event.
     *
     * @param event - The React change event from the textarea.
     */
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCharCount(event.target.value.length);
        onChange?.(event);
    }

    return (
        <div
            className={
                classMerge(
                    'flex flex-col max-h-full max-w-full relative',
                    widthClass
                )
            }
            ref={containerRef}
            style={{ width: widthStyle }}
        >
            <div className="flex-1 min-h-0 w-full">
                <StyledTextField
                    fullWidth
                    ref={ref}
                    slotProps={{
                        ...slotProps,
                        ...baseSlotProps
                    }}
                    sx={[
                        baseStyle,
                        ...normalizeSx(sx)
                    ]}
                    value={value}
                    onChange={handleChange}
                    {...INPUT_DEFAULT_PROPS}
                    {...props}
                />
            </div>
        </div>
    );
});
CommonTextarea.displayName = 'CommonTextarea';

export default CommonTextarea;