import { z } from "zod";
import { REGEX } from "../regex/regex.js";

export const passwordSchema = z
	.string()
	.min(8, { message: "Mínimo 8 caracteres" })
	.max(50, { message: "Máximo 50 caracteres" })
	.refine(password => REGEX.specialCharacters.test(password), {
		message: "Mín 1 carácter especial"
	})
	.refine(password => REGEX.numbers.test(password), {
		message: "Mín 1 número"
	})
	.refine(password => REGEX.mayus.test(password), {
		message: "Mín 1 mayuscula"
	})
	.refine(password => REGEX.minus.test(password), {
		message: "Mín 1 minuscula"
	});
