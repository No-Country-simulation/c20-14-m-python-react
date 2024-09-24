export const formatDate = date => {
	const format = {
		day: "numeric",
		month: "long",
		year: "numeric"
	};

	return new Date(date).toLocaleString("es-ES", format);
};
