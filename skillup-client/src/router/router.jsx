import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import { SIGN_UP } from "./paths.jsx";
import ErrPage from "../pages/ErrPage/ErrPage.jsx";

export const ROUTER = [{}];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrPage />,
    children: [SIGN_UP],
  },
]);
