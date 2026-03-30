import Typography from '@mui/material/Typography';

/**
 * SampleCardBody
 *
 * Demonstrates the internal content structure for the CommonCard sample.
 *
 * @example
 * <SampleCardBody />
 */
export default function SampleCardBody() {
    return (
        <Typography>
            This is the body of the card. Because it is passed as a child, it renders seamlessly below the customized CardHeader.
        </Typography>
    );
}