
import BasePage from '@pages/BasePage';
import ButtonSamples from '@pages/ButtonSamples';
import { createBrowserRouter } from 'react-router-dom';

const appRouter = createBrowserRouter([
    {
        element: <BasePage />,
        path: '/',
        children: [
            {
                element: <ButtonSamples />,
                path: 'button'
            }
        ]
    }
] as const);

export default appRouter;