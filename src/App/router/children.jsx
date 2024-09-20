import Inicio from "../views/Inicio/Inicio.jsx";
import Login from "../views/Login/Login.jsx";
import SignUp from "../views/SignUp/SignUp.jsx";
import UserProfile from "../views/UserProfile/UserProfile.jsx";
import Catalogue from "../views/Catalogo/Catalogue.jsx";
import RouteProtector from "./RouterProtector.jsx";
import About from "../views/About/About.jsx";
import Payments from "../views/Payments/Payments.jsx";
import CourseDetails from "../views/CourseDetails/CourseDetails.jsx";
import MyCourses from "../views/MyCourses/MyCourses.jsx";

export const SIGN_UP = {
	id: crypto.randomUUID(),
	path: "/registro",
	name: "Registro",
	element: <SignUp />
};

export const MY_COURSES = {
	id: crypto.randomUUID(),
	path: "mis-cursos",
	to: "/mis-cursos",
	name: "Mis cursos",
	element: (
		<RouteProtector>
			<MyCourses />
		</RouteProtector>
	)
};

export const INICIO = {
	id: crypto.randomUUID(),
	path: "",
	to: "/",
	name: "inicio",
	element: <Inicio />
};

export const USER_PROFILE = {
	id: crypto.randomUUID(),
	path: "perfil",
	to: "/perfil",
	name: "Perfil",
	element: (
		<RouteProtector>
			<UserProfile />
		</RouteProtector>
	)
};

export const CATALOGUE = {
	id: crypto.randomUUID(),
	path: "catalogue",
	to: "/catalogue",
	name: "Catálogo",
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

export const PAYMENTS = {
	id: crypto.randomUUID(),
	path: "pagos",
	to: "/pagos",
	name: "Pagos",
	element: <Payments />
};

export const COURSE_DETAILS = {
	id: crypto.randomUUID(),
	path: "details/:id",
	to: "/details/",
	name: "Detalle del curso",
	element: <CourseDetails />
};
