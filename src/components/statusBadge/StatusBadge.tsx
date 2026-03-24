import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import CircleIcon from '@mui/icons-material/Circle';
import WarningIcon from '@mui/icons-material/Warning';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';

type StatusType = 'info' | 'success' | 'warning' | 'error';

interface StatusBadgeProps {
    label?: string;
    status?: StatusType;
    sx?: SxProps<Theme>;
}

const STATUS_CONFIG: Record<
    StatusType,
    {
        color: string;
        bg: string;
        icon: React.ReactNode;
    }
> = {
    info: {
        color: '#3B82F6',
        bg: '#DBEAFE',
        icon: <CircleIcon fontSize="small" />
    },
    success: {
        color: '#22C55E',
        bg: '#DCFCE7',
        icon: <CheckIcon fontSize="small" />
    },
    warning: {
        color: '#F59E0B',
        bg: '#FEF3C7',
        icon: <WarningIcon fontSize="small" />
    },
    error: {
        color: '#EF4444',
        bg: '#FEE2E2',
        icon: <CancelIcon fontSize="small" />
    }
};

export default function StatusBadge({
    label = 'Status',
    status = 'info',
    sx
}: StatusBadgeProps) {
    const config = STATUS_CONFIG[status];

    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '999px',
                backgroundColor: config.bg,
                color: config.color,
                fontWeight: 600,
                fontSize: '14px',
                width: 'fit-content',
                ...sx
            }}
        >
            {config.icon}
            <Typography
                sx={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'inherit'
                }}
            >
                {label}
            </Typography>
        </Box>
    );
}