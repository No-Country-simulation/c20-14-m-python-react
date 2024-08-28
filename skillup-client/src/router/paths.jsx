import Home from "../views/Home/Home.jsx";
import SignUp from "../views/SignUp/SignUp.jsx";

export const HOME = {
	id: crypto.randomUUID(),
	path: "/",
	name: "Inicio",
	element: <Home />
};

export const SIGN_UP = {
	id: crypto.randomUUID(),
	path: "/sign-up",
	name: "Registro",
	element: <SignUp />
};
