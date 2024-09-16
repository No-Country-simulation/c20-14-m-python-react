import { API } from "../../../../consts/api.js";

export const signUpService = async (signal, credentials) => {
	const res = await fetch(API.singUp, {
		signal,
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(credentials)
	});

	if (!res.ok) throw new Error("Err register");

	return await res.json();
};
