import Btn from "./Btn/Btn.jsx";
import css from "./css.module.css";
import InputPassword from "./InputPassword/InputPassword.jsx";
import InputText from "./InputText/InputText.jsx";
import LinkTo from "./LinkTo/LinkTo.jsx";

export default function SignUp() {
	return (
		<div className={css.signup}>
			<form className={css.form} onSubmit={e => e.preventDefault()}>
				<InputText className={css.email} title="Email" placeholder="Value" />
				<InputPassword
					className={css.password}
					title="Password"
					placeholder="Value"
				/>
				<LinkTo to="/">Forgot password?</LinkTo>
				<Btn>Sign up</Btn>
				<span className={css.login}>
					Already have an account? <LinkTo to="/">Login</LinkTo>
				</span>
			</form>
		</div>
	);
}
