import BasePage from '@pages/BasePage';
import Example from '@pages/Example';
import { createBrowserRouter } from 'react-router-dom';

const appRouter = createBrowserRouter([
    {
        element: <BasePage />,
        path: '/',
        children: [
            {
                element: <Example />,
                path: 'example'
            }
        ]
    }
] as const);

export default appRouter;