import { API } from "../../../../consts/api.js";

export const geCourseByIdService = async (signal, id) => {
	const res = await fetch(API.course + id + "/", {
		signal,
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});

	if (!res.ok) throw new Error("Err al obtener curso");

	return await res.json();
};
