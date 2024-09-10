import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./module.css";
import {
	Form,
	Button,
	Col,
	Row,
	Container,
	Card,
	Alert
} from "react-bootstrap";
import logoUsuario from "./img/usuario.png";
import logoEmail from "./img/email.png";
import InputText from "./InputText/InputText";

export default function UserProfile() {
	const [profileImage, setProfileImage] = useState(null);
	const [previewImage, setPreviewImage] = useState(logoUsuario);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [personalId, setPersonalId] = useState("");
	const [password, setPassword] = useState("");
	const [linkedin, setLinkedin] = useState("");
	const [discord, setDiscord] = useState("");
	const [gitHub, setGitHub] = useState("");
	const [feedback, setFeedback] = useState({ message: "", type: "" });
	const fileInputRef = useRef(null);

	const handleSubmit = e => {
		e.preventDefault();
		if (profileImage) {
			const validImageTypes = ["image/jpeg", "image/png"];
			if (!validImageTypes.includes(profileImage.type)) {
				setFeedback({
					message: "Por favor, sube una imagen válida (jpg, png, gif)",
					type: "error"
				});
				return;
			}
		}
		const formData = new formData();
		formData.append("firstName", firstName);
		formData.append("email", email);
		if (profileImage) {
			formData.append("profileImage", profileImage);
		}
		//set loading
		fetch("https://jsonplaceholder.typicode.com/users", {
			method: "POST",
			body: formData
		})
			.then(response => response.json())
			.then(data => {
				if (data.sucess) {
					setFeedback({ message: "Perfil actualizado", type: "sucess" });
					if (profileImage) {
						setPreviewImage(URL, createObjectURL(profileImage));
					}
				} else {
					setFeedback({ message: "Error: ${data.message}", type: "error" });
				}
			})
			.catch(error => {
				console.error("Error", error);
				setFeedback({
					message: "Error al actualizar el perfil",
					type: "error"
				});
			});
	};
	const handleImageChange = e => {
		const file = e.target.files[0];
		setProfileImage(file);
		if (file) {
			setPreviewImage(URL.createObjectURL(file));
		}
	};
	const handleImageClick = () => {
		fileInputRef.current.click();
	};
	return (
		<Container className="mt-4 p-0 h-auto">
			<Card className="w-100  w-md-75 w-lg-50 mb-4 mx-auto">
				<Card.Header as="h4" className="text-center">
					Información personal
				</Card.Header>
				<Card.Body>
					<Form onSubmit={handleSubmit}>
						<Row className="mb-3">
							<Col md={4} className="d-flex flex-column align-items-center">
								<Form.Group controlId="profileImage">
									<Form.Control
										type="file"
										accept="image/*"
										className="custom-imgProfile"
										onChange={handleImageChange}
										ref={fileInputRef}
									/>
								</Form.Group>
								<div className="flex-fill">
									<img
										id="profilePic"
										src={previewImage}
										alt="Foto de perfil"
										className="img-thumbnail mb-3 align-self-center"
										onClick={handleImageClick}
									/>
								</div>
								<p className="text-center">
									{firstName} {lastName}
								</p>
							</Col>
							<Col md={8} className="border-start">
								<Form.Label as="h5">Datos Personales</Form.Label>
								<Form.Group className="mb-3" controlId="firstname">
									<Form.Label className="fw-bold p-0">Nombre</Form.Label>
									<Col sm="8">
										<Form.Control
											type="text"
											name="firstName"
											value={firstName}
											placeholder="Ejemplo: Juan"
											onChange={e => setFirstName(e.target.value)}
											className="custom-form-control"
											required
										/>
									</Col>
								</Form.Group>
								<Form.Group className="mb-3" controlId="lastName">
									<Form.Label className="fw-bold p-0">Apellido</Form.Label>
									<Col sm="8">
										<Form.Control
											type="text"
											name="lastName"
											value={lastName}
											placeholder="Ejemplo: Perez"
											onChange={e => setLastName(e.target.value)}
											className="custom-form-control"
											required
										/>
									</Col>
								</Form.Group>
								<Form.Group className="mb-3" controlId="personalId">
									<Form.Label className="fw-bold p-0">Número de DNI</Form.Label>
									<Col sm="8">
										<Form.Control
											type="text"
											name="personalId"
											value={personalId}
											placeholder="Ejemplo: 32526874"
											pattern="[0-9]*"
											maxLength="8"
											onChange={e => setPersonalId(e.target.value)}
											className="custom-form-control"
											required
										/>
									</Col>
								</Form.Group>

								<Form.Group className="mb-3" controlId="email">
									<Form.Label className="fw-bold p-0">Email</Form.Label>
									<Col sm="8" className="input-wrapper d-flex align-items-center">
										<img src={logoEmail} alt="email" className="iconInput" />
										<Form.Control
											className="custom-form-control"
											type="email"
											name="email"
											value={email}
											placeholder="ejemplo@gmail.com"
											onChange={e => setEmail(e.target.value)}
											required
										/>
									</Col>
								</Form.Group>
								<hr />
								<Form.Label as="h5">Cambio de contraseña</Form.Label>
								<Form.Group className="mb-3" controlId="password">
									<Form.Label className="fw-bold p-0">Password</Form.Label>
									<Col sm="8">
										<Form.Control
											type="password"
											name="password"
											value={password}
											placeholder="Introducir contraseña"
											onChange={e => setPassword(e.target.value)}
											className="custom-form-control"
											required
										/>
									</Col>
								</Form.Group>
								<Form.Group className="mb-3" controlId="password">
									<Form.Label className="fw-bold p-0">Nueva password</Form.Label>
									<Col sm="8">
										<Form.Control
											type="password"
											name="password"
											value={password}
											placeholder="Introducir contraseña"
											onChange={e => setPassword(e.target.value)}
											className="custom-form-control"
											required
										/>
									</Col>
								</Form.Group>

								<Form.Group className="mb-3" controlId="password">
									<Form.Label className="fw-bold p-0">
										Repetir nueva password
									</Form.Label>
									<Col sm="8">
										<Form.Control
											type="password"
											name="password"
											value={password}
											placeholder="Introducir nueva contraseña de nuevo"
											className="custom-form-control"
											required
										/>
									</Col>
								</Form.Group>
								<hr />
								<Form.Label as="h5">Redes sociales</Form.Label>
								<Form.Group className="mb-3" controlId="discord">
									<Form.Label className="fw-bold p-0">
										Usuario de Discord
									</Form.Label>
									<Col sm="8">
										<Form.Control
											type="url"
											name="discord"
											value={discord}
											placeholder="juanperez"
											onChange={e => setDiscord(e.target.value)}
											className="custom-form-control"
											required
										/>
									</Col>
								</Form.Group>

								<Form.Group className="mb-3" controlId="gitHub">
									<Form.Label className="fw-bold p-0">Linkedin</Form.Label>
									<Col sm="8">
										<Form.Control
											type="url"
											name="gitHub"
											value={gitHub}
											placeholder="https://www.linkedin.com/in/ejemplo"
											onChange={e => setLinkedin(e.target.value)}
											className="custom-form-control"
											required
										/>
									</Col>
								</Form.Group>

								<Form.Group className="mb-3" controlId="linkedin">
									<Form.Label className="fw-bold p-0">GitHub</Form.Label>
									<Col sm="8">
										<Form.Control
											type="url"
											name="linkedin"
											value={linkedin}
											placeholder="https://github.com/ejemplo"
											onChange={e => setGitHub(e.target.value)}
											className="custom-form-control"
											required
										/>
									</Col>
								</Form.Group>
							</Col>
						</Row>
						<div className="d-flex justify-content-center">
							<Button variant="dark" className="mt-4">
								Guardar Cambios
							</Button>
						</div>
					</Form>
				</Card.Body>
			</Card>
			{/* <InputText placeholder='hola' loading={false} async={true} success={true}></InputText> */}
		</Container>
	);
}
