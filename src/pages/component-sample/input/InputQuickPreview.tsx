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
            <InputDemoRow label="Primary samples">
                <InputPreviewCard title="Default">
                    <CommonInput placeholder="Enter full name" />
                </InputPreviewCard>

                <InputPreviewCard title="Flat">
                    <CommonInput placeholder="Search records" />
                </InputPreviewCard>

                <InputPreviewCard title="Disabled">
                    <CommonInput disabled placeholder="Disabled input" />
                </InputPreviewCard>
            </InputDemoRow>

            <InputDemoRow label="With adornments">
                <InputPreviewCard title="Start icon">
                    <CommonInput
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

                <InputPreviewCard title="End icon">
                    <CommonInput
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

                <InputPreviewCard title="Start and end icon">
                    <CommonInput
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