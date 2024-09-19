import "bootstrap/dist/css/bootstrap.min.css";
/* import Cards from './assets/components/cards/Cards' */
import Recomendaciones from "./Recomendaciones";
/*import Dashboard from "./assets/components/Dashboard";*/
import CursosDisp from "./CursosDisp";
// import imgBg from "./img/background-code.jpg";
import Favorites from "./Favorites";
import { useState } from "react";
import CardsData from "./CardsData";
import Contact from "../../../components/Contacto/Contacto";
import MisCursos from "./CursosCompletados/MisCursos";
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
			<MisCursos />
			<Favorites cards={cards} toggleFavorite={toggleFavorite} />

			<Recomendaciones cards={cards} toggleFavorite={toggleFavorite} />
			<CursosDisp cards={cards} toggleFavorite={toggleFavorite} />
			<Contact />
		</>
	);
}

export default Students;
