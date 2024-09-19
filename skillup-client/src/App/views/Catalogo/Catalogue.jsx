import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaPlayCircle, FaCloudDownloadAlt, FaCode } from "react-icons/fa";
import { BiBarChartAlt } from "react-icons/bi";
import { MdOutlineComputer } from "react-icons/md";
import { IoIosInfinite } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import CatalogueData from "./CatalogueData";
import css from "./css.module.css";
import CarouselSU from "./CarouselSU";
import { useState } from "react";

const Catalogue = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearchChange = e => {
		setSearchTerm(e.target.value);
	};

	const filteredData = CatalogueData.filter(data =>
		String(data.id).toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<Container fluid className="cardContainer">
			<Row className="mx-auto w-75 text-center">
				<h1>
					Todos los cursos en un solo lugar, que te gustaría aprender hoy?
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

			{filteredData.map((data, index) => (
				<Row key={index} className={css.courseRow}>
					<Row className={`align-items-center   ${css.courseRowInside}`}>
						<Col lg={8}>
							<h2 className={css.courseh1}>{data.course}</h2>
							<div className={css.courseDescription}>
								<p>{data.description}</p>
								<p>{data.calificacion}</p>
								<p>
									<span className={css.courseTeacher}>INSTRUCTOR:</span>
									{data.instructor}
								</p>
							</div>
							<div className="d-flex justify-content-center ">
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
									{data.nivel}
								</li>
								<li>
									<span>
										<FaPlayCircle />
									</span>
									{data.duracion}
								</li>
								<li>
									<span>
										<FaCloudDownloadAlt />
									</span>
									{data.descarga}
								</li>
								<li>
									<span>
										<FaCode />
									</span>
									{data.ejercicios}
								</li>
								<li>
									<span>
										<IoIosInfinite />
									</span>
									{data.acceso}
								</li>
								<li>
									<span>
										<GoClock />
									</span>
									{data.horario}
								</li>
							</ul>
						</Col>
					</Row>
					<Row>
						<Col xs={12} className="d-flex flex-column align-items-center mt-5">
							<h2 className={`text-center mt-5${css.contenth2} ${css.whoh2}`}>
								Contenido validado por expertos
							</h2>
							<p className={css.contentParagraph}>
								Curso validado por expertos de la industria con las últimas
								actualizaciones
							</p>
							<div className={css.video}>
								<video controls src={data.video} poster={data.image}></video>
							</div>
						</Col>
					</Row>
					<Col xs={12} className={css.cardCol}>
						<h2 className={`${css.detailh2} ${css.largeText}`}>
							En este curso aprenderás
						</h2>
						<ul>
							<li>
								<span className={css.check}>
									<IoMdCheckmark />
								</span>
								{data.learn1}
							</li>
							<li>
								<span className={css.check}>
									<IoMdCheckmark />
								</span>
								{data.learn2}
							</li>
							<li>
								<span className={css.check}>
									<IoMdCheckmark />
								</span>
								{data.learn3}
							</li>
							<li>
								<span className={css.check}>
									<IoMdCheckmark />
								</span>
								{data.learn4}
							</li>
							<li>
								<span className={css.check}>
									<IoMdCheckmark />
								</span>
								{data.learn5}
							</li>
							<li>
								<span className={css.check}>
									<IoMdCheckmark />
								</span>
								{data.learn6}
							</li>
						</ul>
					</Col>
					<Col xs={12} lg={12} className={css.cardCol}>
						<h2 className={css.contenth2}>Contenido del curso</h2>
						<h3 className={css.contenth3}>12 horas 15 videos</h3>
						<ul>
							<li className="row">
								<span className="col-lg-2 col-xs-1">
									<MdOutlineComputer />
								</span>
								<p className="col-lg-6 col-xs-3">{data.clase1}</p>

								<span className="col-lg-2 col-xs-2">
									<FaVideo />
								</span>
							</li>
							<li className="row">
								<span className="col-lg-2">
									<MdOutlineComputer />
								</span>
								<p className="col-lg-6">{data.clase2}</p>
								<span className="col-lg-2">
									<FaVideo />
								</span>
							</li>
							<li className="row">
								<span className="col-lg-2">
									<MdOutlineComputer />
								</span>
								<p className="col-lg-6">{data.clase3}</p>

								<span className="col-lg-2">
									<FaVideo />
								</span>
							</li>
							<li className="row">
								<span className="col-lg-2">
									<MdOutlineComputer />
								</span>
								<p className="col-lg-6">{data.clase4}</p>

								<span className="col-lg-2">
									<FaVideo />
								</span>
							</li>
							<li className="row">
								<span className="col-lg-2">
									<MdOutlineComputer />
								</span>
								<p className="col-lg-6">{data.clase5}</p>

								<span className="col-lg-2">
									<FaVideo />
								</span>
							</li>
							<li className="row">
								<span className="col-lg-2">
									<MdOutlineComputer />
								</span>
								<p className="col-lg-6">{data.clase6}</p>

								<span className="col-lg-2">
									<FaVideo />
								</span>
							</li>
							<li className="row">
								<span className="col-lg-2">
									<MdOutlineComputer />
								</span>
								<p className="col-lg-6">{data.clase7}</p>

								<span className="col-lg-2">
									<FaVideo />
								</span>
							</li>
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
					{/* <hr /> */}
				</Row>
			))}
			<Row>
				<Col xs={12} md={6} lg={8} className="mx-auto">
					<h3 className={`text-center ${css.carouselh3}`}>
						Esto es lo que nuestros alumnos nos cuentan
					</h3>
					<CarouselSU />
					<h3 className={`text-center ${css.carouselh3b}`}>
						Unete a Skillup Hoy y Empieza a Aprender!!
					</h3>
				</Col>
			</Row>
		</Container>
	);
};

export default Catalogue;
