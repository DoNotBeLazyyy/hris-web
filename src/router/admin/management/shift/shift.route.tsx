
import AdminManagementShift from '@pages/admin/management/shift';
import AdminManagementShiftOverview from '@pages/admin/management/shift/overview';
import AdminManagementShiftWorkFromHome from '@pages/admin/management/shift/work-from-home';
import { Navigate, RouteObject } from 'react-router-dom';

// Shift routes
export const shiftRoutes: readonly RouteObject[] = [{
    element: <AdminManagementShift />,
    path: 'shift',
    children: [
        {
            index: true,
            element: <Navigate
                replace
                to="overview"
            />
        },
        {
            element: <AdminManagementShiftOverview />,
            path: 'overview'
        },
        {
            element: <AdminManagementShiftWorkFromHome />,
            path: 'work-from-home'
        }
    ]
}] as const;