import { Container, Row, Col, Button, Form } from "react-bootstrap";
import {
	FaPlayCircle,
	FaCloudDownloadAlt,
	FaCode,
	FaVideo
} from "react-icons/fa";
import { BiBarChartAlt } from "react-icons/bi";
import { MdOutlineComputer } from "react-icons/md";
import { IoIosInfinite, IoMdCheckmark } from "react-icons/io";
import { GoClock } from "react-icons/go";
import CarouselSU from "./CarouselSU";
import css from "./css.module.css";
import { useState, useEffect } from "react";
import CatalogueData from "./CatalogueData";
const Catalogue = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://skillup-pi83.onrender.com/api/courses"
				);
				const data = await response.json();
				if (data.message === "success") {
					setCourses(data.courses);
				} else {
					console.error("No carga informacion del curso");
				}
			} catch (error) {
				console.error("Falta informacion:", error);
			}
		};

		fetchData();
	}, []);

	const handleSearchChange = e => {
		setSearchTerm(e.target.value);
	};
	//extrae de la ruta de url de la api para la informacion del iframe
	const extractVideoId = url => {
		const regex =
			/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
		const matches = url.match(regex);
		return matches ? matches[1] : null;
	};

	const filteredCourses = courses.filter(course =>
		course.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<Container fluid className="cardContainer">
			<Row className="mx-auto w-75 text-center">
				<h1>
					Todos los cursos en un solo lugar, ¿qué te gustaría aprender hoy?
				</h1>
			</Row>

			<Form className={`${css.courseSearch} mb-4`}>
				<Form.Group controlId="search">
					<Form.Control
						className={css.formStyles}
						type="text"
						placeholder="Busca tu curso..."
						value={searchTerm}
						onChange={handleSearchChange}
					/>
				</Form.Group>
			</Form>

			{filteredCourses.map((course, index) => {
				const { title, description, modules } = course;
				const courseData = CatalogueData.find(item => item.title === title); // Busca los datos del curso en CatalogueData
				// Si no se encuentra el curso, retorna null
				if (!courseData) {
					return null;
				}
				//info que no se encuentra en api
				const {
					calificacion, //estrellas varia segun curso
					instructor, //varia segun curso nombres en api no tienen nombre y apellido a pesar de tener esos campos
					nivel, // inicial/intermedio/avanzado
					duracion, //cantidad de horas varia segun curso **ver desde api
					ejercicios //cantidad de ejercicio varia segun curso
				} = courseData;

				return (
					<Row key={index} className={css.courseRow}>
						<Row className={`align-items-center ${css.courseRowInside}`}>
							<Col lg={7}>
								<h2 className={css.courseh1}>{title}</h2>
								<div className={css.courseDescription}>
									<p>{description}</p>
									<p>{calificacion}</p>
									<p>
										<span className={css.courseTeacher}>INSTRUCTOR: </span>
										{instructor}
									</p>
								</div>
								<div className="d-flex justify-content-center">
									<Button className={`${css.btnSale} btn-secondary`}>
										Comprar
									</Button>
								</div>
							</Col>

							<Col className={css.cardCol}>
								<h2 className={css.detailh2}>Detalle del curso</h2>
								<ul>
									<li>
										<span>
											<BiBarChartAlt />
										</span>
										{nivel}
									</li>
									<li>
										<span>
											<FaPlayCircle />
										</span>
										{duracion}
									</li>
									<li>
										<span>
											<FaCloudDownloadAlt />
										</span>
										Contenido descargable
									</li>
									<li>
										<span>
											<FaCode />
										</span>
										{ejercicios}
									</li>
									<li>
										<span>
											<IoIosInfinite />
										</span>
										Acesso sin vencimiento
									</li>
									<li>
										<span>
											<GoClock />
										</span>
										Aprende a tu ritmo
									</li>
								</ul>
							</Col>
						</Row>

						<Row>
							<Col
								xs={12}
								className="d-flex flex-column align-items-center mt-5"
							>
								<h2 className={`text-center mt-5 ${css.contenth2}`}>
									Contenido validado por expertos
								</h2>
								<p className={css.contentParagraph}>
									Curso validado por expertos de la industria con las últimas
									actualizaciones
								</p>
								<div className={css.video}>
									<iframe
										width="560"
										height="315"
										src={`https://www.youtube.com/embed/${extractVideoId(modules[0]?.video_url)}`}
										title="Video del curso"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</div>
							</Col>
						</Row>

						<Col xs={12} className={css.cardCol}>
							<h2 className={`${css.detailh2} ${css.largeText}`}>
								En este curso aprenderás
							</h2>
							<ul>
								{modules.map(module => (
									<li key={module.id}>
										<span className={css.check}>
											<IoMdCheckmark />
										</span>
										{module.title}
									</li>
								))}
							</ul>
						</Col>

						<Col xs={12} lg={12} className={css.cardCol}>
							<h2 className={css.contenth2}>Contenido del curso</h2>
							<h3 className={css.contenth3}>12 horas 15 videos</h3>
							<ul>
								{modules.map(module => (
									<li key={module.id} className="row">
										<span className="col-lg-2 col-xs-1">
											<MdOutlineComputer />
										</span>
										<p className="col-lg-6 col-xs-3">{module.title}</p>
										<span className="col-lg-2 col-xs-2">
											<FaVideo />
										</span>
									</li>
								))}
							</ul>
						</Col>

						<Col
							xs={12}
							lg={12}
							className={`d-flex flex-column align-items-center ${css.who}`}
						>
							<h2 className={`text-center ${css.contenth2}`}>
								Quiénes pueden tomar este curso
							</h2>
							<ul className={css.listWho}>
								<li>Todo aquel que quiera empezar su camino en programación</li>
								<li>Estudiantes que quieran reforzar sus conocimientos</li>
								<li>
									Cualquiera que busque una carrera en inteligencia artificial,
									ciencia de datos o desarrollo web
								</li>
							</ul>
						</Col>

						<Col className="d-flex justify-content-center mb-5">
							<Button variant="dark" className="css.btnSale">
								Suscríbete
							</Button>
						</Col>
					</Row>
				);
			})}
			<Row>
				<Col xs={12} md={6} lg={8} className="mx-auto">
					<h3 className={`text-center ${css.carouselh3}`}>
						Esto es lo que nuestros alumnos nos cuentan
					</h3>
					<CarouselSU />
					<h3 className={`text-center ${css.carouselh3b}`}>
						Únete a Skillup Hoy y Empieza a Aprender!!
					</h3>
				</Col>
			</Row>
		</Container>
	);
};

export default Catalogue;
