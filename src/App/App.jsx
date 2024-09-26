import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import { useInitApp } from "./hooks/useInitApp.js";

export default function App() {
	const { loading } = useInitApp();

	if (loading) return null;
	return (
		<>
			<NavBar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
