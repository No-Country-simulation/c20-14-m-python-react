import { useState } from "react";
import css from "./css.module.css";
import EyeIcon from "../EyeIcon/EyeIcon.jsx";
import { joinClass } from "../utils/joinClass.js";
import { forwardRef } from "react";

export default forwardRef(function Input(props, ref) {
	const { err, ...extraProps } = props;
	const [isVisiblePass, setIsVisiblePass] = useState(false);

	const finalClassInput = joinClass([css.input, err && css.input__err]);

	const hVisiblePass = () => setIsVisiblePass(!isVisiblePass);
	return (
		<label className={css.label}>
			<input
				placeholder="password"
				{...extraProps}
				ref={ref}
				type={!isVisiblePass ? "password" : "text"}
				className={finalClassInput}
			></input>
			<EyeIcon isVisiblePass={isVisiblePass} hVisiblePass={hVisiblePass} />
		</label>
	);
});
