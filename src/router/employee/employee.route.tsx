import EmployeeRoot from '@pages/employee';
import { RouteObject } from 'react-router-dom';

// Employee routes
export const employeeRoutes: readonly RouteObject[] = [{
    element: <EmployeeRoot />,
    path: 'employee'
}] as const;