import { forwardRef } from "react";
import css from "./css.module.css";
import Input from "./Input/Input";
import { joinClass } from "./utils/joinClass";

export default forwardRef(function InputText(props, ref) {
	const {
		className,
		title,
		async,
		err,
		loading,
		success,
		kind,
		...extraProps
	} = props;

	const finalClass = joinClass([css.label, className]);

	return (
		<label className={finalClass}>
			{title && <span className={css.title}>{title}</span>}

			<Input
				{...extraProps}
				ref={ref}
				async={async}
				err={err}
				loading={loading}
				success={success}
				kind={kind}
			/>

			{err && <span className={css.err}>{err}</span>}
		</label>
	);
});
