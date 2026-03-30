import CommonModal from '@components/modal/CommonModal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SampleModalBody from '@pages/component-sample/modal/SampleModalBody';
import { useState } from 'react';

/**
 * ModalSamplePage
 *
 * A dedicated page demonstrating state management and usage of the CommonModal.
 *
 * @example
 * <ModalSamplePage />
 */
export default function ModalSamplePage() {
    const [isModalOpen, setIsModalOpen] = useState(false); // Controls the modal visibility state

    /**
     * Closes the modal by updating the local state.
     *
     * @returns
     */
    function handleClose() {
        setIsModalOpen(false);
    }

    /**
     * Opens the modal by updating the local state.
     *
     * @returns
     */
    function handleOpen() {
        setIsModalOpen(true);
    }

    return (
        <Box className="bg-[#F4F4F5] flex items-center justify-center min-h-screen p-[40px]">
            <Button
                disableElevation
                variant="contained"
                onClick={handleOpen}
            >
                Open Modal
            </Button>
            <CommonModal
                cardProps={{
                    cardHeaderProps: {
                        subheader: 'Please confirm your action',
                        title: 'Confirm Action',
                        onClose: handleClose
                    }
                }}
                closeOnEscape
                open={isModalOpen}
                onClose={handleClose}
            >
                <SampleModalBody />
            </CommonModal>
        </Box>
    );
}