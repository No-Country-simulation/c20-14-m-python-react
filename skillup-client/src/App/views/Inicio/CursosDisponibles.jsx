import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import CardsData from "../../../components/cards/CardsData";
import { Link } from "react-router-dom";
import css from "./css.module.css";

const CursosDisponibles = () => {
	const cursosCards = CardsData.filter(
		card =>
			card.id === 9 ||
			card.id === 2 ||
			card.id === 5 ||
			card.id === 6 ||
			card.id === 7 ||
			card.id == 4
	);

	return (
		<Container fluid className={css.cardContainer} id="CursosDisponibles">
			<Row>
				<Col>
					<h2 className={css.heroText_ppal}>Cursos Disponibles</h2>
				</Col>
			</Row>
			<Row className={`mb-5 gap-3 ${css.adjustRow}`}>
				{cursosCards.map((card, index) => (
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

export default CursosDisponibles;
