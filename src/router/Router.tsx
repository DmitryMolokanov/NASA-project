import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstPage from "../pages/firstPage/FirstPage";
import MainPage from "../pages/mainPage/MainPage";
import MarsPage from "../pages/marsPage/MarsPage";
import PlanetsPage from "../pages/planetsPage/PlanetsPage";
import AppLayout from "../layouts/AppLayout";

const routes = [
  { path: "/main_page", element: <MainPage /> },
  { path: "/mars_page", element: <MarsPage /> },
  { path: "/planet_page", element: <PlanetsPage /> },
];

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      {routes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<AppLayout>{route.element}</AppLayout>}
          />
        );
      })}
    </Routes>
  );
};

export default Router;
