import { SxProps, Theme } from '@mui/material/styles';
import { ChangeEvent, MouseEvent, SVGProps } from 'react';

// event type for input change events.
export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

// Event props
export type ButtonMouseEvent = MouseEvent<HTMLButtonElement>;

// Slot props
export type TooltipSlotProps = 'title' | 'children';

// Icon props
export type IconSvgProps = SVGProps<SVGSVGElement>;

// MUI props
export type ThemeSx = SxProps<Theme>;

// String props
export type StringNum = string | number;

// Record props
export type RecordStringUnknown = Record<string, unknown>
export type RecordString = Record<string, string>;