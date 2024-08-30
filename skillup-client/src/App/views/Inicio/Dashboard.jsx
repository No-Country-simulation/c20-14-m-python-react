<<<<<<< HEAD
=======
/* eslint-disable prettier/prettier */
>>>>>>> 9f16bb33af0826cce33bd834cbb4dd81722e7e99
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import CardsData from "../../../components/cards/CardsData";
import css from "./css.module.css";

const Dashboard = () => {
	const dashboardCards = CardsData.filter(
		card => card.id === 3 || card.id === 4 || card.id === 7
	);

	return (
<<<<<<< HEAD
		<Container fluid className="cardContainer" id="Dashboard">
=======
		<Container fluid className="cardContainer">
>>>>>>> 9f16bb33af0826cce33bd834cbb4dd81722e7e99
			<Row>
				<Col>
					<h2 className={css.heroText_ppal}>Dashboard</h2>
				</Col>
			</Row>
			<Row className="mb-5 gap-3">
				{dashboardCards.map((card, index) => (
					<Col xs={12} md={6} lg={4} key={index} className={css.cardCol}>
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

export default Dashboard;
