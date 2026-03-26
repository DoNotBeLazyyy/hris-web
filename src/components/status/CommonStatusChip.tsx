import { STATUS_CHIP_MAP } from '@constants/style.constant';
import CircleIcon from '@icons/CircleIcon';
import { Box, BoxProps, Typography } from '@mui/material';
import { StatusChipType } from '@type/common/style.type';

interface StatusChipProps extends BoxProps {
    // Defines the status type used to determine color and label
    status: StatusChipType;

    // Size of the status icon
    iconSize?: number;
}

export default function CommonStatusChip({
    status,
    iconSize = 8
}: StatusChipProps) {
    const { backgroundColor, textColor, label } = STATUS_CHIP_MAP[status];

    return (
        <Box
            sx={{
                alignItems: 'center',
                backgroundColor,
                borderRadius: '99px',
                display: 'inline-flex',
                height: 18,
                padding: '0 8px'
            }}
        >
            <CircleIcon
                height={iconSize}
                style={{
                    color: textColor,
                    marginRight: 4
                }}
                width={iconSize}
            />
            <Typography
                sx={{
                    color: textColor,
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: '18px'
                }}
            >
                {label}
            </Typography>
        </Box>
    );
}