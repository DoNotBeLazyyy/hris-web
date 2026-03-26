import { TextFieldProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FieldStyleProps } from '@type/common/style.type';
import React from 'react';

// Icon props
export type IconSvgProps = React.SVGProps<SVGSVGElement>;

// MUI props
export type ThemeSx = SxProps<Theme>;

// Props for common input components, extending MUI TextField with custom size and variant controls
export type CommonInputProps = Omit<TextFieldProps, 'size' | 'variant'> & FieldStyleProps;