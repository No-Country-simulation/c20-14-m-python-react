import css from "./css.module.css";
import ClosedEye from "./icons/ClosedEye";
import OpenEye from "./icons/OpenEye";

export default function EyeIcon(props) {
	const { isVisiblePass, hVisiblePass } = props;
	if (!isVisiblePass)
		return <ClosedEye className={css.eye} onClick={hVisiblePass} />;
	return <OpenEye className={css.eye} onClick={hVisiblePass} />;
}
