import CommonInput from '@components/input/CommonInput';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { InputAdornment } from '@mui/material';
import InputDemoRow from '@pages/component-sample/input/InputDemoRow';
import InputPreviewCard from '@pages/component-sample/input/InputPreviewCard';
import InputSectionCard from '@pages/component-sample/input/InputSectionCard';

export default function InputQuickPreview() {
    return (
        <InputSectionCard
            subtitle="Common input examples for quick visual checking."
            title="Quick Preview"
        >
            <InputDemoRow label="Outlined variant">
                <InputPreviewCard title="Outlined / Default">
                    <CommonInput inputVariant="OUTLINED" placeholder="Enter full name" />
                </InputPreviewCard>

                <InputPreviewCard title="Outlined / Disabled">
                    <CommonInput disabled inputVariant="OUTLINED" placeholder="Disabled input" />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Filled variant">
                <InputPreviewCard title="Filled / Default">
                    <CommonInput inputVariant="FILLED" placeholder="Search records" />
                </InputPreviewCard>

                <InputPreviewCard title="Filled / Disabled">
                    <CommonInput disabled inputVariant="FILLED" placeholder="Disabled input" />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Outlined with adornments">
                <InputPreviewCard title="Outlined / Start icon">
                    <CommonInput
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

                <InputPreviewCard title="Outlined / End icon">
                    <CommonInput
                        inputVariant="OUTLINED"
                        placeholder="Pick date"
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <CalendarMonthOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }
                        }}
                    />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Filled with adornments">
                <InputPreviewCard title="Filled / Start icon">
                    <CommonInput
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

                <InputPreviewCard title="Filled / Start and end">
                    <CommonInput
                        inputVariant="FILLED"
                        placeholder="Password"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                ),
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