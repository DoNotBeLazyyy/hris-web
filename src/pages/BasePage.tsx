import CommonStatusBadge from '@components/status/CommonStatusBadge';
import CommonStatusChip from '@components/status/CommonStatusChip';
import CommonToggleSwitch from '@components/switch/CommonToggleSwitch';
import { Outlet } from 'react-router-dom';

export default function BasePage() {
    return (
        <div className="flex flex-col gap-10 items-center justify-center min-h-screen">
            <div className="w-full flex justify-center gap-10">
                <CommonToggleSwitch label="SMALL" size="SMALL" />
                <CommonToggleSwitch label="MEDIUM" size="MEDIUM" />
                <CommonToggleSwitch label="LARGE" size="LARGE" />
            </div>
            <div className="w-full flex justify-center">
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
            </div>
            <div className="w-full flex justify-center gap-4">
                <CommonStatusBadge label="MIN-S" status="INFO" />
            </div>
            <div className="w-full flex justify-center gap-4">
                <CommonStatusBadge label="INFORMATION" status="INFO" />
                <CommonStatusBadge label="SUCCESSFUL" status="SUCCESS" />
                <CommonStatusBadge label="WARNING" status="WARNING" />
                <CommonStatusBadge label="ERROR" status="ERROR" />
            </div>
            <div className="w-full flex justify-center gap-4">
                <CommonStatusChip chipStatus="ACTIVE" />
                <CommonStatusChip chipStatus="INACTIVE" />
                <CommonStatusChip chipStatus="PRESENT" />
                <CommonStatusChip chipStatus="ABSENT" />
            </div>
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    );
}