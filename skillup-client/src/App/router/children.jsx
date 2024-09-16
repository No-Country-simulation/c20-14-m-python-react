import Inicio from "../views/Inicio/Inicio.jsx";
import Login from "../views/Login/Login.jsx";
import SignUp from "../views/SignUp/SignUp.jsx";
import Students from "../views/Students/Students.jsx";
import UserProfile from "../views/UserProfile/UserProfile.jsx";
import Catalogue from "../views/Catalogo/Catalogue.jsx";
import RouteProtector from "./RouterProtector.jsx";
import About from "../views/About/About.jsx";
import Contacto from "../views/Contacto/Contacto.jsx";
import SesionCurso from "../views/SesionCurso/sesion.jsx";

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
	element: (
		<RouteProtector>
			<Students />
		</RouteProtector>
	)
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

export const CATALOGUE = {
	id: crypto.randomUUID(),
	path: "/catalogue",
	name: "catalogue",
	element: <Catalogue />
};

export const LOGIN = {
	id: crypto.randomUUID(),
	path: "login",
	to: "/login",
	name: "Login",
	element: <Login />
};
export const ABOUT = {
	id: crypto.randomUUID(),
	path: "about",
	to: "/about",
	name: "About",
	element: <About />
};
export const CONTACTO = {
	id: crypto.randomUUID(),
	path: "contacto",
	to: "/contacto",
	name: "Contacto",
	element: <Contacto />
};
export const SESION = {
	id: crypto.randomUUID(),
	path: "sesionCurso",
	to: "/sesionCurso",
	name: "SesionCurso",
	element: <SesionCurso />
};
