import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./Contacto.css";
import { useLocation } from "react-router-dom";
function Contacto() {
	// Obtén la ubicación actual
	const { pathname } = useLocation();
	const form = useRef();
	const [formData, setFormData] = useState({
		user_name: "",
		user_email: "",
		message: ""
	});
	const [messageSent, setMessageSent] = useState(false);

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_r5s5pfq",
				"template_qh862aw",
				form.current,
				"M8J3OP9qgND_k82ZQ"
			)
			.then(
				result => {
					console.log("Correo enviado:", result.text);
					// Limpiar los campos del formulario
					setFormData({
						user_name: "",
						user_email: "",
						message: ""
					});

					// Mostrar mensaje de confirmación
					setMessageSent(true);

					// Ocultar el mensaje después de 2 segundos
					setTimeout(() => setMessageSent(false), 2000);
				},
				error => {
					console.log("Error al enviar el correo:", error.text);
				}
			);
	};

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	// Determina el título de acuerdo a la ruta
	const title =
		pathname === "/estudiantes" ? "Preguntas sobre el Curso:" : "Contacto";

	return (
		<section id="Contact" className="contact-section">
			<Row>
				<Col>
					<h2 className="text-center mb-4">{title}</h2>
				</Col>
			</Row>
			<Container fluid className="contact-container">
				<Form ref={form} onSubmit={sendEmail}>
					<Form.Group controlId="formName" className="mb-3">
						<Form.Label>Nombre</Form.Label>
						<Form.Control
							type="text"
							placeholder="Ingresa tu nombre o apodo"
							name="user_name"
							value={formData.user_name}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group controlId="formEmail" className="mb-3">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="nombre@ejemplo.com"
							name="user_email"
							value={formData.user_email}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group controlId="formMessage" className="mb-3">
						<Form.Label>Mensaje</Form.Label>
						<Form.Control
							as="textarea"
							rows={5}
							placeholder="Escribe tu mensaje aquí"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<div className="d-flex justify-content-end">
						<Button type="submit" variant="primary" className="w-30 btn-black">
							Enviar
						</Button>
					</div>
				</Form>
				{messageSent && (
					<p className="text-success mt-3">¡Mensaje enviado con éxito!</p>
				)}
			</Container>
		</section>
	);
}

export default Contacto;
