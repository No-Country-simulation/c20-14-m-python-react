import "bootstrap/dist/css/bootstrap.min.css";
/* import Cards from './assets/components/cards/Cards' */
import Recomendaciones from "./Recomendaciones";
/*import Dashboard from "./assets/components/Dashboard";*/
import CursosDisponibles from "./CursosDisp";
import imgBg from "./img/background-code.jpg";
import Dashboard from "./CursosCompletados/Dashboard";
import Favorites from "./Favorites";
function Students() {
	return (
		<>
			<Recomendaciones />
			<CursosDisponibles />
			<img className="centerBlock" src={imgBg} alt="imagen de fondo codigo" />
			<Dashboard />
			<Favorites />
		</>
	);
}

export default Students;
