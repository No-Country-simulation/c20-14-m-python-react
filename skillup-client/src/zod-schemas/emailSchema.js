import { z } from "zod";

export const emailSchema = z.string().email({ message: "ejemplo@gmail.com" });
