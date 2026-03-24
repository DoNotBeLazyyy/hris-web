import AdminRoot from '@pages/admin';
import { managementRoutes } from '@router/admin/management/management.route';
import { quickAccessRoutes } from '@router/admin/quick-access/quick-access.route';
import { Navigate, RouteObject } from 'react-router-dom';

// Admin routes
export const adminRoutes: readonly RouteObject[] = [{
    element: <AdminRoot />,
    path: 'admin',
    children: [
        {
            index: true,
            element: <Navigate
                replace
                to="quick-access"
            />
        },
        ...quickAccessRoutes,
        ...managementRoutes
    ]
}] as const;