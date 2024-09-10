import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { STUDENTS } from "../../../router/children.jsx";
import { loginService } from "../service/loginService.js";

export const useLogin = () => {
	const navegate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [err, setErr] = useState(false);
	const [credentials, setCredentials] = useState(null);

	useEffect(() => {
		if (!credentials) return;
		const controller = new AbortController();
		setLoading(true);
		setErr(false);
		loginService(controller.signal, credentials)
			.then(() => navegate(STUDENTS.path))
			.catch(() => setErr(true))
			.finally(() => setLoading(false));
		return () => controller.abort();
	}, [credentials, navegate]);

	const login = credentials => setCredentials({ ...credentials });

	return { loading, err, login };
};
