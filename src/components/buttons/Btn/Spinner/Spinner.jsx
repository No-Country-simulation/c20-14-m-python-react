import css from "./css.module.css";

export default function Spinner({ loading }) {
	if (!loading) return null;
	return <div className={css.spinner}></div>;
}
