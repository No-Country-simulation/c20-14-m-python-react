import { Navigate } from "react-router-dom";
import { LOGIN } from "./children.jsx";
import { useAuth } from "../../auth/useAuth.js";

export default function RouteProtector({ children }) {
	const token = useAuth(auth => auth.token);

	if (!token) return <Navigate to={LOGIN.to} replace />;

	return children;
}
