import css from "./css.module.css";
import Err from "./Err/Err";
import Spinner from "./Spinner/Spinner";
import { joinClass } from "./utils/joinClass";
import { BTN_KIND } from "./kinds";

export default function Btn(props) {
	const {
		isVisible = true,
		kind,
		className,
		loading,
		err,
		children,
		...extraProps
	} = props;

	const finalClass = joinClass([
		css.btn,
		err && css.btn__err,
		BTN_KIND[kind ?? "primary"],
		className
	]);

	if (!isVisible) return null;
	return (
		<button {...extraProps} className={finalClass}>
			{!loading && children}
			<Spinner loading={loading} />
			<Err err={err} />
		</button>
	);
}
