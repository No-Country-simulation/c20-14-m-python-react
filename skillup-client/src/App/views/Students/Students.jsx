import "bootstrap/dist/css/bootstrap.min.css";
/* import Cards from './assets/components/cards/Cards' */
import Recomendaciones from "./Recomendaciones";
/*import Dashboard from "./assets/components/Dashboard";*/
import CursosDisponibles from "./CursosDisp";
import imgBg from "./img/background-code.jpg";
import Certificados from "./Certificados";
import CursosCompletados from "./CursosCompletados/CursosCompletados";
function Students() {
	return (
		<>
			<Recomendaciones />
			<CursosDisponibles />
			<img className="centerBlock" src={imgBg} alt="imagen de fondo codigo" />
			<CursosCompletados />
			<Certificados />
		</>
	);
}

export default Students;
