import { createBrowserRouter } from "react-router-dom";
import { SIGN_UP } from "./children.jsx";
import App from "../App.jsx";
import NotFound404 from "../views/NotFound404/NotFound404.jsx";
import { STUDENTS } from "./children.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound404 />,
		children: [SIGN_UP, STUDENTS]
	}
]);
