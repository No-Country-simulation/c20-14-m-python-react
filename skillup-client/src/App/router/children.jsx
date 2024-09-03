import Inicio from "../views/Inicio/Inicio.jsx";
import SignUp from "../views/SignUp/SignUp.jsx";
import Students from "../views/Students/Students.jsx";
import UserProfile from "../views/UserProfile/UserProfile.jsx";

export const SIGN_UP = {
	id: crypto.randomUUID(),
	path: "/registro",
	name: "Registro",
	element: <SignUp />
};

export const STUDENTS = {
	id: crypto.randomUUID(),
	path: "/estudiantes",
	name: "Estudiantes",
	element: <Students />
};

export const INICIO = {
	id: crypto.randomUUID(),
	path: "/",
	name: "inicio",
	element: <Inicio />
};

export const USER_PROFILE = {
	id: crypto.randomUUID(),
	path: "/perfil",
	name: "Perfil",
	element: <UserProfile />
};
