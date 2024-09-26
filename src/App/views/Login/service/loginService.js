import { API } from "../../../../consts/api.js";

export const loginService = async (signal, credentials) => {
	const res = await fetch(API.login, {
		signal,
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(credentials)
	});

	if (!res.ok) throw new Error("Err login");

	return await res.json();
};
