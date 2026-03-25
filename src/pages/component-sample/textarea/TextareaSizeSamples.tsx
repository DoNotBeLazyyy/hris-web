import CommonTextarea from '@components/input/CommonTextarea';
import InputDemoRow from '@pages/component-sample/input/InputDemoRow';
import InputPreviewCard from '@pages/component-sample/input/InputPreviewCard';
import InputSectionCard from '@pages/component-sample/input/InputSectionCard';

export default function TextareaSizeSamples() {
    return (
        <InputSectionCard
            subtitle="Displays all supported CommonTextarea sizes with variant options."
            title="Size Scale"
        >
            <InputDemoRow label="Large / Outlined variant">
                <InputPreviewCard title="Large / Outlined / 4 rows">
                    <CommonTextarea
                        inputSize="LARGE"
                        inputVariant="OUTLINED"
                        placeholder="Large outlined textarea"
                        rows={4}
                    />
                </InputPreviewCard>

                <InputPreviewCard title="Large / Outlined / 6 rows">
                    <CommonTextarea
                        inputSize="LARGE"
                        inputVariant="OUTLINED"
                        placeholder="Large outlined textarea with more rows"
                        rows={6}
                    />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Large / Filled variant">
                <InputPreviewCard title="Large / Filled / 4 rows">
                    <CommonTextarea
                        inputSize="LARGE"
                        inputVariant="FILLED"
                        placeholder="Large filled textarea"
                        rows={4}
                    />
                </InputPreviewCard>

                <InputPreviewCard title="Large / Filled / 6 rows">
                    <CommonTextarea
                        inputSize="LARGE"
                        inputVariant="FILLED"
                        placeholder="Large filled textarea with more rows"
                        rows={6}
                    />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Small / Outlined variant">
                <InputPreviewCard title="Small / Outlined / 3 rows">
                    <CommonTextarea
                        inputSize="SMALL"
                        inputVariant="OUTLINED"
                        placeholder="Small outlined textarea"
                        rows={3}
                    />
                </InputPreviewCard>

                <InputPreviewCard title="Small / Outlined / 4 rows">
                    <CommonTextarea
                        inputSize="SMALL"
                        inputVariant="OUTLINED"
                        placeholder="Small outlined textarea with more rows"
                        rows={4}
                    />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Small / Filled variant">
                <InputPreviewCard title="Small / Filled / 3 rows">
                    <CommonTextarea
                        inputSize="SMALL"
                        inputVariant="FILLED"
                        placeholder="Small filled textarea"
                        rows={3}
                    />
                </InputPreviewCard>

                <InputPreviewCard title="Small / Filled / 4 rows">
                    <CommonTextarea
                        inputSize="SMALL"
                        inputVariant="FILLED"
                        placeholder="Small filled textarea with more rows"
                        rows={4}
                    />
                </InputPreviewCard>
            </InputDemoRow>
        </InputSectionCard>
    );
}