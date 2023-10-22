import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
// import { Router } from "react-refresh/only-export-components";
import { Body } from "./Body";
import { LeftMenu } from "./LeftMenu";
import { GameInfo } from "./GameInfo";


export const Routes = {
  home: "/games",
  reviews: "/reviews",
  gameInfo: "/games/:gameId",
};

export const createRouter = createBrowserRouter([
  {
    element: (
      <div className="wrapper">
        <LeftMenu />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: Routes.home,
        element: <Body />,
      },
      {
        path: Routes.reviews,
        element: <div>hello brah</div>,
      },
      {
        path: Routes.gameInfo,
        element: <GameInfo />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={Routes.home} />,
  },
]);
