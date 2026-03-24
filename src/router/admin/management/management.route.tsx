import AdminManagement from '@pages/admin/management';
import { attendanceRoutes } from '@router/admin/management/attendance/attendance.route';
import { organizationRoutes } from '@router/admin/management/organization/organization.route';
import { shiftRoutes } from '@router/admin/management/shift/shift.route';
import { userRoutes } from '@router/admin/management/user/user.route';
import { RouteObject } from 'react-router-dom';

// Management routes
export const managementRoutes: readonly RouteObject[] = [{
    element: <AdminManagement />,
    path: 'management',
    children: [
        ...organizationRoutes,
        ...userRoutes,
        ...shiftRoutes,
        ...attendanceRoutes
    ]
}] as const;