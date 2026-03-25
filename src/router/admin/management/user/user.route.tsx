import AdminManagementUser from '@pages/admin/management/user';
import AdminManagementUserAccount from '@pages/admin/management/user/account';
import AdminManagementUserEmployee from '@pages/admin/management/user/employee';
import AdminManagementUserRole from '@pages/admin/management/user/role';
import { Navigate, RouteObject } from 'react-router-dom';

// User routes
export const userRoutes: readonly RouteObject[] = [{
    element: <AdminManagementUser />,
    path: 'user',
    children: [
        {
            index: true,
            element: <Navigate
                replace
                to="role"
            />
        },
        {
            element: <AdminManagementUserRole />,
            path: 'role'
        },
        {
            element: <AdminManagementUserEmployee />,
            path: 'employee'
        },
        {
            element: <AdminManagementUserAccount />,
            path: 'account'
        }
    ]
}] as const;