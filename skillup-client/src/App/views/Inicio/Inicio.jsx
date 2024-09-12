/* eslint-disable prettier/prettier */
/* import React from 'react'; */
import Hero from "./Hero";
import Recomendaciones from "./Recomendaciones";
import CursosDisponibles from "./CursosDisponibles";
import Dashboard from "./Dashboard";
import Certificados from "./Certificados";
import imgBg from "./img/background-code.jpg";

const Inicio = () => {
	return (
		<>
			<div>Inicio</div>
			<Hero />
			<Recomendaciones />
			<CursosDisponibles />
			<img className="centerBlock" src={imgBg} alt="imagen de fondo codigo" />
			<Dashboard />
			<Certificados />
		</>
	);
};

export default Inicio;
