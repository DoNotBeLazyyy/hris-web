import StatusBadge from '@components/statusBadge/StatusBadge';
import CommonToggleSwitch from '@components/switch/CommonToggleSwitch';
import { Outlet } from 'react-router-dom';

export default function BasePage() {

    return (
        <div className="flex flex-col gap-10 items-center justify-center min-h-screen">
            <CommonToggleSwitch
                label="INAKA"
                size="SMALL"
            />
            <CommonToggleSwitch
                label="whatsup duck"
                size="LARGE"
                sx={{
                    '& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb': {
                        backgroundColor: '#ABFA00'
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#FF0000'
                    }
                }}
            />
            <StatusBadge
                label="Status"
                status="info"
            />
            <StatusBadge label="Status" status="info" />
            <StatusBadge label="Status" status="success" />
            <StatusBadge label="Status" status="warning" />
            <StatusBadge
                label="Status"
                status="error"
            />
            <Outlet />
        </div>
    );
}