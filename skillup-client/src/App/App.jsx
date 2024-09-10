import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import { useAuth } from "../auth/useAuth.js";

export default function App() {
	useAuth(auth => auth.refreshToken)();

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
