import CommonInput from '@components/input/CommonInput';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import InputDemoRow from '@pages/component-sample/input/InputDemoRow';
import InputPreviewCard from '@pages/component-sample/input/InputPreviewCard';
import InputSectionCard from '@pages/component-sample/input/InputSectionCard';

export default function InputSizeSamples() {
    return (
        <InputSectionCard
            subtitle="Displays all supported CommonInput sizes with variant options."
            title="Size Scale"
        >
            <InputDemoRow label="Large / Outlined variant">
                <InputPreviewCard title="Large / Outlined / default">
                    <CommonInput
                        inputSize="LARGE"
                        inputVariant="OUTLINED"
                        placeholder="Large outlined input"
                    />
                </InputPreviewCard>

                <InputPreviewCard title="Large / Outlined / with start icon">
                    <CommonInput
                        inputSize="LARGE"
                        inputVariant="OUTLINED"
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

                <InputPreviewCard title="Large / Outlined / with end icon">
                    <CommonInput
                        inputSize="LARGE"
                        inputVariant="OUTLINED"
                        placeholder="Search"
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }
                        }}
                    />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Large / Filled variant">
                <InputPreviewCard title="Large / Filled / default">
                    <CommonInput
                        inputSize="LARGE"
                        inputVariant="FILLED"
                        placeholder="Large filled input"
                    />
                </InputPreviewCard>

                <InputPreviewCard title="Large / Filled / with start icon">
                    <CommonInput
                        inputSize="LARGE"
                        inputVariant="FILLED"
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

                <InputPreviewCard title="Large / Filled / with end icon">
                    <CommonInput
                        inputSize="LARGE"
                        inputVariant="FILLED"
                        placeholder="Search"
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }
                        }}
                    />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Small / Outlined variant">
                <InputPreviewCard title="Small / Outlined / default">
                    <CommonInput
                        inputSize="SMALL"
                        inputVariant="OUTLINED"
                        placeholder="Small outlined input"
                    />
                </InputPreviewCard>

                <InputPreviewCard title="Small / Outlined / with start icon">
                    <CommonInput
                        inputSize="SMALL"
                        inputVariant="OUTLINED"
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

                <InputPreviewCard title="Small / Outlined / with end icon">
                    <CommonInput
                        inputSize="SMALL"
                        inputVariant="OUTLINED"
                        placeholder="Search"
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }
                        }}
                    />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Small / Filled variant">
                <InputPreviewCard title="Small / Filled / default">
                    <CommonInput
                        inputSize="SMALL"
                        inputVariant="FILLED"
                        placeholder="Small filled input"
                    />
                </InputPreviewCard>

                <InputPreviewCard title="Small / Filled / with start icon">
                    <CommonInput
                        inputSize="SMALL"
                        inputVariant="FILLED"
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

                <InputPreviewCard title="Small / Filled / with end icon">
                    <CommonInput
                        inputSize="SMALL"
                        inputVariant="FILLED"
                        placeholder="Search"
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
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