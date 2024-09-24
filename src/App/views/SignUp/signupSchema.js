import { z } from "zod";
import { emailSchema } from "../../../zod-schemas/emailSchema.js";
import { passwordSchema } from "../../../zod-schemas/passwordSchema.js";

export const signupSchema = z.object({
	email: emailSchema,
	password: passwordSchema
});
