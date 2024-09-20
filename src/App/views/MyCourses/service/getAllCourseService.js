import { API } from "../../../../consts/api.js";

export const getAllCourseService = async signal => {
	const res = await fetch(API.allCourse, {
		signal,
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});

	if (!res.ok) throw new Error("Err al obtener cursos");

	return await res.json();
};
