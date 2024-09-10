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
						"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiZWwgYmljaG8iLCJlbWFpbCI6ImNyN0BnbWFpbC5jb20iLCJpYXQiOjE2MTYyMzkwMjJ9.-OvS_eU_bB8jNYQRQYpswmot39Reel_qtI8nsAq12mA"
				});
			}
		}, 2000);
	});
};
