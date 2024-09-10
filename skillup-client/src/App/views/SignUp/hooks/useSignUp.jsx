import { useEffect, useState } from "react";
import { signUpService } from "../service/signUpService.js";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
	const navegate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [err, setErr] = useState(false);
	const [credentials, setCredentials] = useState(null);

	useEffect(() => {
		if (!credentials) return;
		const controller = new AbortController();
		setLoading(true);
		setErr(false);
		signUpService(controller.signal, credentials)
			.then(() => navegate("/"))
			.catch(() => setErr(true))
			.finally(() => setLoading(false));
	}, [credentials, navegate]);

	const signUp = credentials => setCredentials({ ...credentials });

	return { loading, err, signUp };
};