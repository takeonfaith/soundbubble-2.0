import { Layout } from "layout/Layout";
import { Route, Routes } from "react-router";
import { allRoutes } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {allRoutes.map((route) => {
          return (
            <Route key={route.url} element={route.component} path={route.url} />
          );
        })}
        <Route path="*" element={<>404</>} />
      </Route>
    </Routes>
  );
};
