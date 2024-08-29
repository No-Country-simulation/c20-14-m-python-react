import SignUp from "../views/SignUp/SignUp.jsx";
import Students from "../views/Students/Students.jsx";

export const SIGN_UP = {
	id: crypto.randomUUID(),
	path: "/registro",
	name: "Registro",
	element: <SignUp />
};

export const STUDENTS = {
	id: crypto.randomUUID(),
	path: "/estudiantes",
	name: "Registro",
	element: <Students />
};
