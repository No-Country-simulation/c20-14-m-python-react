import {
	Container,
	Row,
	Col,
	Card,
	ProgressBar,
	Button
} from "react-bootstrap";
import DataEjemplo from "./DataEjemplo";
import "./MisCursos.css";
import { Link } from "react-router-dom";
import { COURSE_DETAILS } from "../../../router/children.jsx";

const Cards = () => {
	return (
		<Container fluid className="cardContainer" id="MisCursos">
			<Row>
				<Col>
					<h2>Mis Cursos</h2>
				</Col>
			</Row>
			<Row>
				{DataEjemplo.map(card => (
					//  linkea al curso especifico segun id
					<Link key={card.id} to={COURSE_DETAILS.to + card.id}>
						<Col xs={12} md={6} lg={4}>
							<Card className="mb-4">
								{/* Imagen del curso */}
								<div className="cardImg">
									<Card.Img variant="top" src={card.imageUrl} />
								</div>
								<Card.Body className="position-relative">
									{/* Etiqueta de horas */}

									{/* Título del curso */}
									<Card.Title>{card.name}</Card.Title>

									{/* Texto descriptivo */}
									<Card.Text>Fecha Inicio: {card.inicio}</Card.Text>

									{/* Descripción */}
									<Card.Text> Fecha Término: {card.date}</Card.Text>

									{/* Costo */}
									{/* <Card.Text>Costo: {card.cost}</Card.Text> */}

									{/* Barra de progreso */}
									<ProgressBar
										now={card.progreso}
										label={`${card.progreso}%`}
										className="mb-3"
										variant="dark"
									/>

									{/* Si el progreso es del 100%, mostrar el botón de certificado */}
									{card.progreso === 100 && (
										<Button
											variant="dark"
											href={card.certificateUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											Descargar certificado
										</Button>
									)}
								</Card.Body>
							</Card>
						</Col>
					</Link>
				))}
			</Row>
		</Container>
	);
};

export default Cards;
