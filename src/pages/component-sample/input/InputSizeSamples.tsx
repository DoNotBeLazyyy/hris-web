import CommonInput from '@components/input/CommonInput';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import InputDemoRow from '@pages/component-sample/input/InputDemoRow';
import InputPreviewCard from '@pages/component-sample/input/InputPreviewCard';
import InputSectionCard from '@pages/component-sample/input/InputSectionCard';

export default function InputSizeSamples() {
    return (
        <InputSectionCard
            subtitle="Displays all supported CommonInput sizes."
            title="Size Scale"
        >
            <InputDemoRow label="Large">
                <InputPreviewCard title="Large / default">
                    <CommonInput
                        inputSize="LARGE"
                        placeholder="Large input"
                    />
                </InputPreviewCard>

                <InputPreviewCard title="Large / with start icon">
                    <CommonInput
                        inputSize="LARGE"
                        placeholder="Search"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }
                        }}
                    />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Small">
                <InputPreviewCard title="Small / default">
                    <CommonInput
                        inputSize="SMALL"
                        placeholder="Small input"
                    />
                </InputPreviewCard>

                <InputPreviewCard title="Small / with start icon">
                    <CommonInput
                        inputSize="SMALL"
                        placeholder="Search"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }
                        }}
                    />
                </InputPreviewCard>
            </InputDemoRow>
        </InputSectionCard>
    );
}