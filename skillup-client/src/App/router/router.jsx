import { createBrowserRouter } from "react-router-dom";
import { SIGN_UP } from "./childres.jsx";
import App from "../App.jsx";
import NotFound404 from "../views/NotFound404/NotFound404.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound404 />,
		children: [SIGN_UP]
	}
]);
