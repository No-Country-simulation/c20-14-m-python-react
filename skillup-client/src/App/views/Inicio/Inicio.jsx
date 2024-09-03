/* import React from 'react'; */
import Hero from "./Hero";
import Recomendaciones from "./Recomendaciones";
import CursosDisponibles from "./CursosDisponibles";
import Dashboard from "./Dashboard";
import Certificados from "./Certificados";
import imgBg from "./img/background-code.jpg";
import css from "./css.module.css";

const Inicio = () => {
	return (
		<>
			<Hero />
			<Recomendaciones />
			<CursosDisponibles />
			<img className={css.center} src={imgBg} alt="imagen de fondo codigo" />
			<Dashboard />
			<Certificados />
		</>
	);
};

export default Inicio;
