import {
	Container,
	Row,
	Col,
	Card,
	Badge,
	Button,
	Tooltip,
	OverlayTrigger
} from "react-bootstrap";
import { Link } from "react-router-dom";
import CardsData from "../../../components/cards/CardsData";
import css from "./css.module.css";

const CursosDisponibles = () => {
	// Filtramos las tarjetas de cursos
	const cursosCards = CardsData.filter(
		card =>
			card.id === 1 ||
			card.id === 2 ||
			card.id === 5 ||
			card.id === 3 ||
			card.id === 8 ||
			card.id == 9
	);

	// Tooltip que se mostrará al pasar el mouse sobre las tarjetas
	const renderTooltip = props => (
		<Tooltip id="button-tooltip" {...props}>
			Haz click en el botón para ver el detalle de los cursos!
		</Tooltip>
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
						{/* OverlayTrigger para mostrar el Tooltip */}
						<OverlayTrigger
							placement="top"
							delay={{ show: 250, hide: 400 }}
							overlay={renderTooltip}
						>
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
						</OverlayTrigger>
					</Col>
				))}
			</Row>
			<Row className="text-center mt-4">
				<Col>
					{/* Botón para ver el catálogo completo */}
					<Link to="/catalogue">
						<Button variant="dark" size="lg">
							Ver el Catálogo Completo y Comprar
						</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default CursosDisponibles;
