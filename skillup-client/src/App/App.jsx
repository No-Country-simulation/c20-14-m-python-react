import css from "./css.module.css";
import { Outlet } from "react-router-dom";

export default function App() {
	return (
		<div className={css.app}>
			<header>Navbar</header>
			<main>
				<Outlet />
			</main>
			<footer>Footer</footer>
		</div>
	);
}
