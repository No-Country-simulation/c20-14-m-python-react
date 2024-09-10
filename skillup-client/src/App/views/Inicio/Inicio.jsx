/* import React from 'react'; */
import Hero from "./Hero";
import Recomendaciones from "./Recomendaciones";
import CursosDisponibles from "./CursosDisponibles";
// import Dashboard from "./Dashboard";

import imgBg from "./img/background-code.jpg";

import css from "./css.module.css";
import FormIndex from "./FormIndex";

const Inicio = () => {
	return (
		<>
			<FormIndex />
			<Hero />
			<Recomendaciones />
			<img className={css.center} src={imgBg} alt="imagen de fondo codigo" />
			<CursosDisponibles />
		</>
	);
};

export default Inicio;
