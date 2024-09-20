import { z } from "zod";

export const paymentsSchema = z
	.object({
		numberCard: z
			.string() // Acepta como string inicialmente
			.min(15, {
				message: "El número de la tarjeta debe tener al menos 15 dígitos"
			}) // Valida la longitud mínima
			.max(16, {
				message: "El número de la tarjeta debe tener como máximo 16 dígitos"
			}) // Valida la longitud máxima (si aplica)
			.transform(val => Number(val)) // Transforma la cadena en número
			.refine(val => !isNaN(val), { message: "Debe ser un número válido" }) // Asegura que es un número válido
	})
	.strict();
