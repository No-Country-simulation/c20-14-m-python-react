import { Container, Row, Col, Card } from "react-bootstrap";
import "../About/About.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Leonel from "./img/Leonel.jpg";
import Tamara from "./img/Tamara.jpg";
import VeronicaF from "./img/VeronicaF.jpg";
import Fernando from "./img/Fernando.jpg";
import Jair from "./img/Jair.jpg";
import Nahuel from "./img/Nahuel.jpg";
import Edwin from "./img/Edwin.jpg";
import VeroB from "./img/VeroB.jpg";
import David from "./img/David.jpg";
const TeamImg = {
	Leonel,
	Tamara,
	VeronicaF,
	Fernando,
	Jair,
	Nahuel,
	Edwin,
	VeroB,
	David
};

const About = () => {
	const teamMembers = [
		{
			name: "David dos Santos",
			role: "QA Testing",
			img: TeamImg.David,
			linkedin: "https://www.linkedin.com/in/david-dos-santos/",
			github: "https://github.com/DdSDavid"
		},
		{
			name: "Edwin Ortiz",
			role: "Desarrollador Front-end",
			img: TeamImg.Edwin,
			linkedin: "https://www.linkedin.com/in/edarcode/",
			github: "https://github.com/edarcode"
		},
		{
			name: "Fernando Cedeño",
			role: "Desarrollador Back-end",
			img: TeamImg.Fernando,
			linkedin: "https://www.linkedin.com/in/fernando-cede%C3%B1o-650597179/",
			github: "https://github.com/FoxtrotCN"
		},
		{
			name: "Jair Rosales Medina",
			role: "Desarrollador Back-end",
			img: TeamImg.Jair,
			linkedin: "https://www.linkedin.com/in/jair-rosales-medina-b09998115/",
			github: "https://github.com/JairRoMe"
		},
		{
			name: "Leonel Giralde",
			role: "Desarrollador Front-end",
			img: TeamImg.Leonel,
			linkedin: "https://www.linkedin.com/in/leonel-giralde-3ba71619b/",
			github: "https://github.com/LeonelGiralde?tab=repositories"
		},
		{
			name: "Nahuel Marcilli",
			role: "Desarrollador Back-end",
			img: TeamImg.Nahuel,
			linkedin: "https://www.linkedin.com/in/nahuel-marcilli-6018b71a2/",
			github: "https://github.com/marili-mn"
		},
		{
			name: "Tamara Contreras",
			role: "Desarrolladora Front-end",
			img: TeamImg.Tamara,
			linkedin: "https://linkedin.com/in/tamaracontreras",
			github: "https://github.com/tamaracontreras"
		},
		{
			name: "Veronica Bravo",
			role: "Desarrolladora Front-end",
			img: TeamImg.VeroB,
			linkedin: "http://www.linkedin.com/in/veronica-bravo-rrhh-dw",
			github: "https://github.com/VeronicaBravoDevs"
		},
		{
			name: "Veronica Falconi",
			role: "Desarrollador Front-end",
			img: TeamImg.VeronicaF,
			linkedin: "http://LinkedIn.com/in/veronicamarcelafalconi",
			github: "https://github.com/veronicamfalconi"
		}
	];
	return (
		<section id="about" className="about-section">
			<Container fluid>
				{/* Encabezado */}
				<Row>
					<Col></Col>
				</Row>

				{/* Contenedor de textos y tarjetas alineados a la izquierda */}
				<Row className="justify-content-center">
					<Col xs={12} md={8} lg={6}>
						<h2 className="SkillUp">¿Qué es Skillup?</h2>
						<p>
							<strong>Skill Up </strong>es una plataforma educativa en línea que
							ofrece cursos personalizados para que los estudiantes adquieran
							nuevas habilidades a su ritmo. Nuestra misión es proporcionar una
							experiencia de aprendizaje accesible y enriquecedora, con
							funciones como foros, toma de notas y certificación, para que cada
							usuario controle su propio progreso.
						</p>

						{/* Nuestra Visión */}
						<div className="text-start">
							<h2 className="Vision">Nuestra Visión</h2>
							<p>
								Queremos ser la herramienta preferida para aprender, mejorar
								habilidades o explorar nuevas áreas de interés, creando una
								comunidad de aprendizaje dinámica y accesible desde cualquier
								lugar.
							</p>
						</div>

						<h2 className="Equipo">Nuestro Equipo</h2>
						<p>
							Skillup es posible gracias a un equipo multidisciplinario dedicado
							a mejorar la plataforma y brindar una experiencia excepcional al
							usuario.
						</p>
						<ul>
							<li>
								<strong>Desarrollo Front-end:</strong> Crea interfaces
								intuitivas y atractivas, optimizadas para todos los
								dispositivos. <br />
								<i>Tecnologías:</i> HTML5, JavaScript, Zustand, React, React
								Hook Form, Vite, Bootstrap, Emailjs, CSS Modules.
							</li>

							<li>
								<strong>Desarrollo Back-end:</strong> Gestiona la base de datos,
								lógica de negocio, autenticación e integración con pasarelas de
								pago, asegurando un funcionamiento seguro y fluido. <br />
								<i>Tecnologías:</i> Python, Django, PostgreSQL, Postman,
								SendGrid.
							</li>
							<li>
								<strong>Control de Calidad (QA):</strong> Garantiza la calidad
								mediante pruebas rigurosas de todas las funciones y
								características de la plataforma. <br />
								<i>Tecnologías:</i> Pruebas manuales, JIRA, Postman.
							</li>
						</ul>
						<br />
						{/* Cards de los colaboradores */}
						<div className="team-cards">
							<Row>
								{teamMembers.map((member, index) => (
									<Col
										key={index}
										xs={12}
										sm={6}
										md={6}
										lg={4}
										className="mb-4"
									>
										<Card>
											<Card.Img
												variant="top"
												src={member.img}
												alt={member.name}
												className="memberPic"
											/>
											<Card.Body>
												<Card.Title>{member.name}</Card.Title>
												<Card.Text>{member.role}</Card.Text>
											</Card.Body>
											<div className="social-icons">
												{member.linkedin && (
													<a
														href={member.linkedin}
														target="_blank"
														rel="noopener noreferrer"
													>
														<FaLinkedin
															size={24}
															style={{ marginRight: "10px", color: "#0077b5" }}
														/>
													</a>
												)}
												{member.github && (
													<a
														href={member.github}
														target="_blank"
														rel="noopener noreferrer"
													>
														<FaGithub size={24} style={{ color: "#000" }} />
													</a>
												)}
											</div>
										</Card>
									</Col>
								))}
							</Row>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default About;
