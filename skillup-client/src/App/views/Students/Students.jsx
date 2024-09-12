import "bootstrap/dist/css/bootstrap.min.css";
/* import Cards from './assets/components/cards/Cards' */
import Recomendaciones from "./Recomendaciones";
/*import Dashboard from "./assets/components/Dashboard";*/
// import CursosDisponibles from "./CursosDisp";
// import imgBg from "./img/background-code.jpg";
import Dashboard from "./CursosCompletados/Dashboard";
import Contact from "../../../components/Contacto/Contacto";

function Students() {
	return (
		<>
			<Recomendaciones />
			<Dashboard />
			<Contact />
		</>
	);
}

export default Students;
