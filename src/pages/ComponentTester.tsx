import { Outlet } from 'react-router-dom';

export default function ComponentTester() {
    return (
        <div className="absolute flex flex-col gap-[20px] inset-0 items-center py-[100px]">
            <Outlet />
        </div>
    );
}