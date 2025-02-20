import { Layout } from 'layout/Layout';
import { Route, Routes } from 'react-router';
import { TRoute, allRoutes } from './routes';
import { Page404 } from './404';
import { userModel } from '../entities/user/model';
import { Suspense } from 'react';
import { Loading } from '../shared/components/loading';

const RenderRoute = (route: TRoute, isAdmin: boolean | undefined) => {
    if (!isAdmin && route.admin) return null;

    return (
        <Route
            key={route.url}
            element={
                <Suspense fallback={<Loading />}>{route.component}</Suspense>
            }
            path={route.url}
        >
            {route?.children?.map((c) => RenderRoute(c, isAdmin))}
        </Route>
    );
};

export const AppRouter = () => {
    const [currentUser] = userModel.useUser();
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {allRoutes.map((route) => {
                    return RenderRoute(route, currentUser?.isAdmin);
                })}
                <Route path="*" element={<Page404 />} />
            </Route>
        </Routes>
    );
};
