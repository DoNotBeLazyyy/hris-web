import AdminManagementAttendance from '@pages/admin/management/attendance';
import AdminManagementAttendanceAmendment from '@pages/admin/management/attendance/amendment';
import AdminManagementAttendanceLeave from '@pages/admin/management/attendance/leave';
import AdminManagementAttendanceOffset from '@pages/admin/management/attendance/offset';
import AdminManagementAttendanceOvertime from '@pages/admin/management/attendance/overtime';
import AdminManagementAttendanceOverview from '@pages/admin/management/attendance/overview';
import AdminManagementAttendanceRequest from '@pages/admin/management/attendance/request';
import { Navigate, RouteObject } from 'react-router-dom';

// Attendance routes
export const attendanceRoutes: readonly RouteObject[] = [{
    element: <AdminManagementAttendance />,
    path: 'attendance',
    children: [
        {
            index: true,
            element: <Navigate
                replace
                to="overview"
            />
        },
        {
            element: <AdminManagementAttendanceOverview />,
            path: 'overview'
        },
        {
            element: <AdminManagementAttendanceAmendment />,
            path: 'amendment'
        },
        {
            element: <AdminManagementAttendanceRequest />,
            path: 'request'
        },
        {
            element: <AdminManagementAttendanceOvertime />,
            path: 'overtime'
        },
        {
            element: <AdminManagementAttendanceLeave />,
            path: 'leave'
        },
        {
            element: <AdminManagementAttendanceOffset />,
            path: 'offset'
        }
    ]
}] as const;