<<<<<<< Updated upstream
import React, { useState, useRef } from "react";
=======
import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
import InputText from "./InputText/InputText";
import { FaEye, FaEyeSlash } from "react-icons/fa";
=======
import logoEmail from "./img/Email.png";
import discord from "./img/discord.png";
import linkedin from "./img/linkedin.png";
import gitHub from "./img/github.png";
>>>>>>> Stashed changes

export default function UserProfile() {
	const [profileImage, setProfileImage] = useState(null);
	const [previewImage, setPreviewImage] = useState(logoUsuario);
<<<<<<< Updated upstream
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [previewName, setPreviewName] = useState("Linus Benedict");
	const [email, setEmail] = useState("");
	const [personalId, setPersonalId] = useState("");
	const [password, setPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [linkedin, setLinkedin] = useState("");
	const [discord, setDiscord] = useState("");
	const [gitHub, setGitHub] = useState("");
=======
>>>>>>> Stashed changes
	const [feedback, setFeedback] = useState({ message: "", type: "" });
	const fileInputRef = useRef(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setValue,
		reset
	} = useForm({
		defaultValues: {
			email: "",
			password: ""
		}
	});

<<<<<<< Updated upstream
	const handleSubmit = e => {
		e.preventDefault();
		console.log("Contraseña actual", password);
		console.log("Nueva contraseña", newPassword);
		console.log("Confirmar nueva contraseña", confirmNewPassword);
=======
	const firstName = watch("firstName");
	const lastName = watch("lastName");
	const newPassword = watch("newPassword");
	const confirmNewPassword = watch("confirmNewPassword");
	const isButtonDisabled =
		!firstName ||
		!lastName ||
		(newPassword && newPassword !== confirmNewPassword);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(data => {
				setValue("email", data.email);
				setValue("password", data.password);
			})
			.catch(error => {
				console.error("Error al obtener los datos", error);
			});
	}, []);

	const onSubmit = handleSubmit(data => {
		console.log(data);
>>>>>>> Stashed changes
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
		const formData = new FormData();
		if (profileImage) {
			formData.append("profileImage", profileImage);
		}
		formData.append("firstName", data.firstName);
		formData.append("lastName", data.lastName);
		formData.append("newPassword", data.newPassword);

		if (data.discord) formData.append("discord", data.discord);
		if (data.linkedin) formData.append("linkedin", data.linkedin);
		if (data.gitHub) formData.append("gitHub", data.gitHub);

		//set loading
		//enviar datos al servidor
		fetch("https://jsonplaceholder.typicode.com/users", {
			method: "POST",
			body: formData
		})
			.then(response => response.json())
			.then(data => {
				if (data.sucess) {
					setFeedback({ message: "Perfil actualizado", type: "sucess" });
					if (profileImage) {
						setPreviewImage(URL.createObjectURL(profileImage));
					}
				} else {
					setFeedback({ message: `Error: ${data.message}`, type: "error" });
				}
			})
			.catch(error => {
				console.error("Error", error);
				setFeedback({
					message: "Error al actualizar el perfil",
					type: "error"
				});
			});
	});
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

<<<<<<< Updated upstream
	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

=======
>>>>>>> Stashed changes
	return (
		<Container className="mt-4 p-0 h-auto">
			<Card className="w-100  w-md-75 w-lg-50 mb-4 mx-auto">
				<Card.Header as="h4" className="text-center">
					Información personal
				</Card.Header>
				<Card.Body>
					<Form onSubmit={onSubmit}>
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
									<h3 className="text-center fw-bold">
										{watch("firstName")} {watch("lastName")}
									</h3>
								</div>
							</Col>
							<Col md={8} className="border-start">
								<Form.Label as="h5">Datos Personales</Form.Label>
								<Form.Group className="mb-3" controlId="firstname">
									<Form.Label className="fw-bold p-0">Nombre</Form.Label>
									<Col sm="8">
										<Form.Control
											type="text"
											name="firstName"
											placeholder="Ejemplo: Juan"
											className="custom-form-control"
											{...register("firstName", {
												required: {
													value: true,
													message: "El nombre es requerido"
												},
												minLength: {
													value: 2,
													message: "El nombre debe como mínimo 2 carácteres"
												}
											})}
										/>
										{errors.firstName && (
											<span className="span">{errors.firstName.message}</span>
										)}
									</Col>
								</Form.Group>
								<Form.Group className="mb-3" controlId="lastName">
									<Form.Label className="fw-bold p-0">Apellido</Form.Label>
									<Col sm="8">
										<Form.Control
											type="text"
											name="lastName"
											placeholder="Ejemplo: Perez"
											className="custom-form-control"
											{...register("lastName", {
												required: {
													value: true,
													message: "El apellido es requerido"
												},
												minLength: {
													value: 2,
													message: "El apellido debe como mínimo 2 carácteres"
												}
											})}
										/>
										{errors.lastName && (
											<span className="span">{errors.lastName.message}</span>
										)}
									</Col>
								</Form.Group>

								<Form.Group className="mb-3" controlId="email">
									<Form.Label className="fw-bold p-0">Email</Form.Label>
									<Col sm="8" className="d-flex align-items-center">
										<span className="input-group-text" id="basic-addon1">
											<img
												src={logoEmail}
												alt="email"
												width="16"
												height="16"
												className="custom-icon"
											/>
										</span>
										<Form.Control
											className="custom-form-control1"
											type="email"
											name="email"
											readOnly
											placeholder="ejemplo@gmail.com"
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
											placeholder="Introducir contraseña"
											className="custom-form-control"
											{...register("password", {
												minLength: {
													value: 6,
													message: "La contraseña debe ser mayor a 6 caracteres"
												}
											})}
										/>
										{errors.password && (
											<span className="span">{errors.password.message}</span>
										)}
									</Col>
								</Form.Group>
								<Form.Group className="mb-3" controlId="newPassword">
									<Form.Label className="fw-bold p-0">
										Nueva password
									</Form.Label>
									<Col sm="8">
										<Form.Control
											type="password"
											name="newPassword"
											placeholder="Introducir nueva contraseña"
<<<<<<< Updated upstream
											onChange={e => setPassword(e.target.value)}
											className="custom-form-control2"
											required
										/>
										<span className="input-group2-text" id="basic-addon1">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-eye-slash"
												viewBox="0 0 16 16"
											>
												<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
												<path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
												<path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
											</svg>
										</span>
=======
											className="custom-form-control"
											{...register("newPassword", {
												minLength: {
													value: 6,
													message: "La contraseña debe ser mayor a 6 caracteres"
												}
											})}
										/>
										{errors.newPassword && (
											<span className="span">{errors.newPassword.message}</span>
										)}
>>>>>>> Stashed changes
									</Col>
								</Form.Group>

								<Form.Group className="mb-3" controlId="confirmNewPassword">
									<Form.Label className="fw-bold p-0">
										Repetir nueva password
									</Form.Label>
									<Col sm="8">
										<Form.Control
											type="password"
											name="confirmNewPassword"
											placeholder="Introducir nueva contraseña de nuevo"
											className="custom-form-control"
											{...register("confirmNewPassword", {
												required: value => {
													if (newPassword) {
														if (value.length < 6) {
															return "La contraseña debe ser mayor a 6 caracteres";
														}
														if (value !== watch(newPassword)) {
															return "Las contraseñas no coinciden";
														}
													}
													return true;
												}
											})}
										/>
<<<<<<< Updated upstream
										<span className="input-group2-text" id="basic-addon1">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-eye-slash"
												viewBox="0 0 16 16"
											>
												<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
												<path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
												<path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
											</svg>
										</span>
=======
										{errors.confirmNewPassword && (
											<span className="span">
												{errors.confirmNewPassword.message}
											</span>
										)}
>>>>>>> Stashed changes
									</Col>
								</Form.Group>
								<hr />
								<Form.Label as="h5">Redes sociales</Form.Label>
								<Form.Group className="mb-3" controlId="discord">
									<Form.Label className="fw-bold p-0">
										Usuario de Discord
									</Form.Label>
									<Col sm="8" className="d-flex align-items-center">
										<span className="input-group-text" id="basic-addon1">
											<img
												src={discord}
												alt="discord"
												width="16"
												height="16"
												className="custom-icon"
											/>
										</span>
										<Form.Control
											type="url"
											name="discord"
											placeholder="juanperez"
											className="custom-form-control1"
										/>
									</Col>
								</Form.Group>

								<Form.Group className="mb-3" controlId="linkedin">
									<Form.Label className="fw-bold p-0">Linkedin</Form.Label>
									<Col sm="8" className="d-flex align-items-center">
										<span className="input-group-text" id="basic-addon1">
											<img
												src={linkedin}
												alt="linkedin"
												width="16"
												height="16"
												className="custom-icon"
											/>
										</span>
										<Form.Control
											type="url"
											name="gitHub"
											placeholder="https://www.linkedin.com/in/ejemplo"
											className="custom-form-control1"
										/>
									</Col>
								</Form.Group>
								<Form.Group className="mb-3" controlId="gitHub">
									<Form.Label className="fw-bold p-0">GitHub</Form.Label>
									<Col sm="8" className="d-flex align-items-center">
										<span className="input-group-text" id="basic-addon1">
											<img
												src={gitHub}
												alt="github"
												width="16"
												height="16"
												className="custom-icon"
											/>
										</span>
										<Form.Control
											type="url"
											name="linkedin"
											placeholder="https://github.com/ejemplo"
											className="custom-form-control1"
										/>
									</Col>
								</Form.Group>
							</Col>
						</Row>
						<div className="d-flex justify-content-center">
							<Button
								type="submit"
								variant="dark"
								className="mt-4"
								disabled={isButtonDisabled}
							>
								Guardar Cambios
							</Button>
						</div>
					</Form>
				</Card.Body>
			</Card>
		</Container>
	);
}
