import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import CardsData from "../../../components/cards/CardsData";

import css from "./css.module.css";
import { Link } from "react-router-dom";

const Recomendaciones = () => {
	const recommendedCards = CardsData.filter(
		card => card.id === 3 || card.id === 10 || card.id === 5
	);

	return (
		<Container fluid className={css.cardContainer} id="Recomendaciones">
			<Row>
				<Col>
					<h2 className={css.heroText_ppal}>Recomendaciones</h2>
				</Col>
			</Row>
			<Row className="mb-5 gap-3">
				{recommendedCards.map((card, index) => (
					<Col xs={12} md={6} lg={4} key={index} className={css.cardCol}>
						<Card className="mb-4 gap-3">
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
			<Row>
				<Link to="/catalogue" className="w-50 mx-auto">
					<Button variant="dark" size="lg" className="w-100 btn-black">
						Ver mas
					</Button>
				</Link>
			</Row>
		</Container>
	);
};

export default Recomendaciones;
