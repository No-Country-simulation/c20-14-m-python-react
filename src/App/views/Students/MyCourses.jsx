import "bootstrap/dist/css/bootstrap.min.css";
/* import Cards from './assets/components/cards/Cards' */
import Recomendaciones from "./Recomendaciones.jsx";
/*import Dashboard from "./assets/components/Dashboard";*/
import CursosDisp from "./CursosDisp.jsx";
// import imgBg from "./img/background-code.jpg";
import Favorites from "./Favorites.jsx";
import { useEffect, useState } from "react";
import CardsData from "./CardsData.jsx";
import Contact from "../../../components/Contacto/Contacto.jsx";
import MisCursos from "./CursosCompletados/MisCursos.jsx";
import { getAllCourseService } from "./service/getAllCourseService.js";
function MyCourses() {
	const [cards, setCards] = useState(CardsData);

	const [allCourse, setAllCourse] = useState();

	useEffect(() => {
		const controller = new AbortController();

		getAllCourseService(controller.signal)
			.then(data => setAllCourse(data.courses))
			.catch(err => console.log(err));

		return () => controller.abort();
	}, []);

	const toggleFavorite = id => {
		const updatedCards = cards.map(card =>
			card.id === id ? { ...card, favorite: !card.favorite } : card
		);
		setCards(updatedCards);
	};

	return (
		<>
			<MisCursos allCourse={allCourse} />
			<Favorites cards={cards} toggleFavorite={toggleFavorite} />

			<Recomendaciones cards={cards} toggleFavorite={toggleFavorite} />
			<CursosDisp cards={cards} toggleFavorite={toggleFavorite} />
			<Contact />
		</>
	);
}

export default MyCourses;
