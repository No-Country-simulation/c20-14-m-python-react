/* eslint-disable prettier/prettier */
import { Container, Col, Row, Card, Badge } from "react-bootstrap";

/* import Badge from 'react-bootstrap/Badge'; */
import CardsData from "./CardsData"

const Cards = () => {
	return (
		<Container>
			<Row>
				{CardsData.map((card, index) => (
					<Col xs={12} md={6} lg={4} key={index}>
						<Card className="mb-4">
							<div>
								<Card.Img variant="top" src={card.image} />
								<Badge bg="primary">{card.hours}horas</Badge>
							</div>

							<Card.Body>
								<Card.Title>{card.course}</Card.Title>
								<Card.Text> {card.title} </Card.Text>
								<Card.Text> {card.description} </Card.Text>
								<Card.Text> Costo: {card.cost} </Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Cards;
