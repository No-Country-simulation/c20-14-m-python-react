import { NavLink } from "react-router-dom";
import css from "./css.module.css";

export default function LinkTo(props) {
	const { to, children, icon, target, rel, onClick, ...extraProps } = props;
	return (
		<NavLink
			{...extraProps}
			to={(icon && icon.url) || to || ""}
			target={target}
			rel={rel}
			className={({ isActive }) => (isActive ? css.active : css.link)}
			onClick={onClick}
		>
			{icon && <img className={css.icon} src={icon.logo} alt={icon.name} />}
			{children}
		</NavLink>
	);
}
