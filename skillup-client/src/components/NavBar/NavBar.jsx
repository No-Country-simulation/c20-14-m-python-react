import { Navbar, Nav, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import logo3 from "./logo3.png";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { INICIO, SIGN_UP } from "../../App/router/children";
import { FaUserCircle } from "react-icons/fa";

function NavBar() {
	const { pathname } = useLocation();

	if (pathname === "/estudiantes") {
		return (
			<Navbar
				className="custom-navbar  border-bottom"
				bg="light"
				variant="light"
				expand="lg"
			>
				<Container>
					<Navbar.Brand
						as={Link}
						to={INICIO.path}
						className="d-flex align-items-center"
					>
						<img
							src={logo3}
							width="100"
							height="100"
							className="d-inline-block align-top"
							alt="logo"
						/>
						<span className="ms-2 fs-4 fw-bold">{`<Skill Up!>`}</span>{" "}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mx-auto"></Nav>
						<Nav className="ms-auto">
							<Nav.Link href="#Recomendaciones">
								<Button variant="light" size="md">
									Recomendaciones
								</Button>
							</Nav.Link>
							<Nav.Link href="#CursosDisponibles">
								<Button variant="light" size="md">
									Cursos Disponibles
								</Button>
							</Nav.Link>
							<Nav.Link href="#Dashboard">
								<Button variant="light" size="md">
									Dashboard
								</Button>
							</Nav.Link>
							<Nav.Link href="#Certificados">
								<Button variant="light" size="md">
									Certificados
								</Button>
							</Nav.Link>
							<Nav.Link href="#Favoritos">
								<Button variant="light" size="md">
									Favoritos
								</Button>
							</Nav.Link>
							<Nav.Link>
								<FaUserCircle size={34} className="me-2" />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}

	if (pathname === "/registro") {
		return (
			<Navbar
				className="custom-navbar  border-bottom"
				bg="light"
				variant="light"
				expand="lg"
			>
				<Container>
					<Navbar.Brand
						as={Link}
						to={INICIO.path}
						className="d-flex align-items-center"
					>
						<img
							src={logo3}
							width="100"
							height="100"
							className="d-inline-block align-top"
							alt="logo"
						/>
						<span className="ms-2 fs-4 fw-bold">{`<Skill Up!>`}</span>{" "}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mx-auto"></Nav>
						<Nav className="ms-auto">
							<Nav.Link href="#Recomendaciones">
								<Button variant="light" size="md">
									Recomendaciones
								</Button>
							</Nav.Link>
							<Nav.Link href="#CursosDisponibles">
								<Button variant="light" size="md">
									Cursos Disponibles
								</Button>
							</Nav.Link>
							<Nav.Link href="#Contact">
								<Button variant="light" size="md">
									Contacto
								</Button>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
	//inicio
	return (
		<Navbar
			className="custom-navbar border-bottom"
			bg="light"
			variant="light"
			expand="lg"
		>
			<Container>
				<Navbar.Brand
					as={Link}
					to={INICIO.path}
					className="d-flex align-items-center"
				>
					<img
						src={logo3}
						width="100"
						height="100"
						className="d-inline-block align-top"
						alt="logo"
					/>
					<span className="ms-2 fs-4 fw-bold">{`<Skill Up!>`}</span>{" "}
					{/* Texto al lado del logo */}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#Recomendaciones">
							<Button variant="light" size="md">
								Recomendaciones
							</Button>
						</Nav.Link>
						<Nav.Link href="#CursosDisponibles">
							<Button variant="light" size="md">
								Cursos Disponibles
							</Button>
						</Nav.Link>
						<Nav.Link href="#Contact">
							<Button variant="light" size="md">
								Contacto
							</Button>
						</Nav.Link>
						<div className="d-flex ms-3 align-items-center">
							<Nav.Link href="#Sign_In" className="p-0">
								<Button
									variant="secondary"
									size="md"
									className="me-2 p-1 rounded-lg"
								>
									Sign In
								</Button>
							</Nav.Link>
							<Nav.Link as={Link} to={SIGN_UP.path} className="p-0">
								<Button variant="dark" size="md" className="me-2 p-1">
									Registro
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
