import { DialogProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { SVGProps } from 'react';

// Slot props
export type TooltipSlotProps = 'title' | 'children';

// Icon props
export type IconSvgProps = SVGProps<SVGSVGElement>;

// MUI props
export type ThemeSx = SxProps<Theme>;

// String props
export type StringNum = string | number;

// Record props
export type ThemeSxRecord<T extends PropertyKey> = Record<T, ThemeSx>;
export type StringKeyMap<T> = Record<string, T>;
export type UnknownStringKeyMap = StringKeyMap<unknown>;
export type StringValueMap = StringKeyMap<string>;

// Dialog props
type DialogOnClose = NonNullable<DialogProps['onClose']>;
export type DialogCloseProps = Parameters<DialogOnClose>;