import CommonTextarea from '@components/input/CommonTextarea';
import InputDemoRow from '@pages/component-sample/input/InputDemoRow';
import InputPreviewCard from '@pages/component-sample/input/InputPreviewCard';
import InputSectionCard from '@pages/component-sample/input/InputSectionCard';

export default function TextareaVariationSamples() {
    return (
        <InputSectionCard
            subtitle="Additional textarea variations with labels and helper text."
            title="Variation Samples"
        >
            <InputDemoRow label="With labels / Outlined">
                <InputPreviewCard title="Outlined / Labeled">
                    <CommonTextarea
                        inputVariant="OUTLINED"
                        label="Description"
                        placeholder="Enter description"
                    />
                </InputPreviewCard>
                <InputPreviewCard title="Outlined / With helper text">
                    <CommonTextarea
                        helperText="Keep it brief and constructive"
                        inputVariant="OUTLINED"
                        label="Feedback"
                        placeholder="Share your feedback"
                    />
                </InputPreviewCard>
            </InputDemoRow>
            <InputDemoRow label="With labels / Filled">
                <InputPreviewCard title="Filled / Labeled">
                    <CommonTextarea
                        inputVariant="FILLED"
                        label="Description"
                        placeholder="Enter description"
                    />
                </InputPreviewCard>
                <InputPreviewCard title="Filled / With helper text">
                    <CommonTextarea
                        helperText="Keep it brief and constructive"
                        inputVariant="FILLED"
                        label="Feedback"
                        placeholder="Share your feedback"
                    />
                </InputPreviewCard>
            </InputDemoRow>
            <InputDemoRow label="Full width / Outlined">
                <InputPreviewCard title="Outlined / Labeled full width">
                    <CommonTextarea
                        fullWidth
                        inputVariant="OUTLINED"
                        label="Comments"
                        placeholder="Leave your comments here"
                    />
                </InputPreviewCard>
                <InputPreviewCard title="Outlined / With helper full width">
                    <CommonTextarea
                        fullWidth
                        helperText="Maximum 500 characters"
                        inputVariant="OUTLINED"
                        label="Notes"
                        placeholder="Additional notes"
                        rows={5}
                    />
                </InputPreviewCard>
            </InputDemoRow>
            <InputDemoRow label="Full width / Filled">
                <InputPreviewCard title="Filled / Labeled full width">
                    <CommonTextarea
                        fullWidth
                        inputVariant="FILLED"
                        label="Comments"
                        placeholder="Leave your comments here"
                    />
                </InputPreviewCard>
                <InputPreviewCard title="Filled / With helper full width">
                    <CommonTextarea
                        fullWidth
                        helperText="Maximum 500 characters"
                        inputVariant="FILLED"
                        label="Notes"
                        placeholder="Additional notes"
                        rows={5}
                    />
                </InputPreviewCard>
            </InputDemoRow>
            <InputDemoRow label="Required field indicator">
                <InputPreviewCard title="Outlined / Required">
                    <CommonTextarea
                        inputVariant="OUTLINED"
                        label="Required Description"
                        placeholder="This field is required"
                        required
                    />
                </InputPreviewCard>
                <InputPreviewCard title="Filled / Required with error">
                    <CommonTextarea
                        error
                        helperText="This field cannot be empty"
                        inputVariant="FILLED"
                        label="Required Feedback"
                        placeholder="This field is required"
                        required
                    />
                </InputPreviewCard>
            </InputDemoRow>
        </InputSectionCard>
    );
}