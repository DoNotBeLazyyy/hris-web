import { SxProps, Theme } from '@mui/material/styles';
import React from 'react';

// SizeType used for defining size.
export type SizeType = 'sm' | 'md' | 'lg';

// VariantType used for defining variant.
export type VariantType = 'filled' | 'outlined';

// SizeType used for defining size of CommonRadioButton.
export type CommonRadioButtonSize = 'size' | 'icon' | 'checkedIcon';

// event type for input change events.
export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

// Set Button mouse event
export type ButtonMouseEvent = React.MouseEvent<HTMLButtonElement>;

export type TooltipSlotProps = 'title' | 'children';

// Icon props
export type IconSvgProps = React.SVGProps<SVGSVGElement>;

// MUI props
export type ThemeSx = SxProps<Theme>;