import { Layout } from 'layout/Layout';
import { Route, Routes } from 'react-router';
import { allRoutes } from './routes';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {allRoutes.map((route) => {
                    return (
                        <Route
                            key={route.url}
                            element={route.component}
                            path={route.url}
                        >
                            {route.children &&
                                route.children.map((child) => {
                                    return (
                                        <Route
                                            key={child.url}
                                            element={child.component}
                                            path={child.url}
                                        />
                                    );
                                })}
                        </Route>
                    );
                })}
                <Route path="*" element={<>404</>} />
            </Route>
        </Routes>
    );
};
