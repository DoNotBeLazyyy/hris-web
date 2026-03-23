import { ReactElement, SyntheticEvent } from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { SxProps, Theme } from '@mui/material/styles';

type TabMenuVariant = 'filled' | 'outlined' | 'soft';

export interface TabItem {
    // label text for the tab.
    label: string;

    // unique value identifying this tab.
    value: string | number;

    // optional icon: a React element (e.g. <HomeIcon />) or an image path string (e.g. PNG import).
    icon?: ReactElement | string;

    // optional icon shown when the tab is active (image path string). Falls back to `icon` if not provided.
    activeIcon?: string;

    // custom size for icon when using an image path string (in pixels).
    iconSize?: number;

    // whether this individual tab is disabled.
    disabled?: boolean;
}

interface CommonTabMenuProps {
    // array of tab items to render.
    tabs: TabItem[];

    // currently selected tab value (controlled).
    value: string | number;

    // custom color for the active tab state.
    customColor?: string;

    // whether all tabs are disabled.
    disabled?: boolean;

    // visual variant of the tab menu.
    variant?: TabMenuVariant;

    // orientation of the tab menu.
    orientation?: 'horizontal' | 'vertical';

    // custom sx styles for the tabs container.
    sx?: SxProps<Theme>;

    // custom sx styles applied to each tab button.
    tabSx?: SxProps<Theme>;

    // callback fired when the selected tab changes.
    onChange: (value: string | number) => void;
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
    tabs,
    value,
    customColor,
    disabled,
    variant = 'filled',
    orientation = 'horizontal',
    sx,
    tabSx,
    onChange
}: CommonTabMenuProps) {
    const color = customColor ?? '#022179';
    const textColor = '#A1A1AA';

    function handleChange(_: SyntheticEvent, newValue: string | number) {
        onChange(newValue);
    };

    const isFilled = variant === 'filled';
    const isOutlined = variant === 'outlined';
    const isVertical = orientation === 'vertical';

    return (
        <Tabs
            orientation={orientation}
            sx={[
                {
                    minHeight: 'unset',
                    ...(isOutlined
                        ? {
                            ...(isVertical
                                ? { borderRight: '2px solid #E5E7EB' }
                                : { borderBottom: '2px solid #E5E7EB' }
                            ),
                            '& .MuiTabs-indicator': {
                                backgroundColor: color,
                                ...(isVertical
                                    ? { width: '2px' }
                                    : { height: '2px' }
                                )
                            }
                        }
                        : {
                            ...(isFilled && { backgroundColor: '#F3F4F6' }),
                            borderRadius: '10px',
                            padding: '4px',
                            '& .MuiTabs-indicator': {
                                display: 'none'
                            }
                        }
                    )
                },
                ...(Array.isArray(sx)
                    ? sx
                    : sx
                        ? [sx]
                        : [])
            ]}
            value={value}
            onChange={handleChange}
        >
            {tabs.map((tab) => {
                const isActive = value === tab.value;

                return (
                    <Tab
                        disabled={disabled || tab.disabled}
                        disableFocusRipple
                        disableRipple
                        disableTouchRipple
                        icon={
                            typeof tab.icon === 'string' || tab.activeIcon
                                ? <img
                                    alt=""
                                    src={isActive && tab.activeIcon
                                        ? tab.activeIcon
                                        : (tab.icon as string)}
                                    style={{ width: tab.iconSize ?? 18, height: tab.iconSize ?? 18 }}
                                />
                                : tab.icon
                        }
                        iconPosition="start"
                        key={tab.value}
                        label={tab.label}
                        sx={[
                            {
                                textTransform: 'none',
                                minHeight: 'unset',
                                minWidth: 'unset',
                                padding: '7px 10px',
                                fontSize: '13px',
                                fontWeight: 700,
                                transition: 'all 0.2s ease',
                                borderRadius: isOutlined
                                    ? 0
                                    : '8px',
                                color: textColor,
                                '&.Mui-selected': {
                                    color: isFilled
                                        ? '#FFFFFF'
                                        : isOutlined
                                            ? color
                                            : '#3F3F46'
                                },
                                backgroundColor: isActive
                                    ? (isFilled
                                        ? color
                                        : (isOutlined
                                            ? 'transparent'
                                            : '#F4F4F5'))
                                    : 'transparent',
                                boxShadow: isActive && variant === 'soft'
                                    ? '0px 1px 3px rgba(0, 0, 0, 0.1)'
                                    : 'none',
                                '& .MuiTab-iconWrapper': {
                                    color: isActive
                                        ? '#FFFFFF'
                                        : textColor,
                                    marginRight: '6px'
                                },
                                '&:hover': {
                                    backgroundColor: isActive
                                        ? (isFilled
                                            ? color
                                            : (isOutlined
                                                ? 'transparent'
                                                : '#FFFFFF'))
                                        : 'rgba(0, 0, 0, 0.04)'
                                },
                                '& .MuiTouchRipple-root': {
                                    display: 'none'
                                }
                            },
                            ...(Array.isArray(tabSx)
                                ? tabSx
                                : tabSx
                                    ? [tabSx]
                                    : [])
                        ]}
                        value={tab.value}
                    />
                );
            })}
        </Tabs>
    );
}