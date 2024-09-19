import { API } from "../../../../consts/api.js";

export const getUserService = async (signal, id, token) => {
	const res = await fetch(API.user + id + "/profile/", {
		signal,
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: token
		}
	});

	if (!res.ok) throw new Error("Err al obtener perfil del usuario");

	return await res.json();
};
