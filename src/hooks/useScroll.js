import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScroll(y) {
	const { pathname } = useLocation(); // Detecta cuando cambia la ruta

	useEffect(() => {
		if (pathname !== "/") return;
		window.scrollTo(0, y); // Mueve el scroll al inicio
	}, [pathname, y]); // Se ejecuta cada vez que cambia la ruta
}
