import { SxProps, Theme } from '@mui/material/styles';
import { ChangeEvent, MouseEvent, SVGProps } from 'react';
import { FieldStyleProps } from '@type/common/style.type';
import { TextFieldProps } from 'node_modules/@mui/material/esm/TextField/TextField';

// event type for input change events.
export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

// Event props
export type ButtonMouseEvent = MouseEvent<HTMLButtonElement>;

// Slot props for components that have multiple customizable slots.
export type TooltipSlotProps = 'title' | 'children';

// Icon props
export type IconSvgProps = SVGProps<SVGSVGElement>;

// MUI props
export type ThemeSx = SxProps<Theme>;

// String type
export type StringNum = string | number;

// Generic record type with string keys and unknown values.
export type RecordStringUnknown = Record<string, unknown>

// Props for common input components, extending MUI TextField with custom size and variant controls
export type CommonInputProps = Omit<TextFieldProps, 'size' | 'variant'> & FieldStyleProps;

export type RecordString = Record<string, string>;