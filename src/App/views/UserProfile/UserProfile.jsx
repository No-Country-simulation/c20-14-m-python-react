import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./module.css";
import { Form, Button, Col, Row, Container, Card } from "react-bootstrap";
import logoUsuario from "./img/usuario.png";
import { useAuth } from "../../../auth/useAuth.js";
import { getUserService } from "./service/getUserService.js";
import { updateUserService } from "./service/updateUserService.js";

export default function UserProfile() {
	const [profileImage, setProfileImage] = useState(null);
	const [previewImage, setPreviewImage] = useState(logoUsuario);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [previewName, setPreviewName] = useState("");
	const [email, setEmail] = useState("");
	const [personalId, setPersonalId] = useState("");
	const [password, setPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [newPasswordVisible, setNewPasswordVisible] = useState(false);
	const [linkedin, setLinkedin] = useState("");
	const [discord, setDiscord] = useState("");
	const [gitHub, setGitHub] = useState("");
	const [feedback, setFeedback] = useState({ message: "", type: "" });
	const fileInputRef = useRef(null);
	const [submit, setSubmit] = useState(false);
	const { user_id } = useAuth(auth => auth.getInfoToken());
	const token = useAuth(auth => auth.token);

	useEffect(() => {
		const controller = new AbortController();

		getUserService(controller.signal, user_id, token)
			.then(user => {
				setEmail(user?.email);
				setFirstName(user?.first_name);
				setLastName(user?.last_name);
				setProfileImage(user?.profile_picture);
				setGitHub(user?.social_networks_links.github);
				setDiscord(user?.social_networks_links.discord);
				setLinkedin(user?.social_networks_links.linkedin);
			})
			.catch(err => console.log(err));
	}, [user_id, token]);

	useEffect(() => {
		if (!user_id || !submit) return;

		const controller = new AbortController();

		updateUserService(controller.signal, user_id, token, {
			first_name: firstName,
			last_name: lastName,
			email: email,
			social_networks_links: {
				github: gitHub,
				discord,
				linkedin
			}
		})
			.then(() => {})
			.catch(err => console.log(err))
			.finally(() => setSubmit(false));
	}, [submit]);

	const handleSubmit = e => {
		e.preventDefault();
		setSubmit(true);
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

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};
	const toggleNewPasswordVisibility = () => {
		setNewPasswordVisible(!newPasswordVisible);
	};

	if (!user_id) return null;

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
										src="/perfil.png"
										alt="Foto de perfil"
										className="img-thumbnail mb-3 align-self-center"
										onClick={handleImageClick}
									/>
									<p className="text-center fw-bold">{previewName}</p>
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
											value={firstName}
											placeholder="Ejemplo: Juan"
											onChange={e => setFirstName(e.target.value)}
											className="custom-form-control"
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
										/>
									</Col>
								</Form.Group>

								<Form.Group className="mb-3" controlId="email">
									<Form.Label className="fw-bold p-0">Email</Form.Label>
									<Col sm="8" className="d-flex align-items-center">
										<span className="input-group-text" id="basic-addon1">
											<svg
												alt="email"
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-envelope-at"
												viewBox="0 0 16 16"
											>
												<path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
												<path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
											</svg>
										</span>
										<Form.Control
											className="custom-form-control1"
											type="email"
											name="email"
											value={email}
											placeholder="ejemplo@gmail.com"
											onChange={e => setEmail(e.target.value)}
										/>
									</Col>
								</Form.Group>
								<hr />
								<Form.Label as="h5">Cambio de contraseña</Form.Label>
								<Form.Group className="mb-3" controlId="password">
									<Form.Label className="fw-bold p-0">Password</Form.Label>
									<Col sm="8" className="d-flex align-items-center">
										<Form.Control
											type="password"
											name="password"
											value={password}
											placeholder="Introducir contraseña"
											onChange={e => setPassword(e.target.value)}
											className="custom-form-control2"
										/>
										<span
											className="input-group2-text"
											id="basic-addon1"
											onClick={togglePasswordVisibility}
										>
											{passwordVisible ? (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													className="bi bi-eye-slash"
													viewBox="0 0 16 16"
												>
													<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
													<path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
													<path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
												</svg>
											) : (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													class="bi bi-eye-fill"
													viewBox="0 0 16 16"
												>
													<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
													<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
												</svg>
											)}
										</span>
									</Col>
								</Form.Group>
								<Form.Group className="mb-3" controlId="newPassword">
									<Form.Label className="fw-bold p-0">
										Nueva password
									</Form.Label>
									<Col sm="8" className="d-flex align-items-center">
										<Form.Control
											type="password"
											name="newPassword"
											value={newPassword}
											placeholder="Introducir nueva contraseña"
											onChange={e => setNewPassword(e.target.value)}
											className="custom-form-control2"
										/>
										<span
											className="input-group2-text"
											id="basic-addon1"
											onClick={toggleNewPasswordVisibility}
										>
											{newPasswordVisible ? (
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
											) : (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													class="bi bi-eye-fill"
													viewBox="0 0 16 16"
												>
													<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
													<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
												</svg>
											)}
										</span>
									</Col>
								</Form.Group>

								<Form.Group className="mb-3" controlId="confirmNewPassword">
									<Form.Label className="fw-bold p-0">
										Repetir nueva password
									</Form.Label>
									<Col sm="8" className="d-flex align-items-center">
										<Form.Control
											type="password"
											name="confirmPassword"
											value={confirmNewPassword}
											placeholder="Introducir nueva contraseña de nuevo"
											className="custom-form-control2"
										/>
										<span
											className="input-group2-text"
											id="basic-addon1"
											onClick={toggleNewPasswordVisibility}
										>
											{newPasswordVisible ? (
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
											) : (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													class="bi bi-eye-fill"
													viewBox="0 0 16 16"
												>
													<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
													<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
												</svg>
											)}
										</span>
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
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-discord"
												viewBox="0 0 16 16"
											>
												<path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
											</svg>
										</span>
										<Form.Control
											type="text"
											name="discord"
											value={discord}
											placeholder="juanperez"
											onChange={e => setDiscord(e.target.value)}
											className="custom-form-control1"
										/>
									</Col>
								</Form.Group>

								<Form.Group className="mb-3" controlId="linkedin">
									<Form.Label className="fw-bold p-0">Linkedin</Form.Label>
									<Col sm="8" className="d-flex align-items-center">
										<span className="input-group-text" id="basic-addon1">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-linkedin"
												viewBox="0 0 16 16"
											>
												<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
											</svg>
										</span>
										<Form.Control
											type="url"
											name="linkedin"
											value={linkedin}
											placeholder="https://www.linkedin.com/in/ejemplo"
											onChange={e => setLinkedin(e.target.value)}
											className="custom-form-control1"
										/>
									</Col>
								</Form.Group>
								<Form.Group className="mb-3" controlId="gitHub">
									<Form.Label className="fw-bold p-0">GitHub</Form.Label>
									<Col sm="8" className="d-flex align-items-center">
										<span className="input-group-text" id="basic-addon1">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-github"
												viewBox="0 0 16 16"
											>
												<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
											</svg>
										</span>
										<Form.Control
											type="url"
											name="gitHub"
											value={gitHub}
											placeholder="https://github.com/ejemplo"
											onChange={e => setGitHub(e.target.value)}
											className="custom-form-control1"
										/>
									</Col>
								</Form.Group>
							</Col>
						</Row>
						<div className="d-flex justify-content-center">
							<Button type="submit" variant="dark" className="mt-4">
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
