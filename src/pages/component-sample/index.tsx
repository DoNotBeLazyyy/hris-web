import {
    AppBar, Box, Button, Stack, Toolbar, Typography
} from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';

export default function ComponentSample() {
    const sample_menus = [
        {
            label: 'Button',
            path: 'button'
        },
        {
            label: 'Input',
            path: 'input'
        },
        {
            label: 'Modal',
            path: 'modal'
        },
        {
            label: 'Card',
            path: 'card'
        },
        {
            label: 'Select',
            path: 'select'
        },
        {
            label: 'Textarea',
            path: 'textarea'
        }
    ] as const;

    return (
        <Box
            sx={{
                backgroundColor: '#F8FAFC',
                minHeight: '100vh'
            }}
        >
            <AppBar
                elevation={0}
                position="sticky"
                sx={{
                    backgroundColor: '#FFFFFF',
                    borderBottom: '1px solid #E4E4E7',
                    color: '#18181B'
                }}
            >
                <Toolbar
                    sx={{
                        justifyContent: 'space-between',
                        mx: 'auto',
                        px: {
                            xs: '16px',
                            md: '24px'
                        },
                        py: '8px',
                        width: '100%',
                        maxWidth: '1440px'
                    }}
                >
                    <Typography
                        sx={{
                            color: '#022179',
                            fontSize: '20px',
                            fontWeight: 800,
                            letterSpacing: '-0.02em'
                        }}
                    >
                        Component Samples
                    </Typography>

                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                            alignItems: 'center'
                        }}
                    >
                        {sample_menus.map((menu) => (
                            <Button
                                component={NavLink}
                                key={menu.path}
                                sx={{
                                    borderRadius: '10px',
                                    color: '#3F3F46',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    px: '14px',
                                    py: '10px',
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: '#F4F4F5',
                                        color: '#022179'
                                    },
                                    '&.active': {
                                        backgroundColor: '#022179',
                                        color: '#FFFFFF',
                                        '&:hover': {
                                            backgroundColor: '#011554'
                                        }
                                    }
                                }}
                                to={menu.path}
                            >
                                {menu.label}
                            </Button>
                        ))}
                    </Stack>
                </Toolbar>
            </AppBar>
            <Box
                sx={{
                    mx: 'auto',
                    px: {
                        xs: '16px',
                        md: '24px'
                    },
                    py: '24px',
                    width: '100%',
                    maxWidth: '1440px'
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
}