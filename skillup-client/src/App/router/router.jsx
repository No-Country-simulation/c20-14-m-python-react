import { createBrowserRouter } from "react-router-dom";
import { HOME, LOGIN, SIGN_UP } from "./paths.jsx";
import ErrPage from "../views/ErrPage/ErrPage.jsx";
import App from "../App.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrPage />,
		children: [HOME, SIGN_UP, LOGIN]
	}
]);
