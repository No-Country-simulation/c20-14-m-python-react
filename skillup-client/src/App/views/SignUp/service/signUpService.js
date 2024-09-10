import { USERS } from "../../../../database/users.js";

export const signUpService = async (signal, credentials) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const user = USERS.find(user => user.email === credentials.email);
			if (user) {
				reject(new Error("Email no disponible")); // Manejo del error con reject
			} else {
				resolve({ msg: "Usuario registrado correctamente" }); // Resolviendo la promesa
			}
		}, 2000);
	});
};
