import { createBrowserRouter } from "react-router-dom";
import { LOGIN, SIGN_UP } from "./children.jsx";
import App from "../App.jsx";
import NotFound404 from "../views/NotFound404/NotFound404.jsx";
import { STUDENTS } from "./children.jsx";
import { INICIO } from "./children.jsx";
import { USER_PROFILE } from "./children.jsx";
import { CATALOGUE } from "./children.jsx";
import { ABOUT } from "./children.jsx";
import { CONTACTO } from "./children.jsx";
import { SESION } from "./children.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound404 />,
		children: [
			SIGN_UP,
			STUDENTS,
			INICIO,
			LOGIN,
			CATALOGUE,
			USER_PROFILE,
			ABOUT,
			CONTACTO,
			SESION
		]
	}
]);
