import CloseIcon from '@components/icons/CloseIcon';
import MuiCardHeader, { CardHeaderProps as MuiCardHeaderProps } from '@mui/material/CardHeader';
import { classMerge } from '@utils/css.util';
import { normalizeSx } from '@utils/theme.util';

export interface CardHeaderProps extends MuiCardHeaderProps {
    // Additional subheader class name
    subheaderClassName?: string;

    // Additional title class name
    titleClassName?: string;

    // Callback fired when the close button is clicked
    onClose?: VoidFunction;
}

/**
 * CardHeader
 *
 * A customized MUI CardHeader wrapped in an MUI Box to support additional nested children.
 * It maps standard subheader and title props directly to MUI's subheader and title.
 *
 * @example
 * <CardHeader
 *  subheader="A short subheader"
 *  title="Card Title"
 * />
 */
export default function CardHeader({
    children,
    className,
    subheaderClassName,
    slotProps,
    sx,
    titleClassName,
    onClose,
    ...props
}: CardHeaderProps) {
    const baseStyle = { padding: 0 }; // Base style

    return (
        <div
            className={
                classMerge(
                    'flex flex-col',
                    className
                )
            }
        >
            <MuiCardHeader
                action={onClose && (
                    <CloseIcon
                        className="cursor-pointer"
                        onClick={onClose}
                    />
                )}
                slotProps={{
                    ...slotProps,
                    title: {
                        className: classMerge(
                            'font-[700] leading-[24px] text-[#18181B] text-[20px]',
                            titleClassName
                        )
                    },
                    subheader: {
                        className: classMerge(
                            'leading-[14px] mt-[4px] text-[#71717A] text-[12px]',
                            subheaderClassName
                        )
                    }
                }}
                sx={[
                    baseStyle,
                    ...normalizeSx(sx)
                ]}
                {...props}
            />
            {children}
        </div>
    );
}