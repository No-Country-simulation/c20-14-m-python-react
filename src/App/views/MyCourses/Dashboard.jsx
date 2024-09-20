import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import CardsData from "./CardsData";

const Dashboard = () => {
	const dashboardCards = CardsData.filter(
		card => card.id === 3 || card.id === 4
	);

	return (
		<Container>
			<Row>
				{dashboardCards.map((card, index) => (
					<Col xs={12} md={6} lg={4} key={index}>
						<Card className="mb-4">
							<Card.Img variant="top" src={card.image} />
							<Badge bg="primary">{card.hours} horas</Badge>
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
