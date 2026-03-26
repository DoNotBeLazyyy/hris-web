import { RadioIcon, spreadSx } from '@constants/style.constant';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio, { RadioProps } from '@mui/material/Radio';
import { ThemeSx } from '@type/common.type';
import { CommonRadioButtonSize } from '@type/common/style.type';
import { ReactNode } from 'react';

interface CommonRadioButtonProps extends Omit<RadioProps, CommonRadioButtonSize> {
    // whether the radio button is checked (controlled) or not.
    checked?: boolean;

    // custom color for radio button.
    customColor?: string;

    // whether the radio button is disabled or not.
    disabled?: boolean;

    // size of the radio button icon in pixels.
    iconSize?: number;

    // optional label displayed next to the radio button.
    label?: ReactNode;

    // custom sx styles for the radio button.
    radioSx?: ThemeSx;

}

/**
 * CommonRadioButton
 * A reusable radio button component that wraps the MUI Radio component and
 * provides additional features such as custom colors, icon sizes, and event handling.
 *
 * Example:
 * <CommonRadioButton
 *    customColor="#E4E4E7"
 *    iconSize={20}
 *    checked={selected === 'option1'}
 *    name="group1"
 *    value="option1"
 *    onChange={(e) => setSelected(e.target.value)}
 * />
 */
export default function CommonRadioButton({
    checked,
    className,
    customColor,
    disabled,
    iconSize,
    label,
    radioSx,
    ...props
}: CommonRadioButtonProps) {
    const color = customColor ?? '#1B2A6B'; // default custom color if not provided
    const size = iconSize ?? 24; // default icon size if not provided
    const colorLightGray = '#BDBDBD'; // light gray color for disabled state
    const fillColor = disabled
        ? colorLightGray
        : color; // fill color for checked state
    const borderColor = disabled
        ? colorLightGray
        : checked
            ? color
            : '#D5D5D5'; // border color for unchecked state
    const backgroundColor = '#FFFFFF'; // background color for both states
    const uncheckedIcon = disabled
        ? <RadioIcon
            backgroundColor={colorLightGray}
            color={colorLightGray}
            dotColor={backgroundColor}
            size={size}
        />
        : <RadioIcon
            backgroundColor={backgroundColor}
            color={borderColor}
            size={size}
        />; // custom unchecked icon

    return (
        <FormControlLabel
            control={
                <Radio
                    checked={checked}
                    checkedIcon={
                        <RadioIcon
                            backgroundColor={fillColor}
                            color={fillColor}
                            dotColor={backgroundColor}
                            size={size}
                        />
                    }
                    className={className}
                    disabled={disabled}
                    disableRipple
                    icon={uncheckedIcon}
                    sx={[
                        {
                            padding: 0,
                            width: size,
                            height: size,
                            '&:hover': {
                                backgroundColor: 'transparent'
                            }
                        },
                        ...spreadSx(radioSx)
                    ]}
                    value={props.value}
                    {...props}
                />
            }
            disabled={disabled}
            label={label}
            sx={{
                margin: 0,
                gap: '8px',
                '& .MuiFormControlLabel-label': {
                    color: '#6B7280',
                    fontSize: '16px'
                }
            }}
        />
    );
}