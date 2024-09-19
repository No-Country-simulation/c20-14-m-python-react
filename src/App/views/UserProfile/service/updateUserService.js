import { API } from "../../../../consts/api.js";

export const updateUserService = async (signal, id, token, user) => {
	const res = await fetch(API.user + id + "/profile/", {
		signal,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: token
		},
		body: JSON.stringify({ id, ...user })
	});

	if (!res.ok) throw new Error("Err al actualizar perfil de usuario");

	return await res.json();
};
