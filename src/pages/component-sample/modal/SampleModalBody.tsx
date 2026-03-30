import Typography from '@mui/material/Typography';

/**
 * SampleModalBody
 *
 * The nested content rendered inside the sample modal.
 *
 * @example
 * <SampleModalBody />
 */
export default function SampleModalBody() {
    return (
        <div className="flex flex-col gap-[12px]">
            <Typography>
                Are you sure you want to proceed with this action?
            </Typography>
            <Typography>
                Clicking the backdrop or the &quot;X&quot; button will trigger the close event seamlessly.
            </Typography>
        </div>
    );
}