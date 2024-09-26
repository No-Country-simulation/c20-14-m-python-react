import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import CardsData from "./CardsData";
import "./styles/Recomendaciones.css";

const Recomendaciones = () => {
	const recommendedCards = CardsData.filter(
		card => card.id === 1 || card.id === 2 || card.id === 5
	);

	return (
		<Container fluid className="cardContainer" id="Recomendaciones">
			<Row>
				<Col>
					<h2>Recomendaciones</h2>
				</Col>
			</Row>
			<Row>
				{recommendedCards.map((card, index) => (
					<Col xs={12} md={6} lg={4} key={index}>
						<Card className="mb-4">
							<div className="cardImg">
								<Card.Img variant="top" src={card.image} />
								<Badge className="cardBadge" bg="primary">
									{card.hours} horas
								</Badge>
							</div>

							<Card.Body>
								<Card.Title>{card.course}</Card.Title>
								<Card.Text>{card.title}</Card.Text>
								<Card.Text>{card.description}</Card.Text>
								<Card.Text>Costo: {card.cost}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Recomendaciones;
