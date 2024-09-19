import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import "./styles/CardLog.css";

const CursosDisp = ({ cards, toggleFavorite }) => {
	// Filtrar los cursos disponibles
	const cursosDisp = cards.filter(
		card =>
			card.id === 1 ||
			card.id === 2 ||
			card.id === 3 ||
			card.id === 4 ||
			card.id === 5 ||
			card.id === 6 ||
			card.id === 7 ||
			card.id === 8 ||
			card.id === 9 ||
			card.id === 10
	);

	return (
		<Container fluid className="cardContainer" id="CursosDisponibles">
			<Row>
				<Col>
					<h2>Cursos Disponibles</h2>
				</Col>
			</Row>
			<Row>
				{cursosDisp.map((card, index) => (
					<Col xs={12} md={6} lg={4} key={index} className="card-col">
						<Card className="mb-4">
							<div className="cardImg">
								<Card.Img
									variant="top"
									src={card.image}
									className="course-image"
								/>
								<Badge className="cardBadge" bg="primary">
									{card.hours} horas
								</Badge>
							</div>

							<Card.Body className="card">
								<div className="d-flex align-items-start justify-content-between">
									<Card.Title>{card.course}</Card.Title>
									{/* Mostrar estrella llena o vacía según el estado de favorito */}
									{card.favorite ? (
										<FaStar
											className="star-icon"
											onClick={() => toggleFavorite(card.id)}
											style={{ cursor: "pointer", color: "gold" }}
										/>
									) : (
										<FaRegStar
											className="star-icon"
											onClick={() => toggleFavorite(card.id)}
											style={{ cursor: "pointer" }}
										/>
									)}
								</div>
								<Card.Text>{card.title}</Card.Text>
								<Card.Text>{card.description}</Card.Text>
								<Card.Text>Costo: {card.cost}</Card.Text>

								<Button variant="primary" className="view-more-btn">
									Ver más
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default CursosDisp;
