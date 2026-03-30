import ComponentSample from '@pages/component-sample';
import CommonButtonSample from '@pages/component-sample/button';
import CardSamplePage from '@pages/component-sample/card';
import CommonInputSample from '@pages/component-sample/input';
import ModalSamplePage from '@pages/component-sample/modal';
import CommonSelectSample from '@pages/component-sample/select';
import CommonTextareaSample from '@pages/component-sample/textarea';
import { Navigate, RouteObject } from 'react-router-dom';

// Employee routes
export const componentSampleRoutes: readonly RouteObject[] = [{
    element: <ComponentSample />,
    path: 'sample',
    children: [
        {
            index: true,
            element: <Navigate
                replace
                to="button"
            />
        },
        {
            element: <CommonButtonSample />,
            path: 'button'
        },
        {
            element: <CommonInputSample />,
            path: 'input'
        },
        {
            element: <CardSamplePage />,
            path: 'card'
        },
        {
            element: <ModalSamplePage />,
            path: 'modal'
        },
        {
            element: <CommonSelectSample />,
            path: 'select'
        },
        {
            element: <CommonTextareaSample />,
            path: 'textarea'
        }
    ]
}] as const;