import CommonButton from '@components/button/CommonButton';
import DownloadIcon from '@icons/DownloadIcon';
import PlusIcon from '@icons/PlusIcon';
import SaveIcon from '@icons/SaveIcon';
import { BUTTON_SIZES } from '@pages/component-sample/button/constant';
import DemoRow from '@pages/component-sample/button/DemoRow';
import SectionCard from '@pages/component-sample/button/SectionCard';
import { ButtonVariant } from '@type/common/style.type';

interface VariantGroupProps {
    variant: ButtonVariant;
}

export default function VariantGroup({ variant }: VariantGroupProps) {
    return (
        <SectionCard
            subtitle={`CommonButton samples for the ${variant} variant.`}
            title={`${variant} Variant`}
        >
            <DemoRow label="Default">
                {BUTTON_SIZES.map((size) => (
                    <CommonButton
                        key={`${variant}-${size}-default`}
                        size={size}
                        variant={variant}
                    >
                        {size}
                    </CommonButton>
                ))}
            </DemoRow>
            <DemoRow label="Disabled">
                {BUTTON_SIZES.map((size) => (
                    <CommonButton
                        disabled
                        key={`${variant}-${size}-disabled`}
                        size={size}
                        variant={variant}
                    >
                        {size}
                    </CommonButton>
                ))}
            </DemoRow>
            <DemoRow label="Loading">
                {BUTTON_SIZES.map((size) => (
                    <CommonButton
                        key={`${variant}-${size}-loading`}
                        loadingProps={{ isLoading: true }}
                        size={size}
                        startIcon={<SaveIcon />}
                        variant={variant}
                    >
                        {size}
                    </CommonButton>
                ))}
            </DemoRow>
            <DemoRow label="With start icon">
                {BUTTON_SIZES.map((size) => (
                    <CommonButton
                        key={`${variant}-${size}-start-icon`}
                        size={size}
                        startIcon={<PlusIcon />}
                        variant={variant}
                    >
                        Create
                    </CommonButton>
                ))}
            </DemoRow>
            <DemoRow label="With end icon">
                {BUTTON_SIZES.map((size) => (
                    <CommonButton
                        endIcon={<DownloadIcon />}
                        key={`${variant}-${size}-end-icon`}
                        size={size}
                        variant={variant}
                    >
                        Export
                    </CommonButton>
                ))}
            </DemoRow>
        </SectionCard>
    );
}