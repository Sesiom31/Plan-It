import z from "zod";

export const registerSchema = z.object({
  username: z.string().min(4, {
    message: "El nombre de usuario debe tener al menos 4 caracteres",
  }),
  email: z.string().email({ message: "El email no es válido" }),
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "El email no es válido" }),
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});
