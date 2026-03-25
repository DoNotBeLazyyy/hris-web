import CommonInput from '@components/input/CommonInput';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { InputAdornment } from '@mui/material';
import InputDemoRow from '@pages/component-sample/input/InputDemoRow';
import InputPreviewCard from '@pages/component-sample/input/InputPreviewCard';
import InputSectionCard from '@pages/component-sample/input/InputSectionCard';

export default function InputAdornmentSamples() {
    return (
        <InputSectionCard
            subtitle="Adornment combinations using start and end icons with variant options."
            title="Adornment Variations"
        >
            <InputDemoRow label="Start icon / Outlined">
                <InputPreviewCard title="Outlined / Search">
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

                <InputPreviewCard title="Outlined / Email">
                    <CommonInput
                        inputVariant="OUTLINED"
                        placeholder="Email address"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AlternateEmailIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }
                        }}
                    />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="Start icon / Filled">
                <InputPreviewCard title="Filled / Search">
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

                <InputPreviewCard title="Filled / Email">
                    <CommonInput
                        inputVariant="FILLED"
                        placeholder="Email address"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AlternateEmailIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }
                        }}
                    />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="End icon / Outlined">
                <InputPreviewCard title="Outlined / Calendar">
                    <CommonInput
                        inputVariant="OUTLINED"
                        placeholder="Select date"
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

                <InputPreviewCard title="Outlined / Password">
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

            <InputDemoRow label="End icon / Filled">
                <InputPreviewCard title="Filled / Calendar">
                    <CommonInput
                        inputVariant="FILLED"
                        placeholder="Select date"
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

                <InputPreviewCard title="Filled / Password">
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

            <InputDemoRow label="Start and end icon / Outlined">
                <InputPreviewCard title="Outlined / Search + action">
                    <CommonInput
                        inputVariant="OUTLINED"
                        placeholder="Search keyword"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <CalendarMonthOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }
                        }}
                    />
                </InputPreviewCard>

                <InputPreviewCard title="Outlined / Email + visibility">
                    <CommonInput
                        inputVariant="OUTLINED"
                        placeholder="Enter credential"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AlternateEmailIcon fontSize="small" />
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

            <InputDemoRow label="Start and end icon / Filled">
                <InputPreviewCard title="Filled / Search + action">
                    <CommonInput
                        inputVariant="FILLED"
                        placeholder="Search keyword"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <CalendarMonthOutlinedIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }
                        }}
                    />
                </InputPreviewCard>

                <InputPreviewCard title="Filled / Email + visibility">
                    <CommonInput
                        inputVariant="FILLED"
                        placeholder="Enter credential"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AlternateEmailIcon fontSize="small" />
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