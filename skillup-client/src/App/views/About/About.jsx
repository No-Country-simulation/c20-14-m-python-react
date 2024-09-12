import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
	const teamMembers = [
		{
			name: "Colaborador 1",
			role: "Desarrollador Front-end",
			img: "ruta/a/imagen1.jpg"
		},
		{
			name: "Colaborador 2",
			role: "Desarrollador Back-end",
			img: "ruta/a/imagen2.jpg"
		},
		{ name: "Colaborador 3", role: "QA Tester", img: "ruta/a/imagen3.jpg" }
		// ... agrega los otros 8 colaboradores
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
						<h2>¿Qué es Skillup?</h2>
						<p>
							<strong>Skillup </strong>es una plataforma educativa en línea que
							ofrece cursos personalizados para que los estudiantes adquieran
							nuevas habilidades a su ritmo. Nuestra misión es proporcionar una
							experiencia de aprendizaje accesible y enriquecedora, con
							funciones como foros, toma de notas y certificación, para que cada
							usuario controle su propio progreso.
						</p>

						{/* Nuestra Visión */}
						<div className="text-start">
							<h2>Nuestra Visión</h2>
							<p>
								Queremos ser la herramienta preferida para aprender, mejorar
								habilidades o explorar nuevas áreas de interés, creando una
								comunidad de aprendizaje dinámica y accesible desde cualquier
								lugar.
							</p>
						</div>

						<h2>Nuestro Equipo</h2>
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
											/>
											<Card.Body>
												<Card.Title>{member.name}</Card.Title>
												<Card.Text>{member.role}</Card.Text>
											</Card.Body>
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
