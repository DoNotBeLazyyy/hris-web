import BasePage from '@pages/BasePage';
import { createBrowserRouter } from 'react-router-dom';

const appRouter = createBrowserRouter([
    {
        element: <BasePage />,
        path: '/'
    }
] as const);

export default appRouter;