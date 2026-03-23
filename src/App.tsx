import { createTheme, ThemeProvider } from '@mui/material';
import router from '@router/AppRouter';
import { RouterProvider } from 'react-router-dom';

const theme = createTheme({
    typography: {
        fontFamily: '"Noto Sans", sans-serif'
    }
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}