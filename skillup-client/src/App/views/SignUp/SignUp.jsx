import Btn from "./Btn/Btn.jsx";
import css from "./css.module.css";
import InputPassword from "./InputPassword/InputPassword.jsx";
import InputText from "./InputText/InputText.jsx";
import LinkTo from "./LinkTo/LinkTo.jsx";
import { useForm } from "react-hook-form";

export default function SignUp() {
	const { register, handleSubmit } = useForm();
	const onSubmit = data => console.log(data);
	return (
		<div className={css.signup}>
			<form className={css.form} onSubmit={handleSubmit(onSubmit)}>
				<InputText
					className={css.email}
					title="Correo"
					placeholder="ejemplo@gmail.com"
					{...register("email")}
				/>
				<InputPassword
					className={css.password}
					title="Contraseña"
					placeholder=""
					{...register("password")}
				/>
				<LinkTo to="/">¿Olvidaste tu contraseña?</LinkTo>
				<Btn>Registrarse</Btn>
				<span className={css.login}>
					¿Ya tiene una cuenta? <LinkTo to="/">Login</LinkTo>
				</span>
			</form>
		</div>
	);
}
