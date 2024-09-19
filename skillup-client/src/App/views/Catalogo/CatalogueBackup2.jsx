import { Container, Row, Col, Button, Form } from "react-bootstrap";
import {
	FaPlayCircle,
	FaCloudDownloadAlt,
	FaCode,
	FaVideo
} from "react-icons/fa";
import { BiBarChartAlt } from "react-icons/bi";
import { MdOutlineComputer } from "react-icons/md";
import { IoIosInfinite } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import CarouselSU from "./CarouselSU";
import css from "./css.module.css";
import { useState, useEffect } from "react";

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
					console.error("Error fetching data");
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	const handleSearchChange = e => {
		setSearchTerm(e.target.value);
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
						type="text"
						placeholder="Busca tu curso..."
						value={searchTerm}
						onChange={handleSearchChange}
					/>
				</Form.Group>
			</Form>

			{filteredCourses.map((course, index) => {
				// Extracting course data
				const { title, description, cover_image, modules } = course;
				// Dummy data for `calificacion`, `instructor`, and other fields
				// Replace with actual logic if you have it
				const calificacion = "4.5"; // This should be obtained from your data source
				const instructor = "Instructor Name"; // This should be obtained from your data source
				const nivel = "Intermedio"; // This should be obtained from your data source
				const duracion = "10 horas"; // This should be obtained from your data source
				const descarga = "Sí"; // This should be obtained from your data source
				const ejercicios = "10"; // This should be obtained from your data source
				const acceso = "Vitalicio"; // This should be obtained from your data source
				const horario = "Flexible"; // This should be obtained from your data source

				return (
					<Row key={index} className={css.courseRow}>
						<Row className={`align-items-center ${css.courseRowInside}`}>
							<Col lg={8}>
								<h2 className={css.courseh1}>{title}</h2>
								<div className={css.courseDescription}>
									<p>{description}</p>
									<p>{calificacion}</p>
									<p>
										<span className={css.courseTeacher}>INSTRUCTOR:</span>
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
										{descarga}
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
										{acceso}
									</li>
									<li>
										<span>
											<GoClock />
										</span>
										{horario}
									</li>
								</ul>
							</Col>
						</Row>
						<Row>
							<Col
								xs={12}
								className="d-flex flex-column align-items-center mt-5"
							>
								<h2
									className={`text-center mt-5 ${css.contenth2} ${css.whoh2}`}
								>
									Contenido validado por expertos
								</h2>
								<p className={css.contentParagraph}>
									Curso validado por expertos de la industria con las últimas
									actualizaciones
								</p>
								<div className={css.video}>
									<video
										controls
										src={modules[0]?.video_url}
										poster={cover_image}
									></video>
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
											<a
												href={module.video_url}
												target="_blank"
												rel="noopener noreferrer"
											>
												<FaVideo />
											</a>
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
							<h2 className={`text-center ${css.contenth2} ${css.whoh2}`}>
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
							<Button className={`${css.btnSale} btn-black`}>Suscríbete</Button>
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
