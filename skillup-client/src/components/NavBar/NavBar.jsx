import { Navbar, Nav, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import logo3 from "./Logo3.svg";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { INICIO, SIGN_UP } from "../../App/router/children";

function NavBar() {
	return (
		<Navbar bg="light" variant="ligth" expand="lg">
			<Container>
				<Navbar.Brand href="#home">
					<Link to={INICIO}>
						<img
							src={logo3}
							width="100"
							height="100"
							className="d-inline-block align-top"
							alt="logo"
						/>
					</Link>
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
						<Nav.Link href="#Contact">
							<Button variant="light" size="md" className="me-2">
								Contact
							</Button>
						</Nav.Link>
						<Nav.Link href="#Sign_In">
							<Button variant="secondary" size="md">
								Sign In
							</Button>
						</Nav.Link>
						<Nav.Link href="#Register">
							<Link to={SIGN_UP}>
								<Button variant="dark" size="md">
									Register
								</Button>
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
