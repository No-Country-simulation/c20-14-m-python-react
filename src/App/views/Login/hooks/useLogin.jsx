import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MY_COURSES } from "../../../router/children.jsx";
import { loginService } from "../service/loginService.js";
import { useAuth } from "../../../../auth/useAuth.js";

export const useLogin = () => {
	const navegate = useNavigate();
	const updateToken = useAuth(auth => auth.updateToken);
	const [loading, setLoading] = useState(false);
	const [err, setErr] = useState(false);
	const [credentials, setCredentials] = useState(null);

	useEffect(() => {
		if (!credentials) return;
		const controller = new AbortController();
		setLoading(true);
		setErr(false);
		loginService(controller.signal, credentials)
			.then(({ token }) => {
				updateToken(token);

				navegate(MY_COURSES.to);

			})
			.catch(() => setErr(true))
			.finally(() => setLoading(false));
		return () => controller.abort();
	}, [credentials, navegate, updateToken]);

	const login = credentials => setCredentials({ ...credentials });

	return { loading, err, login };
};
