import { STATUS_BADGE_STYLE } from '@constants/style.constant';
import { Box, BoxProps, Typography } from '@mui/material';
import { StatusBadgeVariant } from '@type/common/style.type';

interface CommonStatusBadgeProps extends BoxProps{
    // Text displayed inside the status badge
    label: string;

    // Determines the badge style and color
    status: StatusBadgeVariant;
}

/**
 * CommonStatusBadge
 * A reusable status badge component built with MUI that displays a label
 * with a corresponding status style (color, background, and icon).
 *
 * Example:
 * <CommonStatusBadge
 *   label="Active"
 *   status="SUCCESS"
 * />
 */
export default function CommonStatusBadge({
    label,
    status = 'INFO',
    sx
}: CommonStatusBadgeProps) {
    const config = STATUS_BADGE_STYLE[status]; // Retrieve style configuration based on the selected status

    return (
        <Box
            sx={{
                alignItems: 'center',
                borderWidth: '1px',
                borderColor: config.color,
                display: 'inline-flex',
                justifyContent: 'center',
                gap: '4px',
                minWidth: '63px',
                width: 'full',
                paddingX: '5px',
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