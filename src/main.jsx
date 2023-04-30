import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import UsersScreen from "./Screens/UsersScreen/UsersScreen";
import UserDetailScreen from "./Screens/UserDetailScreen/UserDetailScreen";
import RoomsScreen from "./Screens/RoomsScreen/RoomsScreen";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <UsersScreen />,
      },
      {
        path: "/users",
        element: <UsersScreen />,
      },
      {
        path: "/users/details/:id",
        element: <UserDetailScreen />,
      },
      {
        path: "/rooms",
        element: <RoomsScreen />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
