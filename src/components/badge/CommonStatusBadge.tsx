import { STATUS_CONFIG } from '@constants/style.constant';
import { Box, BoxProps, Typography } from '@mui/material';
import { StatusBadgeVariant } from '@type/common/style.type';

interface CommonStatusBadgeProps extends BoxProps{
    label?: string;
    status?: StatusBadgeVariant;
}

export default function CommonStatusBadge({
    label = 'Status',
    status = 'INFO',
    sx
}: CommonStatusBadgeProps) {
    const config = STATUS_CONFIG[status];

    return (
        <Box
            sx={{
                alignItems: 'center',
                borderWidth: '1px',
                borderColor: config.color,
                display: 'inline-flex',
                justifyContent: 'center',
                gap: '4px',
                width: '63px',
                height: '18px',
                borderRadius: '4px',
                backgroundColor: config.backgroundColor,
                color: config.color,
                fontWeight: 600,
                lineHeight: 1,
                ...sx
            }}
        >
            {config.icon}
            <Typography
                sx={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'inherit'
                }}
            >
                {label}
            </Typography>
        </Box>
    );
}