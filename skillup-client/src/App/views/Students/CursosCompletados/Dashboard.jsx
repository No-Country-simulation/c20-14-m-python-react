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

function Dashboard() {
	if (DataEjemplo.length === 0) {
		return (
			<Container fluid className="cardContainer" id="Dashboard">
				<Row>
					<Col>
						<h2>Dashboard</h2>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={6} lg={4} xl={3}>
						<Card className="mb-4 cardsize">
							<Card.Body className="text-center mt-3">
								<Card.Title>No se ha inscrito a ningún curso aún</Card.Title>
								<Button
									className="mt-3"
									variant="dark"
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
		<Container fluid className="cardContainer" id="Dashboard">
			<Row>
				<Col>
					<h2>Dashboard</h2>
				</Col>
			</Row>
			<Row>
				{DataEjemplo.map((course, index) => (
					<Col xs={12} md={6} lg={4} xl={3} key={index}>
						<Card className="mb-4">
							<div className="cardImg2">
								<Card.Img
									variant="top"
									src={course.imageUrl}
									alt={`Imagen del curso ${course.name}`}
									className="card-img-fixed"
								/>
							</div>
							<ProgressBar
								className="rounded-0 mb-2 progress-bar-black"
								now={course.progreso}
								label={`${course.progreso}%`}
							/>
							<Card.Body>
								<Badge className="text-center fs-6 mb-4" text="light" bg="dark">
									{course.name}
								</Badge>
								<Card.Title className="fs-6">
									Inicio: {course.inicio}
								</Card.Title>
								<Card.Title className="fs-6 mb-4">
									Finalización: {course.date}
								</Card.Title>
								{/* Mostrar el botón solo si el progreso es 100% */}
								{course.progreso === 100 && (
									<Button
										className="d-flex justify-content-center mx-auto btn-black w-50 "
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

export default Dashboard;
