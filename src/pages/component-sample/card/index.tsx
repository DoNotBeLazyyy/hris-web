import CommonCard from '@components/card/CommonCard';
import Box from '@mui/material/Box';
import SampleCardBody from '@pages/component-sample/card/SampleCardBody';

/**
 * CardSamplePage
 *
 * A dedicated page showcasing the standalone usage of the CommonCard component.
 *
 * @example
 * <CardSamplePage />
 */
export default function CardSamplePage() {
    return (
        <Box className="flex items-center justify-center min-h-screen p-[40px]">
            <CommonCard
                cardHeaderProps={{
                    subheader: 'Demonstration of the standalone card',
                    title: 'CommonCard Sample'
                }}
                className="max-w-[500px]"
            >
                <SampleCardBody />
            </CommonCard>
        </Box>
    );
}