import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import CardsData from "./CardsData";
import "../Students/styles/CardLog.css";
import { FaRegStar } from "react-icons/fa";

const Favorites = () => {
	const favoritCards = CardsData.filter(
		card => card.id === 1 || card.id === 2 || card.id === 5
	);

	return (
		<Container fluid className="cardContainer">
			<Row>
				<Col>
					<h2>Favoritos </h2>
				</Col>
			</Row>
			<Row>
				{favoritCards.map((card, index) => (
					<Col xs={12} md={6} lg={4} key={index}>
						<Card className="mb-4">
							<div className="cardImg">
								<Card.Img variant="top" src={card.image} />
								<Badge className="cardBadge" bg="primary">
									{card.hours} horas
								</Badge>
							</div>
							<Card.Body className="position-relative">
								<div className="d-flex align-items-start justify-content-between">
									<Card.Title>{card.course}</Card.Title>
									<FaRegStar className="star-icon" />
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

export default Favorites;
