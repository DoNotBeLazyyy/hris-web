import { SxProps, Theme } from '@mui/material/styles';
import React from 'react';

// event type for input change events.
export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

// Set Button mouse event
export type ButtonMouseEvent = React.MouseEvent<HTMLButtonElement>;

export type TooltipSlotProps = 'title' | 'children';

// Icon props
export type IconSvgProps = React.SVGProps<SVGSVGElement>;

// MUI props
export type ThemeSx = SxProps<Theme>;

// String type
export type StringNum = string | number;

export type RecordStringUnknown = Record<string, unknown>