import "bootstrap/dist/css/bootstrap.min.css";
/* import Cards from './assets/components/cards/Cards' */
import Recomendaciones from "./Recomendaciones";
/*import Dashboard from "./assets/components/Dashboard";*/
import CursosDisp from "./CursosDisp";
import imgBg from "./img/background-code.jpg";
import Dashboard from "./CursosCompletados/Dashboard";
import Favorites from "./Favorites";
import { useState } from "react";
import CardsData from "./CardsData";
function Students() {
	const [cards, setCards] = useState(CardsData);

	const toggleFavorite = id => {
		const updatedCards = cards.map(card =>
			card.id === id ? { ...card, favorite: !card.favorite } : card
		);
		setCards(updatedCards);
	};

	return (
		<>
			{/* Pasamos cards y toggleFavorite a Recomendaciones */}
			<Recomendaciones cards={cards} toggleFavorite={toggleFavorite} />
			<CursosDisp cards={cards} toggleFavorite={toggleFavorite} />
			<img className="centerBlock" src={imgBg} alt="imagen de fondo codigo" />
			<Dashboard />
			<Favorites cards={cards} toggleFavorite={toggleFavorite} />
		</>
	);
}

export default Students;
