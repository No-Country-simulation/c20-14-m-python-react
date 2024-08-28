import css from "./css.module.css";
import Err from "./icons/Err";
import Loading from "./icons/Loading";
import Success from "./icons/Success";

export default function State(props) {
	const { async, err, loading, success } = props;

	const isVisible = async && (err || loading || success);

	if (!isVisible) return null;
	if (err) return <Err className={css.err} />;
	if (loading) return <Loading className={css.loading} />;

	return <Success className={css.success} />;
}
