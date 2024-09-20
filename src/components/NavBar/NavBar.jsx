import { Navbar, Nav, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import {
	ABOUT,
	CATALOGUE,
	INICIO,
	LOGIN,
	MY_COURSES,
	USER_PROFILE
} from "../../App/router/children";
import { useAuth } from "../../auth/useAuth.js";
import Logo from "../Logo/Logo.jsx";

function NavBar() {
	//Acerca de Nosotros
	const logout = useAuth(auth => auth.logout);
	const token = useAuth(auth => auth.token);
	const { pathname } = useLocation();

	//inicio
	return (
		<Navbar
			className="custom-navbar border-bottom"
			bg="light"
			variant="light"
			expand="lg"
		>
			<Container>
				<Logo />

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#Somos" as={Link} to={ABOUT.path}>
							<Button variant="light" size="md">
								Acerca de nosotros
							</Button>
						</Nav.Link>

						{pathname === INICIO.to && (
							<Nav.Link href="#Recomendaciones">
								<Button variant="light" size="md">
									Recomendaciones
								</Button>
							</Nav.Link>
						)}

						<Nav.Link href="#CursosDisponibles" as={Link} to={CATALOGUE.path}>
							<Button variant="light" size="md">
								{CATALOGUE.name}
							</Button>
						</Nav.Link>

						{(pathname === MY_COURSES.to || pathname === INICIO.to) && (
							<Nav.Link href="#Contact">
								<Button variant="light" size="md">
									Contacto
								</Button>
							</Nav.Link>
						)}

						{token && (
							<Nav.Link as={Link} to={USER_PROFILE.to}>
								<Button variant="light" size="md">
									{USER_PROFILE.name}
								</Button>
							</Nav.Link>
						)}

						{token && (
							<Nav.Link as={Link} to={MY_COURSES.to}>
								<Button variant="light" size="md">
									{MY_COURSES.name}
								</Button>
							</Nav.Link>
						)}

						<div className="d-flex ms-3 align-items-center">
							<Nav.Link as={Link} to={!token && LOGIN.to} className="p-0">
								<Button
									variant="dark"
									size="md"
									className="me-2 p-2"
									onClick={token && logout}
								>
									{token ? "Cerrar Sesión" : "Inicial sesión"}
								</Button>
							</Nav.Link>
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
