import { TextFieldProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FieldStyleProps } from '@type/common/style.type';
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

// Generic record type with string keys and unknown values.
export type RecordStringUnknown = Record<string, unknown>

// Props for common input components, extending MUI TextField with custom size and variant controls
export type CommonInputProps = Omit<TextFieldProps, 'size' | 'variant'> & FieldStyleProps;