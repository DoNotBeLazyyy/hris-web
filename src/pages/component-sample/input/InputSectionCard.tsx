import { Box, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface InputSectionCardProps {
    children: ReactNode;
    subtitle?: string;
    title: string;
}

export default function InputSectionCard({
    children,
    subtitle,
    title
}: InputSectionCardProps) {
    return (
        <Box
            sx={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E4E4E7',
                borderRadius: '24px',
                boxShadow: '0 8px 24px 0 #0000000D',
                p: '24px'
            }}
        >
            <Stack spacing={1} sx={{ mb: '20px' }}>
                <Typography
                    sx={{
                        color: '#18181B',
                        fontSize: '20px',
                        fontWeight: 700,
                        lineHeight: '28px'
                    }}
                >
                    {title}
                </Typography>

                {subtitle && (
                    <Typography
                        sx={{
                            color: '#71717A',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '20px'
                        }}
                    >
                        {subtitle}
                    </Typography>
                )}
            </Stack>

            {children}
        </Box>
    );
}