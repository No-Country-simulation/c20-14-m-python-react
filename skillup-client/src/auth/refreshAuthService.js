import { API } from "../consts/api.js";

export const refreshAuthService = async (signal, token) => {
	const res = await fetch(API.refreshToken, {
		signal,
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ token })
	});

	if (!res.ok) throw new Error("Err refresh token");

	return await res.json();
};
