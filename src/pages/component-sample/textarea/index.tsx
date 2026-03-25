import { Box, Stack, Typography } from '@mui/material';
import TextareaQuickPreview from '@pages/component-sample/textarea/TextareaQuickPreview';
import TextareaSizeSamples from '@pages/component-sample/textarea/TextareaSizeSamples';
import TextareaStateSamples from '@pages/component-sample/textarea/TextareaStateSamples';
import TextareaVariationSamples from '@pages/component-sample/textarea/TextareaVariationSamples';

export default function CommonTextareaSample() {
    return (
        <Box
            sx={{
                backgroundColor: '#F8FAFC',
                minHeight: '100vh',
                p: {
                    xs: '20px',
                    md: '32px'
                }
            }}
        >
            <Stack spacing={4}>
                <Box>
                    <Typography
                        sx={{
                            color: '#18181B',
                            fontSize: {
                                xs: '28px',
                                md: '36px'
                            },
                            fontWeight: 700,
                            lineHeight: {
                                xs: '36px',
                                md: '44px'
                            },
                            mb: '8px'
                        }}
                    >
                        CommonTextarea Display Page
                    </Typography>

                    <Typography
                        sx={{
                            color: '#52525B',
                            fontSize: '15px',
                            fontWeight: 400,
                            lineHeight: '24px',
                            maxWidth: '900px'
                        }}
                    >
                        This page displays the available CommonTextarea combinations in an organized layout,
                        grouped by quick preview, size scale, state reference, and variation samples.
                    </Typography>
                </Box>

                <TextareaQuickPreview />
                <TextareaSizeSamples />
                <TextareaStateSamples />
                <TextareaVariationSamples />
            </Stack>
        </Box>
    );
}