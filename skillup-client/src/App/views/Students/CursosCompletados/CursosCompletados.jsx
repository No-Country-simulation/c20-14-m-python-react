import {
	Card,
	Button,
	ProgressBar,
	Container,
	Row,
	Col,
	Badge
} from "react-bootstrap";
import DataEjemplo from "./DataEjemplo";
import "../styles/CursosCompletados.css";
// import sql.webp from "../img/sql.webp";

function CursosCompletados() {
	// Verificar si DataEjemplo está vacío
	if (DataEjemplo.length === 0) {
		return (
			<Container fluid className="cursocomp">
				<Row>
					<Col>
						<h2>Cursos Completados</h2>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={6} lg={4}>
						<Card className="mb-4" style={{ width: "18rem" }}>
							<Card.Body className="text-center">
								<Card.Title>No se ha inscrito a ningún curso aún</Card.Title>
								<Button
									className="mt-3"
									variant="primary"
									href="/cursos-disponibles" // Cambia esta URL a la ruta correcta
								>
									Ver Cursos Disponibles
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}

	return (
		<Container fluid className="cursocomp">
			<Row>
				<Col>
					<h2>Cursos Completados</h2>
				</Col>
			</Row>
			<Row>
				{DataEjemplo.map((course, index) => (
					<Col xs={12} md={6} lg={4} key={index}>
						<Card className="mb-4" style={{ width: "18rem" }}>
							<Card.Img
								variant="top"
								src={course.imageUrl}
								alt={`Imagen del curso ${course.name}`}
							/>
							<ProgressBar
								className="rounded-0 mb-2 progress-bar-black"
								now={course.progreso}
								label={`${course.progreso}%`}
							/>
							<Card.Body>
								<Badge className="text-center" text="light" bg="dark">
									{course.name}
								</Badge>
								<Card.Title className="fs-6">
									Inicio: {course.inicio}
								</Card.Title>
								<Card.Title className="fs-6">
									Finalización: {course.date}
								</Card.Title>

								{/* Mostrar el botón solo si el progreso es 100% */}
								{course.progreso === 100 && (
									<Button
										className="d-flex justify-content-center btn-black"
										href={course.certificateUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										Descargar Certificado
									</Button>
								)}
								<div className="d-flex justify-content-end">
									<span className="text-muted" style={{ fontSize: "14px" }}>
										<span className="text-muted progreso-text">
											<span>{course.progreso}%</span>
											<span></span>COMPLETADO
										</span>
									</span>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default CursosCompletados;
