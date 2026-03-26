import AdminQuickAccess from '@pages/admin/quick-access';
import AdminCalendar from '@pages/admin/quick-access/calendar';
import AdminDashboard from '@pages/admin/quick-access/dashboard';
import { Navigate, RouteObject } from 'react-router-dom';

// Quick access routes
export const quickAccessRoutes: readonly RouteObject[] = [{
    element: <AdminQuickAccess />,
    path: 'quick-access',
    children: [
        {
            index: true,
            element: <Navigate
                replace
                to="dashboard"
            />
        },
        {
            element: <AdminDashboard />,
            path: 'dashboard'
        },
        {
            element: <AdminCalendar />,
            path: 'calendar'
        }
    ]
}] as const;