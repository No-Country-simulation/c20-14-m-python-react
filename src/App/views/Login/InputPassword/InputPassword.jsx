import { forwardRef } from "react";
import css from "./css.module.css";
import Input from "./Input/Input";
import { joinClass } from "./utils/joinClass";

export default forwardRef(function InputPassword(props, ref) {
	const { className, title, err, ...extraProps } = props;

	const finalClassName = joinClass([css.label, className]);

	return (
		<label className={finalClassName}>
			{title && <span className={css.title}>{title}</span>}
			<Input {...extraProps} ref={ref} err={err} />
			{err && <span className={css.err}>{err}</span>}
		</label>
	);
});
