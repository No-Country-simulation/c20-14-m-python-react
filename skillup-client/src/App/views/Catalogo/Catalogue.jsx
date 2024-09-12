import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaPlayCircle, FaCloudDownloadAlt, FaCode } from "react-icons/fa";
import { BiBarChartAlt } from "react-icons/bi";
import { MdOutlineTextSnippet, MdOutlineComputer } from "react-icons/md";
import { PiCertificateDuotone } from "react-icons/pi";
import { IoIosInfinite } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
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
			<Form className="mb-4">
				<Form.Group controlId="search">
					<Form.Control
						type="text"
						placeholder="Buscar nombre del curso..."
						value={searchTerm}
						onChange={handleSearchChange}
					/>
				</Form.Group>
			</Form>

			{filteredData.map((data, index) => (
				<Row key={index} className={css.courseRow}>
					<Row>
						<Col xs={12} md={6} lg={4}>
							<h1 className={css.courseh1}>{data.course}</h1>
							<div className={css.courseDescription}>
								<p>{data.description}</p>
								<p>{data.calificacion}</p>
								<p>{data.instructor}</p>
							</div>
							<div className="d-flex justify-content-center">
								<Button className={css.btnSale}>Comprar</Button>
							</div>
						</Col>
					</Row>
					<Row className="m-0">
						<Col xs={12} md={6} lg={4} className={css.cardCol}>
							<h2 className={css.detailh2}>DETALLE DEL CURSO</h2>
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
										<MdOutlineTextSnippet />
									</span>
									{data.lecciones}
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
										<PiCertificateDuotone />
									</span>
									{data.certificado}
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
						<Col xs={12} className="d-flex flex-column align-items-center">
							<h2 className={`text-center ${css.contenth2}`}>
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
							EN ESTE CURSO APRENDERAS
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
					<Col xs={12} className={css.cardCol}>
						<h2 className={css.contenth2}>CONTENIDO DEL CURSO</h2>
						<h3 className={css.contenth3}>12 horas 15 videos</h3>
						<ul>
							<li>
								<span>
									<MdOutlineComputer />
								</span>
								{data.clase1}
							</li>
							<li>
								<span>
									<MdOutlineComputer />
								</span>
								{data.clase2}
							</li>
							<li>
								<span>
									<MdOutlineComputer />
								</span>
								{data.clase3}
							</li>
							<li>
								<span>
									<MdOutlineComputer />
								</span>
								{data.clase4}
							</li>
							<li>
								<span>
									<MdOutlineComputer />
								</span>
								{data.clase5}
							</li>
							<li>
								<span>
									<MdOutlineComputer />
								</span>
								{data.clase6}
							</li>
							<li>
								<span>
									<MdOutlineComputer />
								</span>
								{data.clase7}
							</li>
						</ul>
					</Col>
					<Col xs={12} className="d-flex flex-column align-items-center">
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
					<Col xs={12} className="d-flex">
						<Button className={css.btnSale}>Suscribirse</Button>
					</Col>
					<hr />
				</Row>
			))}
			<Row>
				<Col xs={12} md={6} lg={8} className="mx-auto p-4">
					<h3 className="text-center mb-5">
						Esto es lo que nuestros alumnos nos cuentan
					</h3>
					<CarouselSU />
				</Col>
			</Row>
		</Container>
	);
};

export default Catalogue;
