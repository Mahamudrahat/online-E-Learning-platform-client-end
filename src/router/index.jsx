import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { ROUTES } from "../routes";
import Homepage from "../pages/Homepage";
import CommonLayout from "../layout/CommonLayout";


export const router = createBrowserRouter([
    {
      path: `${ROUTES.Home}`,
      element: <CommonLayout />,
      children: [
        {
            path: `${ROUTES.Home}`,
            element: <Homepage />,
          },
        ]
    },
  ]);