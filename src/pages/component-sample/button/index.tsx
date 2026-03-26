import CommonButton from '@components/button/CommonButton';
import PlusIcon from '@components/icons/PlusIcon';
import SpinnerIcon from '@components/icons/SpinnerIcon';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, Stack, Typography } from '@mui/material';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '@pages/component-sample/button/constant';
import DemoRow from '@pages/component-sample/button/DemoRow';
import SectionCard from '@pages/component-sample/button/SectionCard';
import VariantGroup from '@pages/component-sample/button/VariantGroup';

export default function CommonButtonSample() {
    return (
        <Box
            sx={{
                backgroundColor: '#F8FAFC',
                minHeight: '100vh',
                p: {
                    xs: '20px',
                    md: '32px'
                }
            }}
        >
            <Stack spacing={4}>
                <Box>
                    <Typography
                        sx={{
                            color: '#18181B',
                            fontSize: {
                                xs: '28px',
                                md: '36px'
                            },
                            fontWeight: 700,
                            lineHeight: {
                                xs: '36px',
                                md: '44px'
                            },
                            mb: '8px'
                        }}
                    >
                        CommonButton Display Page
                    </Typography>

                    <Typography
                        sx={{
                            color: '#52525B',
                            fontSize: '15px',
                            fontWeight: 400,
                            lineHeight: '24px',
                            maxWidth: '900px'
                        }}
                    >
                        This page displays the available CommonButton combinations in an organized layout,
                        grouped by usage, variant, size, icon position, loading state, and disabled state.
                    </Typography>
                </Box>

                <SectionCard
                    subtitle="A quick preview of the most common button actions."
                    title="Quick Preview"
                >
                    <DemoRow label="Primary actions">
                        <CommonButton
                            size="MEDIUM"
                            startIcon={<PlusIcon />}
                            variant="PRIMARY"
                        >
                            Create
                        </CommonButton>

                        <CommonButton
                            size="MEDIUM"
                            startIcon={<SaveOutlinedIcon />}
                            variant="PRIMARY"
                        >
                            Save
                        </CommonButton>

                        <CommonButton
                            endIcon={<DownloadOutlinedIcon />}
                            size="MEDIUM"
                            variant="PRIMARY"
                        >
                            Export
                        </CommonButton>
                    </DemoRow>

                    <DemoRow label="Secondary actions">
                        <CommonButton
                            size="MEDIUM"
                            startIcon={<SearchOutlinedIcon />}
                            variant="SECONDARY"
                        >
                            Search
                        </CommonButton>

                        <CommonButton
                            size="MEDIUM"
                            startIcon={<EditOutlinedIcon />}
                            variant="SECONDARY"
                        >
                            Edit
                        </CommonButton>

                        <CommonButton
                            size="MEDIUM"
                            startIcon={<CalendarMonthOutlinedIcon />}
                            variant="SECONDARY"
                        >
                            Schedule
                        </CommonButton>
                    </DemoRow>

                    <DemoRow label="Outline / ghost actions">
                        <CommonButton
                            size="MEDIUM"
                            startIcon={<DeleteOutlineIcon />}
                            variant="OUTLINE"
                        >
                            Delete
                        </CommonButton>

                        <CommonButton
                            size="MEDIUM"
                            variant="GHOST"
                        >
                            Cancel
                        </CommonButton>

                        <CommonButton
                            loadingProps={{ isLoading: true }}
                            size="MEDIUM"
                            startIcon={<SpinnerIcon className="animate-spin" />}
                            variant="OUTLINE"
                        >
                            Processing
                        </CommonButton>
                    </DemoRow>
                </SectionCard>

                <SectionCard
                    subtitle="All available sizes using the default PRIMARY button variant."
                    title="Size Scale"
                >
                    <DemoRow label="Sizes">
                        {BUTTON_SIZES.map((size) => (
                            <CommonButton
                                key={`size-scale-${size}`}
                                size={size}
                                startIcon={<PlusIcon />}
                                variant="PRIMARY"
                            >
                                {size}
                            </CommonButton>
                        ))}
                    </DemoRow>
                </SectionCard>

                <SectionCard
                    subtitle="Reference examples for enabled, disabled, and loading button states."
                    title="State Reference"
                >
                    <DemoRow label="Enabled">
                        <CommonButton
                            size="MEDIUM"
                            startIcon={<SaveOutlinedIcon />}
                            variant="PRIMARY"
                        >
                            Save Changes
                        </CommonButton>

                        <CommonButton
                            size="MEDIUM"
                            startIcon={<SearchOutlinedIcon />}
                            variant="SECONDARY"
                        >
                            Search Records
                        </CommonButton>

                        <CommonButton
                            size="MEDIUM"
                            startIcon={<DeleteOutlineIcon />}
                            variant="OUTLINE"
                        >
                            Remove
                        </CommonButton>

                        <CommonButton
                            size="MEDIUM"
                            variant="GHOST"
                        >
                            Back
                        </CommonButton>
                    </DemoRow>

                    <DemoRow label="Disabled">
                        <CommonButton
                            disabled
                            size="MEDIUM"
                            startIcon={<SaveOutlinedIcon />}
                            variant="PRIMARY"
                        >
                            Save Changes
                        </CommonButton>

                        <CommonButton
                            disabled
                            size="MEDIUM"
                            startIcon={<SearchOutlinedIcon />}
                            variant="SECONDARY"
                        >
                            Search Records
                        </CommonButton>

                        <CommonButton
                            disabled
                            size="MEDIUM"
                            startIcon={<DeleteOutlineIcon />}
                            variant="OUTLINE"
                        >
                            Remove
                        </CommonButton>

                        <CommonButton
                            disabled
                            size="MEDIUM"
                            variant="GHOST"
                        >
                            Back
                        </CommonButton>
                    </DemoRow>

                    <DemoRow label="Loading">
                        <CommonButton
                            loadingProps={{ isLoading: true }}
                            size="MEDIUM"
                            startIcon={<SaveOutlinedIcon />}
                            variant="PRIMARY"
                        >
                            Saving
                        </CommonButton>

                        <CommonButton
                            loadingProps={{ isLoading: true }}
                            size="MEDIUM"
                            startIcon={<SearchOutlinedIcon />}
                            variant="SECONDARY"
                        >
                            Searching
                        </CommonButton>

                        <CommonButton
                            loadingProps={{ isLoading: true }}
                            size="MEDIUM"
                            startIcon={<DeleteOutlineIcon />}
                            variant="OUTLINE"
                        >
                            Removing
                        </CommonButton>

                        <CommonButton
                            loadingProps={{ isLoading: true }}
                            size="MEDIUM"
                            startIcon={<CalendarMonthOutlinedIcon />}
                            variant="GHOST"
                        >
                            Loading
                        </CommonButton>
                    </DemoRow>
                </SectionCard>
                {BUTTON_VARIANTS.map((variant) => (
                    <VariantGroup
                        key={variant}
                        variant={variant}
                    />
                ))}
            </Stack>
        </Box>
    );
}