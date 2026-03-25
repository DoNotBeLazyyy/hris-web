import CommonInput from '@components/input/CommonInput';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { InputAdornment } from '@mui/material';
import InputDemoRow from '@pages/component-sample/input/InputDemoRow';
import InputPreviewCard from '@pages/component-sample/input/InputPreviewCard';
import InputSectionCard from '@pages/component-sample/input/InputSectionCard';

export default function InputStateSamples() {
    return (
        <InputSectionCard
            subtitle="Reference examples for different input states and variants."
            title="State Reference"
        >
            <InputDemoRow label="Default / Outlined">
                <InputPreviewCard title="Outlined / Regular">
                    <CommonInput inputVariant="OUTLINED" placeholder="Enter username" />
                </InputPreviewCard>

                <InputPreviewCard title="Outlined / With start icon">
                    <CommonInput
                        inputVariant="OUTLINED"
                        placeholder="Search users"
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

                <InputPreviewCard title="Outlined / With end icon">
                    <CommonInput
                        inputVariant="OUTLINED"
                        placeholder="Password"
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <VisibilityOffOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }
                        }}
                    />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Default / Filled">
                <InputPreviewCard title="Filled / Regular">
                    <CommonInput inputVariant="FILLED" placeholder="Enter username" />
                </InputPreviewCard>

                <InputPreviewCard title="Filled / With start icon">
                    <CommonInput
                        inputVariant="FILLED"
                        placeholder="Search users"
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

                <InputPreviewCard title="Filled / With end icon">
                    <CommonInput
                        inputVariant="FILLED"
                        placeholder="Password"
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <VisibilityOffOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }
                        }}
                    />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Disabled / Outlined">
                <InputPreviewCard title="Outlined / Disabled / regular">
                    <CommonInput disabled inputVariant="OUTLINED" placeholder="Disabled input" />
                </InputPreviewCard>

                <InputPreviewCard title="Outlined / Disabled / start icon">
                    <CommonInput
                        disabled
                        inputVariant="OUTLINED"
                        placeholder="Disabled search"
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

                <InputPreviewCard title="Outlined / Disabled / end icon">
                    <CommonInput
                        disabled
                        inputVariant="OUTLINED"
                        placeholder="Disabled password"
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <VisibilityOffOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }
                        }}
                    />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Disabled / Filled">
                <InputPreviewCard title="Filled / Disabled / regular">
                    <CommonInput disabled inputVariant="FILLED" placeholder="Disabled input" />
                </InputPreviewCard>

                <InputPreviewCard title="Filled / Disabled / start icon">
                    <CommonInput
                        disabled
                        inputVariant="FILLED"
                        placeholder="Disabled search"
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

                <InputPreviewCard title="Filled / Disabled / end icon">
                    <CommonInput
                        disabled
                        inputVariant="FILLED"
                        placeholder="Disabled password"
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <VisibilityOffOutlinedIcon fontSize="small" />
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