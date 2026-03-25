import CommonTextarea from '@components/input/CommonTextarea';
import InputDemoRow from '@pages/component-sample/input/InputDemoRow';
import InputPreviewCard from '@pages/component-sample/input/InputPreviewCard';
import InputSectionCard from '@pages/component-sample/input/InputSectionCard';

export default function TextareaStateSamples() {
    return (
        <InputSectionCard
            subtitle="Reference examples for different textarea states and variants."
            title="State Reference"
        >
            <InputDemoRow label="Default / Outlined">
                <InputPreviewCard title="Outlined / Regular">
                    <CommonTextarea inputVariant="OUTLINED" placeholder="Enter comments" />
                </InputPreviewCard>

                <InputPreviewCard title="Outlined / 5 rows">
                    <CommonTextarea
                        inputVariant="OUTLINED"
                        placeholder="Longer textarea for detailed information"
                        rows={5}
                    />
                </InputPreviewCard>

                <InputPreviewCard title="Outlined / With value">
                    <CommonTextarea
                        defaultValue="Sample text content in textarea"
                        inputVariant="OUTLINED"
                    />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Default / Filled">
                <InputPreviewCard title="Filled / Regular">
                    <CommonTextarea inputVariant="FILLED" placeholder="Enter comments" />
                </InputPreviewCard>

                <InputPreviewCard title="Filled / 5 rows">
                    <CommonTextarea
                        inputVariant="FILLED"
                        placeholder="Longer textarea for detailed information"
                        rows={5}
                    />
                </InputPreviewCard>

                <InputPreviewCard title="Filled / With value">
                    <CommonTextarea
                        defaultValue="Sample text content in textarea"
                        inputVariant="FILLED"
                    />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Disabled / Outlined">
                <InputPreviewCard title="Outlined / Disabled / regular">
                    <CommonTextarea disabled inputVariant="OUTLINED" placeholder="Disabled textarea" />
                </InputPreviewCard>

                <InputPreviewCard title="Outlined / Disabled / with value">
                    <CommonTextarea
                        defaultValue="This textarea is disabled and cannot be edited"
                        disabled
                        inputVariant="OUTLINED"
                    />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Disabled / Filled">
                <InputPreviewCard title="Filled / Disabled / regular">
                    <CommonTextarea disabled inputVariant="FILLED" placeholder="Disabled textarea" />
                </InputPreviewCard>

                <InputPreviewCard title="Filled / Disabled / with value">
                    <CommonTextarea
                        defaultValue="This textarea is disabled and cannot be edited"
                        disabled
                        inputVariant="FILLED"
                    />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Error state / Outlined">
                <InputPreviewCard title="Outlined / Error">
                    <CommonTextarea
                        error
                        helperText="This field is required"
                        inputVariant="OUTLINED"
                        placeholder="Enter valid content"
                    />
                </InputPreviewCard>

                <InputPreviewCard title="Outlined / Error with value">
                    <CommonTextarea
                        defaultValue="Invalid input"
                        error
                        helperText="Please correct the errors"
                        inputVariant="OUTLINED"
                    />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Error state / Filled">
                <InputPreviewCard title="Filled / Error">
                    <CommonTextarea
                        error
                        helperText="This field is required"
                        inputVariant="FILLED"
                        placeholder="Enter valid content"
                    />
                </InputPreviewCard>

                <InputPreviewCard title="Filled / Error with value">
                    <CommonTextarea
                        defaultValue="Invalid input"
                        error
                        helperText="Please correct the errors"
                        inputVariant="FILLED"
                    />
                </InputPreviewCard>
            </InputDemoRow>
        </InputSectionCard>
    );
}