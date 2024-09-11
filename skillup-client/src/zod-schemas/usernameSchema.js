import { z } from "zod";
import { REGEX } from "../regex/regex";

export const usernameSchema = z
	.string()
	.min(3, { message: "Mín 3 carácteres" })
	.max(15, { message: "Máx 15 carácteres" })
	.refine(name => !REGEX.specialCharacters.test(name), {
		message: "No carácteres especiales"
	})
	.refine(name => !REGEX.space.test(name), {
		message: "No espacios"
	});
