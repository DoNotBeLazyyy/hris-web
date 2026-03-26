import BasePage from '@pages/BasePage';
import { adminRoutes } from '@router/admin/admin.route';
import { componentSampleRoutes } from '@router/component-sample/component-sample.route';
import { employeeRoutes } from '@router/employee/employee.route';
import { createBrowserRouter } from 'react-router-dom';

const appRouter = createBrowserRouter([
    {
        element: <BasePage />,
        path: '/',
        children: [
            ...adminRoutes,
            ...componentSampleRoutes,
            ...employeeRoutes
        ]
    }
] as const);

export default appRouter;