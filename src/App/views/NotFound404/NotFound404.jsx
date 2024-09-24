import { Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";
import Logo from "../../../components/Logo/Logo.jsx";

const NotFound404 = () => {
	const navigate = useNavigate();

	const handleBackToHome = () => {
		navigate("/"); // Ajusta la ruta según sea necesario
	};

	return (
		<Container className="d-flex justify-content-center align-items-center min-vh-100">
			<div
				className="text-center shadow p-4 bg-white rounded"
				style={{ width: "200rem", height: "50rem" }}
			>
				{/* Reemplazo de Brand con un Link adecuado */}
				<Link
					to="/"
					className="d-flex align-items-center mb-4 text-decoration-none"
				>
					<Logo width={150} height={150} />
				</Link>
				<h1
					className="display-4 fw-bold shake-animation text-black mb-6"
					style={{ marginTop: "150px" }}
				>
					Error 404!
				</h1>
				<p className="text-black mb-4">Página no encontrada</p>
				<Button variant="dark" onClick={handleBackToHome}>
					Volver al inicio
				</Button>
			</div>
		</Container>
	);
};

export default NotFound404;
