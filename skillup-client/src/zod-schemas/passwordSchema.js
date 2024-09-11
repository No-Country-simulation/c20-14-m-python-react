import { z } from "zod";

export const passwordSchema = z
	.string()
	.min(6, { message: "Mínimo 6 caracteres" })
	.max(50, { message: "Máximo 50 caracteres" });
