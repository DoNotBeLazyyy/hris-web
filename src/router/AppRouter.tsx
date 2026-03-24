
import BasePage from '@pages/BasePage';
import { adminRoutes } from '@router/admin/admin.route';
import { employeeRoutes } from '@router/employee/employee.route';
import { createBrowserRouter } from 'react-router-dom';

const appRouter = createBrowserRouter([
    {
        element: <BasePage />,
        path: '/',
        children: [
            ...adminRoutes,
            ...employeeRoutes
        ]
    }
] as const);

export default appRouter;