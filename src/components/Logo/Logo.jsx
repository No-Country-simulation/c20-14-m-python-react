import { Navbar } from "react-bootstrap";
import logo from "./skill.png";
import { INICIO } from "../../App/router/children.jsx";
import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<Navbar.Brand
			as={Link}
			to={INICIO.to}
			className="d-flex align-items-center"
		>
			<img
				src={logo}
				width="60"
				height="60"
				className="d-inline-block align-top"
				alt="logo"
			/>
			<span className="txt_logo ms-2 fs-4 fw-bold">Skillup</span>
		</Navbar.Brand>
	);
}
