import CardsImg from "./CardsImg";

const CardsData = [
	{
		id: 1,
		image: CardsImg.html,
		course: "HTML & CSS",
		title: "Aprende a crear páginas web con HTML5 y CSS3.",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum nulla minima id officia reiciendis?",
		cost: "$163.00",
		hours: 40,
		favorite: true
	},

	{
		id: 2,
		image: CardsImg.js,
		course: "JAVASCRIPT",
		title: "Domina JavaScript, el lenguaje de programación más popular en web.",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum nulla minima id officia reiciendis?",
		cost: "$163.00",
		hours: 50,
		favorite: false
	},
	{
		id: 3,
		image: CardsImg.next,
		course: "NEXT",
		title: "Crea aplicaciones web modernas y eficientes con Next.js.",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum nulla minima id officia reiciendis?",
		cost: "$163.00",
		hours: 60,
		favorite: true
	},

	{
		id: 4,
		image: CardsImg.sql,
		course: "SQL",
		title: "Aprende a administrar bases de datos con SQL.",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum nulla minima id officia reiciendis?",
		cost: "$163.00",
		hours: 45,
		favorite: true
	}
];

export default CardsData;
