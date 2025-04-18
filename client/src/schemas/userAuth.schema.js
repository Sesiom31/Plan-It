import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  username: Yup.string()
    .required("El nombre de usuario es requerido")
    .min(3, "El nombre de usuario debe tener al menos 4 caracteres")
    .max(50, "Elnombre de usuario no debe tener más de 50 caracteres"),
  email: Yup.string()
    .required("El email es requerido")
    .email("El email no es válido"),
  password: Yup.string()
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("Confirmar contraseña es requerido"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("El email es requerido")
    .email("El email no es válido"),
  password: Yup.string()
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});
