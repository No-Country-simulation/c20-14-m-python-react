import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";

export default function App() {
	return (
		<>
			<header>Navbar</header>
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
