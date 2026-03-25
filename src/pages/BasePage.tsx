import CommonStatusBadge from '@components/badge/CommonStatusBadge';
import CommonStatusChip from '@components/badge/CommonStatusChip';
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
            <CommonStatusBadge
                label="Status"
                status="INFO"
            />
            <CommonStatusBadge label="Status" status="INFO" />
            <CommonStatusBadge label="Status" status="SUCCESS" />
            <CommonStatusBadge label="Status" status="WARNING" />
            <CommonStatusBadge
                label="Status"
                status="ERROR"
            />
            <CommonStatusChip status="ACTIVE"/>
            <CommonStatusChip status="INACTIVE"/>
            <CommonStatusChip status="PRESENT"/>
            <CommonStatusChip status="ABSENT"/>
            <Outlet />
        </div>
    );
}