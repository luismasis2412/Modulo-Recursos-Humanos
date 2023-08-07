import {z} from 'zod';

export const registerSchema = z.object({
    name: z.string({
        required_error:'Se requiere nombre'
    }),
    lastname: z.string({
        required_error:'Se requiern apellidos'
    }),
    title: z.string({
        required_error:'Se requiere un título'
    }),
    email: z.string({
        required_error: "Se requiere un Email"
    }).email({
        message: 'Correo electrónico invalido'
    }),
    role: z.string({
        required_error: "Un rol es requerido"
    }),
    password: z.string({
        required_error: "Se requiere una contraseña",
    })
    .min(6, {
    message: "La contraseña debe contar con 6 caracteres mínimo",
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error:"Se requiere un correo electrónico"
    }).email({
        message: "Email Invalido",
    }),
    password: z.string({
        required_error: "Se requiere una contraseña",
    })
    .min(6, {
    message: "La contraseña debe contar con 6 caracteres mínimo",
    })
})

