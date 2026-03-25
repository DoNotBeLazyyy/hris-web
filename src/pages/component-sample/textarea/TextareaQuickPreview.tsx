import CommonTextarea from '@components/input/CommonTextarea';
import InputDemoRow from '@pages/component-sample/input/InputDemoRow';
import InputPreviewCard from '@pages/component-sample/input/InputPreviewCard';
import InputSectionCard from '@pages/component-sample/input/InputSectionCard';

export default function TextareaQuickPreview() {
    return (
        <InputSectionCard
            subtitle="Common textarea examples for quick visual checking."
            title="Quick Preview"
        >
            <InputDemoRow label="Outlined variant">
                <InputPreviewCard title="Outlined / Default">
                    <CommonTextarea inputVariant="OUTLINED" placeholder="Enter description" />
                </InputPreviewCard>

                <InputPreviewCard title="Outlined / Disabled">
                    <CommonTextarea disabled inputVariant="OUTLINED" placeholder="Disabled textarea" />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Filled variant">
                <InputPreviewCard title="Filled / Default">
                    <CommonTextarea inputVariant="FILLED" placeholder="Enter comments" />
                </InputPreviewCard>

                <InputPreviewCard title="Filled / Disabled">
                    <CommonTextarea disabled inputVariant="FILLED" placeholder="Disabled textarea" />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Different row counts">
                <InputPreviewCard title="Outlined / 4 rows">
                    <CommonTextarea inputVariant="OUTLINED" placeholder="4-row textarea" rows={4} />
                </InputPreviewCard>

                <InputPreviewCard title="Filled / 6 rows">
                    <CommonTextarea inputVariant="FILLED" placeholder="6-row textarea" rows={6} />
                </InputPreviewCard>
            </InputDemoRow>
        </InputSectionCard>
    );
}