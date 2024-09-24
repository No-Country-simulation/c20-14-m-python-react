import { z } from "zod";
import { REGEX } from "../regex/regex";

export const nameSchema = z
	.string()
	.min(1)
	.max(50)
	.refine(name => !REGEX.specialCharacters.test(name), {
		message: "No special characters"
	})
	.refine(name => !REGEX.numbers.test(name), {
		message: "No numbers"
	});
