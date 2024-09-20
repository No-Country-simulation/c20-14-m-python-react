import { useForm } from "react-hook-form";
import Btn from "../../../components/buttons/Btn/Btn.jsx";
import InputNumber from "./InputNumber/InputNumber.jsx";
import InputText from "./InputText/InputText.jsx";
import css from "./css.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentsSchema } from "./paymentsSchema.js";

export default function Payments() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ resolver: zodResolver(paymentsSchema) });

	const onSubmit = data => {
		console.log(data);
	};
	return (
		<div className={css.payments} onSubmit={handleSubmit(onSubmit)}>
			<form className={css.form}>
				<InputNumber
					className={css.card}
					title="Número de tarjeta"
					placeholder="1234 5678 9123 4567"
					{...register("numberCard")}
				/>
				<InputText title="Fecha de vencimiento" placeholder="MM/AA" />
				<InputNumber className={css.cvc} title="CVC/CVV" placeholder="CVC" />
				<Btn className={css.btn} disabled={Object.keys(errors).length}>
					Pagar
				</Btn>
			</form>
		</div>
	);
}
