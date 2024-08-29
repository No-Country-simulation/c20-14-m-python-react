/* eslint-disable prettier/prettier */
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";
import NavBar from "../components/Nav/NavBar.jsx";

export default function App() {
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
