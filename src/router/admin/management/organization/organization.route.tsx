import AdminManagementOrganization from '@pages/admin/management/organization';
import AdminManagementOrganizationCompany from '@pages/admin/management/organization/company';
import AdminManagementOrganizationCountry from '@pages/admin/management/organization/country';
import AdminManagementOrganizationDepartment from '@pages/admin/management/organization/department';
import AdminManagementOrganizationDesignation from '@pages/admin/management/organization/designation';
import { Navigate, RouteObject } from 'react-router-dom';

// Organization routes
export const organizationRoutes: readonly RouteObject[] = [{
    element: <AdminManagementOrganization />,
    path: 'organization',
    children: [
        {
            index: true,
            element: <Navigate
                replace
                to="country"
            />
        },
        {
            element: <AdminManagementOrganizationCountry />,
            path: 'country'
        },
        {
            element: <AdminManagementOrganizationCompany />,
            path: 'company'
        },
        {
            element: <AdminManagementOrganizationDepartment />,
            path: 'department'
        },
        {
            element: <AdminManagementOrganizationDesignation />,
            path: 'designation'
        }
    ]
}] as const;