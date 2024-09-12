export const refreshAuthService = token => {
	return new Promise((resolve, reject) =>
		setTimeout(() => {
			if (token === "token malo") return reject(new Error("Token invalido"));
			return resolve(token);
		}, 2000)
	);
};
