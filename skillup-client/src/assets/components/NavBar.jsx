import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// import logo1 from '../images/logo1.svg';
import logo2 from '../images/logo3.svg';
import '../styles/NavBar.css';


function NavBar() {
  return (
    <Navbar bg="light" variant="ligth" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img 
        src={logo2} 
        width="100"
        height="100"
        className="d-inline-block align-top" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#Recomendaciones"><Button variant="light" size="md">Recomendaciones</Button>{' '}</Nav.Link>
            <Nav.Link href="#CursosDisponibles"><Button variant="light" size="md">Cursos Disponibles</Button>{' '}</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
            <Nav.Link href="#Contact"><Button variant="light" size="sm">Contact</Button>{' '}</Nav.Link>
            <Nav.Link href="#Sign_In"><Button variant="light" size="sm"> Sign In</Button>{' '}</Nav.Link>
            <Nav.Link href="#Register"><Button variant="dark" size="sm"> Register</Button>{' '}</Nav.Link>
            </Nav>
           
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
