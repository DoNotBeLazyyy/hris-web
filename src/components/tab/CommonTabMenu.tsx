import HomeIconBlue from '@assets/images/icons/home-icon-blue.png';
import HomeIconGray from '@assets/images/icons/home-icon-gray.png';
import HomeIconWhite from '@assets/images/icons/home-icon-white.png';
import { tabContainerStyle, tabStyle, spreadSx } from '@constants/style.constant';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { StringNum, ThemeSx } from '@type/common.type';
import { TabMenuVariant, TabOrientation } from '@type/common/style.type';
import { ReactElement, SyntheticEvent } from 'react';

export interface TabItem {
    // whether this individual tab is disabled.
    disabled?: boolean;

    // optional icon: a React element for custom icons, or true to use the built-in home icon.
    icon?: ReactElement | boolean;

    // custom size for icon when using the built-in home icon (in pixels).
    iconSize?: number;

    // label text for the tab.
    label: string;

    // unique value identifying this tab.
    value: StringNum;
}

interface CommonTabMenuProps {
    // custom color for the active tab state.
    customColor?: string;

    // whether all tabs are disabled.
    disabled?: boolean;

    // orientation of the tab menu.
    orientation?: TabOrientation;

    // custom sx styles for the tabs container.
    sx?: ThemeSx;

    // custom sx styles applied to each tab button.
    tabSx?: ThemeSx;

    // array of tab items to render.
    tabs: TabItem[];

    // currently selected tab value (controlled).
    value: StringNum;

    // visual variant of the tab menu.
    variant?: TabMenuVariant;

    // callback fired when the selected tab changes.
    onChange: (value: StringNum) => void;
}

/**
 * CommonTabMenu
 * A reusable tab menu component that wraps MUI Tabs/Tab and
 * supports filled, outlined, and soft variants with customizable colors.
 *
 * Example:
 * <CommonTabMenu
 *     tabs={[
 *         { label: 'Tab 1', value: 'tab1', icon: <HomeIcon /> },
 *         { label: 'Tab 2', value: 'tab2' },
 *         { label: 'Tab 3', value: 'tab3', disabled: true },
 *     ]}
 *     value={selected}
 *     variant="filled"
 *     onChange={(value) => setSelected(value)}
 * />
 */
export default function CommonTabMenu({
    customColor,
    disabled,
    orientation = 'horizontal',
    sx,
    tabSx,
    tabs,
    value,
    variant = 'filled',
    onChange
}: CommonTabMenuProps) {
    const color = customColor ?? '#022179'; // default active color if customColor is not provided
    const textColor = '#A1A1AA'; // default text color for non-active tabs
    const isFilled = variant === 'filled'; // determine if the variant is filled
    const isOutlined = variant === 'outlined'; // determine if the variant is outlined
    const isVertical = orientation === 'vertical'; // determine if the orientation is vertical

    /**
     * Handle tab change event and call the onChange callback with the new value.
     *
     * @param _ - the synthetic event (not used)
     * @param newValue - the value of the newly selected tab
     */
    function handleChange(_: SyntheticEvent, newValue: StringNum) {
        onChange(newValue);
    };

    return (
        <Tabs
            orientation={orientation}
            sx={[
                {
                    minHeight: 'unset',
                    ...(!isOutlined && { width: 'fit-content' }),
                    ...tabContainerStyle({
                        isFilled,
                        isOutlined,
                        isVertical,
                        color
                    })
                },
                ...spreadSx(sx)
            ]}
            value={value}
            onChange={handleChange}
        >
            {tabs.map((tab) => {
                const isActive = value === tab.value;
                const iconSize = tab.iconSize ?? 18;
                const iconSrc = isActive
                    ? (isFilled
                        ? HomeIconWhite
                        : HomeIconBlue)
                    : HomeIconGray;
                const tabIcon = tab.icon === true
                    ? (
                        <img
                            src={iconSrc}
                            style={{
                                width: iconSize,
                                height: iconSize
                            }}
                        />
                    )
                    : tab.icon || undefined;

                return (
                    <Tab
                        disabled={disabled || tab.disabled}
                        disableRipple
                        icon={tabIcon}
                        iconPosition="start"
                        key={tab.value}
                        label={tab.label}
                        sx={[
                            tabStyle({
                                isActive,
                                color,
                                textColor,
                                variant
                            }),
                            ...spreadSx(tabSx)
                        ]}
                        value={tab.value}
                    />
                );
            })}
        </Tabs>
    );
}