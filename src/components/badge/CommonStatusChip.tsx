import CircleIcon from '@icons/CircleIcon';
import { Box, Typography } from '@mui/material';

type StatusType = 'ACTIVE' | 'INACTIVE' | 'PRESENT' | 'ABSENT';

interface StatusBadgeProps {
    status: StatusType;
    iconSize?: number;
}

export default function CommonStatusChip({
    status,
    iconSize = 8
}: StatusBadgeProps) {
    const STATUS_STYLES = {
        positive: { backgroundColor: '#CEF6DF', textColor: '#2DCC70' },
        negative: { backgroundColor: '#E4E4E7', textColor: '#71717A' }
    };
    const STATUS_COLOR_MAP: Record<StatusType, { backgroundColor: string; textColor: string }> = {
        ACTIVE: STATUS_STYLES.positive,
        PRESENT: STATUS_STYLES.positive,
        INACTIVE: STATUS_STYLES.negative,
        ABSENT: STATUS_STYLES.negative
    };
    const { backgroundColor, textColor } = STATUS_COLOR_MAP[status];

    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                borderRadius: '99px',
                backgroundColor: backgroundColor,
                height: 18,
                padding: '0 8px'
            }}
        >
            <CircleIcon
                height={iconSize}
                style={{ color: textColor, marginRight: 4 }}
                width={iconSize}
            />
            <Typography
                sx={{
                    fontWeight: 600,
                    color: textColor,
                    fontSize: 12,
                    lineHeight: '18px'
                }}
            >
                {status}
            </Typography>
        </Box>
    );
}