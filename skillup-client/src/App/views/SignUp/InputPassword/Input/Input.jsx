import { useState } from "react";
import css from "./css.module.css";
import EyeIcon from "../EyeIcon/EyeIcon.jsx";
import { joinClass } from "../utils/joinClass.js";

export default function Input(props) {
	const { err, ...extraProps } = props;
	const [isVisiblePass, setIsVisiblePass] = useState(false);

	const finalClassInput = joinClass([css.input, err && css.input__err]);

	const hVisiblePass = () => setIsVisiblePass(!isVisiblePass);
	return (
		<label className={css.label}>
			<input
				placeholder="password"
				{...extraProps}
				type={!isVisiblePass ? "password" : "text"}
				className={finalClassInput}
			></input>
			<EyeIcon isVisiblePass={isVisiblePass} hVisiblePass={hVisiblePass} />
		</label>
	);
}
