import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface InputPreviewCardProps {
    children: ReactNode;
    title: string;
}

export default function InputPreviewCard({
    children,
    title
}: InputPreviewCardProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                maxWidth: '320px',
                minWidth: '260px',
                width: '100%'
            }}
        >
            <Typography
                sx={{
                    color: '#71717A',
                    fontSize: '13px',
                    fontWeight: 600,
                    lineHeight: '18px'
                }}
            >
                {title}
            </Typography>

            {children}
        </Box>
    );
}