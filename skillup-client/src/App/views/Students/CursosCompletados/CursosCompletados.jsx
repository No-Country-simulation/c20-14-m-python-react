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

function CursosCompletados() {
	return (
		<Container fluid className="cursocomp">
			<Row>
				<Col>
					<h2>Cursos Completados</h2>
				</Col>
			</Row>
			<Row>
				<div>
					{DataEjemplo.map((course, index) => (
						<Col xs={12} md={6} lg={4} key={index}>
							<Card className="mb-4" key={index} style={{ width: "18rem" }}>
								<Card.Img
									variant="top"
									src={course.imageUrl}
									alt={`Imagen del curso ${course.name}`}
								/>
								<ProgressBar
									className="rounded-0 mb-2 progress-bar-black"
									now={course.progreso}
								/>
								<Card.Body>
									<Badge className="text-center" text="light" bg="dark">
										{course.name}
									</Badge>
									<Card.Title className="fs-6">
										Inicio:
										{course.inicio}
									</Card.Title>
									<Card.Title className="fs-6">
										Finalización:
										{course.date}
									</Card.Title>

									<Button
										className="d-flex justify-content-center btn-black"
										href={course.certificateUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										Certificado
									</Button>
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
				</div>
			</Row>
		</Container>
	);
}

export default CursosCompletados;
