import CatalogueImg from "./CatalogueImg";

const CatalogueData = [
	{
		id: "HTML", //identificacion
		course: "HTML & CSS", //curso
		description:
			"En este curso aprenderás a crear y estilizar páginas web. Mejora tus habilidades con proyectos interactivos y ejemplos reales.", // descripcion
		instructor: "Juan Galvez", //instructor
		calificacion: "4.9 ⭐⭐⭐⭐", //numero
		nivel: "Pricipiante ", //principiante / medio / avanzado
		duracion: "50 horas", //cantidad de horas del curos
		lecciones: "5 clases", //cantidad de clases del curso
		descarga: "Contenido descargable", //igual en todos los cursos
		ejercicios: "30 ejercicios para practica", //cantidad de ejercicios por curso
		certificado: "Certificado al final de la cursada", //igual en todos los cursos
		acceso: "Acesso sin vencimiento", //igual en todos los cursos
		horario: "Aprende a tu ritmo", //igual en todos los cursos
		image: CatalogueImg.html, //link de cloudinary
		video:
			"https://res.cloudinary.com/codewithmosh/video/upload/v1684540144/promo-videos/htmlcss.mp4", //link de youtube
		learn1: "Fundamentos del desarrollo", //igual en todos los cursos
		learn2: "Herramientas esenciales ", //igual en todos los cursos
		learn3: "Como crear codigo limpio ", //igual en todos los cursos
		learn4: "Aprender las ultimas tendencias", //igual en todos los cursos
		learn5: "Crear estructuras optimizadas que los buscadores adoran", //igual en todos los cursos
		learn6: "Incrementar tu productividad y eficiencia", //igual en todos los cursos
		clase1: "Introduccion", //titulo + video
		clase2: "Lenguajes", //titulo + video
		clase3: "CSS inicial", //titulo + video
		clase4: "Validacion de paginas", //titulo + video
		clase5: "Contenedores", //titulo + video
		clase6: "Elementos semanticos", //titulo + video
		clase7: "Estructura de pagina web", //titulo + video
		clase8: "Selectores especificos" //titulo + video
	},

	{
		id: "JAVASCRIPT",
		image: CatalogueImg.js,
		video:
			"https://player.hotmart.com/embed/4RbQ35aQZv?signature=cw2H9a8E9WVUaBMlNtKqyLonP6tw4KherUD1doYESN-YNTts-eKkKevRUi8HShlXpaOKG0iZ4I_YOw4d762UKmF68y7ySYnkzZyjNH8MbK7JK8LnizGqqzoZMoeKCxyesHRSnNx4l-Nqv-r8Uzi5LYTNfKYdkwKoIDbY_883KqA4G2eRctTgoqncQ4K6iN14kGkp-DPle8b53Rg-_QzwKnYjNI7x0sfKQXEv63CeTVekMV8Sy767hpl51Lt6EE0d4xc2C0hp9F0l1-obVTI1IIE812VGrhhiUYJn7cdvNWl7mxycgOeplumk_OOFSJFl3gP6f4Gs4aCHSWvm9dp9Ug%3D%3D&token=aa2d356b-e2f0-45e8-9725-e0efc7b5d29c&autoplay=autoplay",
		course: "JAVASCRIPT",
		instructor: "Juan Perez",
		description:
			"Aprende JavaScript desde cero y domina las bases de la programación web. ",
		calificacion: "4.9 ⭐⭐⭐⭐",
		nivel: "Pricipiante ",
		duracion: "50 horas",
		clase: "5 clases",
		descarga: "Contenido descargable",
		ejercicios: "30 ejercicios para practica",
		acceso: "Acesso sin vencimiento",
		horario: "Aprende a tu ritmo",
		learn1: "Fundamentos del desarrollo",
		learn2: "Herramientas esenciales ",
		learn3: "Como crear codigo limpio ",
		learn4: "Aprender las ultimas tendencias",
		learn5: "Crear estructuras optimizadas que los buscadores adoran",
		learn6: "Incrementar tu productividad y eficiencia",
		clase1: " Introduccion",
		clase2: " Clase 2",
		clase3: " Clase 3",
		clase4: " Clase 4",
		clase5: " Clase 5",
		clase6: " Clase 6",
		clase7: " Clase 7",
		clase8: " Clase 7"
	},
	{
		id: "NEXT",
		image: CatalogueImg.next,
		video:
			"https://res.cloudinary.com/codewithmosh/video/upload/v1694364873/promo-videos/nextjs-part1.mp4",
		course: "NEXT",
		description:
			"Aprende a crear aplicaciones web rápidas y eficientes con Next.js, aprovechando su potente renderizado y optimización.",
		calification: "4.9 ⭐⭐⭐⭐",
		instructor: "Juan Lopez",
		nivel: "Pricipiante ",
		duracion: "50 horas",
		clase: "5 clases",
		descarga: "Contenido descargable",
		ejercicios: "30 ejercicios para practica",
		acceso: "Acesso sin vencimiento",
		horario: "Aprende a tu ritmo",
		learn1: "Fundamentos del desarrollo",
		learn2: "Herramientas esenciales ",
		learn3: "Como crear codigo limpio ",
		learn4: "Aprender las ultimas tendencias",
		learn5: "Crear estructuras optimizadas que los buscadores adoran",
		learn6: "Incrementar tu productividad y eficiencia",
		clase1: " Introduccion",
		clase2: " Clase 2",
		clase3: " Clase 3",
		clase4: " Clase 4",
		clase5: " Clase 5",
		clase6: " Clase 6",
		clase7: " Clase 7",
		clase8: " Clase 7"
	},
	{
		id: "SQL",
		image: CatalogueImg.sql,
		video:
			"https://player.hotmart.com/embed/Yq2om9PdLa?signature=0E3kL60RPq_WFD2ZLdVaKhzdEkxtSAaRJJ1JfHVoO7c8o3tIvGUu1p0B_x_Mu9MsZtn3H43bcelaQ1y7O9GIRvV1wBhsUO0ADvVbTbkfDzBGHiiLXtYVtMJtTjqNdD-dvAJCN6DDELTe5KzLYfVO47vh4kj04Hdfv4XKDul4jP5Sqvwx_kL3sdu4XCw0FnLQPqe9qIUGOyhcTKV_ypPAKcV7Cnq7lGoZvxUeX9QMdqZn-9CGSGqeuwQbzXzwROE9FalSeAzDwXo52YSww1u17QAb8hTKBKAPOtBX-RHwTpuLzuENvm69SlOR__KvCOsUC6daWIFFzqoh5g9Tm4KheA%3D%3D&token=aa2d356b-e2f0-45e8-9725-e0efc7b5d29c&autoplay=autoplay",
		course: "SQL",
		description:
			"Domina SQL para gestionar y analizar datos de manera efectiva en cualquier base de datos.",
		calification: "4.9 ⭐⭐⭐⭐",
		instructor: "Juan Suarez",
		nivel: "Pricipiante ",
		duracion: "50 horas",
		clase: "5 clases",
		descarga: "Contenido descargable",
		ejercicios: "30 ejercicios para practica",
		acceso: "Acesso sin vencimiento",
		horario: "Aprende a tu ritmo",
		learn1: "Fundamentos del desarrollo",
		learn2: "Herramientas esenciales ",
		learn3: "Como crear codigo limpio ",
		learn4: "Aprender las ultimas tendencias",
		learn5: "Crear estructuras optimizadas que los buscadores adoran",
		learn6: "Incrementar tu productividad y eficiencia",
		clase1: " Introduccion",
		clase2: " Clase 2",
		clase3: " Clase 3",
		clase4: " Clase 4",
		clase5: " Clase 5",
		clase6: " Clase 6",
		clase7: " Clase 7",
		clase8: " Clase 7"
	},
	{
		id: "C++",
		image: CatalogueImg.cSharp,
		video:
			"https://res.cloudinary.com/codewithmosh/video/upload/v1684540279/promo-videos/cplusplus.mp4",
		course: "C++",
		description:
			"Descubre los fundamentos de C++ y desarrolla habilidades para crear aplicaciones eficientes y de alto rendimiento.",
		calification: "4.9 ⭐⭐⭐⭐",
		instructor: "Juan Mendez",
		nivel: "Pricipiante ",
		duracion: "50 horas",
		clase: "5 clases",
		descarga: "Contenido descargable",
		ejercicios: "30 ejercicios para practica",
		acceso: "Acesso sin vencimiento",
		horario: "Aprende a tu ritmo",
		learn1: "Fundamentos del desarrollo",
		learn2: "Herramientas esenciales ",
		learn3: "Como crear codigo limpio ",
		learn4: "Aprender las ultimas tendencias",
		learn5: "Crear estructuras optimizadas que los buscadores adoran",
		learn6: "Incrementar tu productividad y eficiencia",
		clase1: " Introduccion",
		clase2: " Clase 2",
		clase3: " Clase 3",
		clase4: " Clase 4",
		clase5: " Clase 5",
		clase6: " Clase 6",
		clase7: " Clase 7",
		clase8: " Clase 7"
	},
	{
		id: "DJANGO",
		image: CatalogueImg.django,
		video:
			"https://res.cloudinary.com/codewithmosh/video/upload/v1684768296/promo-videos/dj.mp4",
		course: "DJANGO",
		description:
			"Aprende a construir aplicaciones web robustas y escalables con Django, el potente framework de Python.",
		calification: "4.9 ⭐⭐⭐⭐",
		instructor: "Juan Miguez",
		nivel: "Pricipiante ",
		duracion: "50 horas",
		clase: "5 clases",
		descarga: "Contenido descargable",
		ejercicios: "30 ejercicios para practica",
		acceso: "Acesso sin vencimiento",
		horario: "Aprende a tu ritmo",
		learn1: "Fundamentos del desarrollo",
		learn2: "Herramientas esenciales ",
		learn3: "Como crear codigo limpio ",
		learn4: "Aprender las ultimas tendencias",
		learn5: "Crear estructuras optimizadas que los buscadores adoran",
		learn6: "Incrementar tu productividad y eficiencia",
		clase1: " Introduccion",
		clase2: " Clase 2",
		clase3: " Clase 3",
		clase4: " Clase 4",
		clase5: " Clase 5",
		clase6: " Clase 6",
		clase7: " Clase 7",
		clase8: " Clase 7"
	},
	{
		id: "DOCKER",
		image: CatalogueImg.docker,
		video:
			"https://res.cloudinary.com/codewithmosh/video/upload/v1684768693/promo-videos/dockerc.mp4",
		course: "DOCKER",
		description:
			"Domina Docker para crear, desplegar y gestionar aplicaciones en contenedores de manera eficiente y escalable.",
		calification: "4.9 ⭐⭐⭐⭐",
		instructor: "Juan Yañez",
		nivel: "Pricipiante ",
		duracion: "50 horas",
		clase: "5 clases",
		descarga: "Contenido descargable",
		ejercicios: "30 ejercicios para practica",
		acceso: "Acesso sin vencimiento",
		horario: "Aprende a tu ritmo",
		learn1: "Fundamentos del desarrollo",
		learn2: "Herramientas esenciales ",
		learn3: "Como crear codigo limpio ",
		learn4: "Aprender las ultimas tendencias",
		learn5: "Crear estructuras optimizadas que los buscadores adoran",
		learn6: "Incrementar tu productividad y eficiencia",
		clase1: " Introduccion",
		clase2: " Clase 2",
		clase3: " Clase 3",
		clase4: " Clase 4",
		clase5: " Clase 5",
		clase6: " Clase 6",
		clase7: " Clase 7",
		clase8: " Clase 7"
	},
	{
		id: "REACT TYPESCRIPT",
		image: CatalogueImg.reactTP,
		video:
			"https://res.cloudinary.com/codewithmosh/video/upload/v1684768181/promo-videos/tscript.mp4",
		course: "REACT CON TYPESCRIPT",
		title: "Aprende React con TypeScript: Desarrollo Moderno",
		description:
			"Descubre cómo construir interfaces interactivas y escalables usando React y TypeScript para aplicaciones web robustas.",
		calification: "4.9 ⭐⭐⭐⭐",
		instructor: "Juan Diez",
		nivel: "Pricipiante ",
		duracion: "50 horas",
		clase: "5 clases",
		descarga: "Contenido descargable",
		ejercicios: "30 ejercicios para practica",
		acceso: "Acesso sin vencimiento",
		horario: "Aprende a tu ritmo",
		learn1: "Fundamentos del desarrollo",
		learn2: "Herramientas esenciales ",
		learn3: "Como crear codigo limpio ",
		learn4: "Aprender las ultimas tendencias",
		learn5: "Crear estructuras optimizadas que los buscadores adoran",
		learn6: "Incrementar tu productividad y eficiencia",
		clase1: " Introduccion",
		clase2: " Clase 2",
		clase3: " Clase 3",
		clase4: " Clase 4",
		clase5: " Clase 5",
		clase6: " Clase 6",
		clase7: " Clase 7",
		clase8: " Clase 7"
	},
	{
		id: "TYPESCRIPT",
		image: CatalogueImg.typescript,
		video:
			"https://res.cloudinary.com/codewithmosh/video/upload/v1684768181/promo-videos/tscript.mp4",
		course: "TYPESCRIPT",
		description:
			"Aprende TypeScript para mejorar tus habilidades en JavaScript, creando aplicaciones más seguras y mantenibles.",
		calification: "4.9 ⭐⭐⭐⭐",
		instructor: "Juan Ez",
		nivel: "Pricipiante ",
		duracion: "50 horas",
		clase: "5 clases",
		descarga: "Contenido descargable",
		ejercicios: "30 ejercicios para practica",
		acceso: "Acesso sin vencimiento",
		horario: "Aprende a tu ritmo",
		learn1: "Fundamentos del desarrollo",
		learn2: "Herramientas esenciales ",
		learn3: "Como crear codigo limpio ",
		learn4: "Aprender las ultimas tendencias",
		learn5: "Crear estructuras optimizadas que los buscadores adoran",
		learn6: "Incrementar tu productividad y eficiencia",
		clase1: " Introduccion",
		clase2: " Clase 2",
		clase3: " Clase 3",
		clase4: " Clase 4",
		clase5: " Clase 5",
		clase6: " Clase 6",
		clase7: " Clase 7",
		clase8: " Clase 7"
	},
	{
		id: "JAVA",
		image: CatalogueImg.java,
		video:
			"https://res.cloudinary.com/codewithmosh/video/upload/v1684768181/promo-videos/tscript.mp4",
		course: "JAVASCRIPT",
		description: "Aprende ",
		calification: "4.9 ⭐⭐⭐⭐",
		instructor: "Juan Ez",
		nivel: "Pricipiante ",
		duracion: "50 horas",
		clase: "5 clases",
		descarga: "Contenido descargable",
		ejercicios: "30 ejercicios para practica",
		acceso: "Acesso sin vencimiento",
		horario: "Aprende a tu ritmo",
		learn1: "Fundamentos del desarrollo",
		learn2: "Herramientas esenciales ",
		learn3: "Como crear codigo limpio ",
		learn4: "Aprender las ultimas tendencias",
		learn5: "Crear estructuras optimizadas que los buscadores adoran",
		learn6: "Incrementar tu productividad y eficiencia",
		clase1: " Introduccion",
		clase2: " Clase 2",
		clase3: " Clase 3",
		clase4: " Clase 4",
		clase5: " Clase 5",
		clase6: " Clase 6",
		clase7: " Clase 7",
		clase8: " Clase 7"
	}
];

export default CatalogueData;
