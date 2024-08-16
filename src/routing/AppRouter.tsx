import { Layout } from 'layout/Layout';
import { Route, Routes } from 'react-router';
import { TRoute, allRoutes } from './routes';
import { Page404 } from './404';

const RenderRoute = (route: TRoute) => {
    return (
        <Route key={route.url} element={route.component} path={route.url}>
            {route?.children?.map((c) => RenderRoute(c))}
        </Route>
    );
};

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {allRoutes.map((route) => {
                    return RenderRoute(route);
                })}
                <Route path="*" element={<Page404 />} />
            </Route>
        </Routes>
    );
};
