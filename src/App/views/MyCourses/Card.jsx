// Card.jsx
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import CardsData from "./CardsData";

const Cards = () => {
	return (
		<Container>
			<Row>
				{CardsData.map((card, index) => (
					<Col xs={12} md={6} lg={4} key={index}>
						<Card className="mb-4">
							<Card.Img variant="top" src={card.image} />
							<Card.Body>
								<Badge bg="primary">{card.hours} horas</Badge>
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

export default Cards;
