import Btn from "./Btn/Btn.jsx";
import css from "./css.module.css";
import InputPassword from "./InputPassword/InputPassword.jsx";
import InputText from "./InputText/InputText.jsx";
import LinkTo from "./LinkTo/LinkTo.jsx";

export default function SignUp() {
	return (
		<div className={css.signup}>
			<form className={css.form} onSubmit={e => e.preventDefault()}>
				<InputText
					className={css.email}
					title="Correo"
					placeholder="ejemplo@gmail.com"
				/>
				<InputPassword
					className={css.password}
					title="Contraseña"
					placeholder=""
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
