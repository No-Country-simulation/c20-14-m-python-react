import Hero from "./Hero";
import Recomendaciones from "./Recomendaciones";
import CursosDisponibles from "./CursosDisponibles";
import imgBg from "./img/background-code.jpg";
import css from "./css.module.css";

const Inicio = () => {
	return (
		<>
			<Hero />
			<Recomendaciones />
			<img className={css.center} src={imgBg} alt="imagen de fondo codigo" />
			<CursosDisponibles />
		</>
	);
};

export default Inicio;
