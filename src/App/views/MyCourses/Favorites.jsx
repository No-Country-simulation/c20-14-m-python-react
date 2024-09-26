import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import "../MyCourses/styles/Favorites.css";

const Favorites = ({ cards, toggleFavorite }) => {
	// Filtrar las tarjetas que están marcadas como favoritas
	const favoritCards = cards.filter(card => card.favorite);

	return (
		<Container fluid className="cardContainer" id="Favoritos">
			<Row>
				<Col>
					<h2 className="heroText_ppal">Favoritos</h2>
				</Col>
			</Row>
			<Row>
				{favoritCards.map((card, index) => (
					<Col xs={12} md={6} lg={4} key={index}>
						<Card className="mb-4">
							<div className="cardImg ">
								<Card.Img
									variant="top"
									src={card.image}
									className="imgCard--310x207"
								/>
								<Badge className="cardBadge" bg="primary">
									{card.hours} horas
								</Badge>
							</div>
							<Card.Body className="position-relative">
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

								<Button variant="dark" className="view-more-btn">
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

export default Favorites;
