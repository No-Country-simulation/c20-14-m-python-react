import Hero from "./Hero";
import Recomendaciones from "./Recomendaciones";
import CursosDisponibles from "./CursosDisponibles";
import Contact from "../../../components/Contacto/Contacto";
import useScroll from "../../../hooks/useScroll.js";

const Inicio = () => {
	useScroll();
	return (
		<>
			<Hero />
			<Recomendaciones />
			<CursosDisponibles />
			<Contact />
		</>
	);
};

export default Inicio;
