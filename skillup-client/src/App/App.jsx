import { Outlet } from "react-router-dom";

export default function App() {
	return (
		<>
			<header>Navbar</header>
			<main>
				<Outlet />
			</main>
			<footer>Footer</footer>
		</>
	);
}
