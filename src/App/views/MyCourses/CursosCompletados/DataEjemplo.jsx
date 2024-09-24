import jsim from "../img/JS.webp";
import sqlim from "../img/sql.webp";
const DataEjemplo = [
	{
		id: 1,
		name: "Curso de JsS",
		inicio: "1/08/2024",
		date: "1/09/2024",
		certificateUrl:
			"https://marketplace.canva.com/EAFxfGg4MDo/1/0/1600w/canva-MyYwE3QmneE.jpg",
		imageUrl: jsim,
		progreso: 100 // Si cambias el valor al menos de 100 la card no mostrara el botón de certificado
	},
	{
		id: 2,
		name: "Curso de Sql",
		inicio: "5/08/2024",
		date: "",
		certificateUrl: "null", // No se necesita URL de certificado porque el progreso es menor a 100%
		imageUrl: sqlim,
		progreso: 60 // Progreso parcial, no mostrará el botón de certificado
	}
];

export default DataEjemplo; //

// const DataEjemplo = []; // Lista vacía, comentar lo anterior para ver como cambia la card cuando el alumno no tienen ningun curso asignado

// export default DataEjemplo;
