import { USERS } from "../../../../database/users.js";

export const loginService = async (signal, credentials) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const user = USERS.find(
				user =>
					user.email === credentials.email &&
					user.password === credentials.password
			);
			if (!user) {
				reject(new Error("Login incorrecto"));
			} else {
				resolve({
					msg: "Usuario logueado correctamente",
					token:
						"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiZWwgYmljaG8iLCJlbWFpbCI6ImNyN0BnbWFpbC5jb20iLCJpYXQiOjE3MjU5OTYzNTl9.lszhMet23iMyCq0a8rDDT3GQQT3YA54rN1Jfn_4yS0o"
				});
			}
		}, 2000);
	});
};
