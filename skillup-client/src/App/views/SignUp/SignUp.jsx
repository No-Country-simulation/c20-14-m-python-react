import Btn from "./Btn/Btn.jsx";
import css from "./css.module.css";
import InputPassword from "./InputPassword/InputPassword.jsx";
import InputText from "./InputText/InputText.jsx";
import LinkTo from "./LinkTo/LinkTo.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "./signupSchema.js";
import { useSignUp } from "./hooks/useSignUp.jsx";
import { LOGIN } from "../../router/children.jsx";

export default function SignUp() {
	const { signUp, loading, err } = useSignUp();
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ resolver: zodResolver(signupSchema) });

	const onSubmit = credentials => {
		signUp(credentials);
	};

	return (
		<div className={css.signup}>
			<form className={css.form} onSubmit={handleSubmit(onSubmit)}>
				<InputText
					className={css.email}
					title="Correo"
					placeholder="ejemplo@gmail.com"
					{...register("email")}
					err={errors?.email?.message}
				/>
				<InputPassword
					className={css.password}
					title="Contraseña"
					placeholder=""
					{...register("password")}
					err={errors?.password?.message}
				/>
				<LinkTo to="/">¿Olvidaste tu contraseña?</LinkTo>
				<Btn
					loading={loading}
					err={err}
					disabled={Object.keys(errors).length || loading}
				>
					Registrarse
				</Btn>
				<span className={css.login}>
					¿Ya tiene una cuenta? <LinkTo to={LOGIN.to}>Login</LinkTo>
				</span>
			</form>
		</div>
	);
}
