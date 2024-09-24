import { forwardRef } from "react";
import css from "./css.module.css";
import { KINDS } from "./kinds";
import { joinClass } from "./utils/joinClass";

export default forwardRef(function InputNumber(props, ref) {
	const { className, title, kind, ...extraProps } = props;

	const finalClass = joinClass([css.label, className]);
	const finalClassInput = joinClass([
		css.input,
		kind ? KINDS[kind] : KINDS["primary"]
	]);

	return (
		<label className={finalClass}>
			{title && <span className={css.title}>{title}</span>}
			<input
				ref={ref}
				placeholder="Núm"
				{...extraProps}
				type="number"
				className={finalClassInput}
			/>
		</label>
	);
});
