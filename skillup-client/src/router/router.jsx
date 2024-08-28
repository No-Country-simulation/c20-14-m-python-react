import { createBrowserRouter } from "react-router-dom";
import { HOME, SIGN_UP } from "./paths.jsx";
import ErrPage from "../views/ErrPage/ErrPage.jsx";
import App from "../App/App.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrPage />,
		children: [HOME, SIGN_UP]
	}
]);
