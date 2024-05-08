import { z } from 'zod';

export const formSchema = z
  .object({
    name: z.string().min(1, 'O nome não pode estar vazio'),
    email: z.string().email('Forneça um e-mail válido'),
    password: z
      .string()
      .min(8, 'A senha deve ter pelo menos 8 caracteres')
      .regex(/(?=.*?[A-Z])/, 'É necessário pelo menos uma letra maiúscula')
      .regex(/(?=.*?[a-z])/, 'É necessário pelo menos uma letra minúscula')
      .regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número')
      .regex(
        /(?=.*?[#?!@$%^&*-])/,
        'É necessário pelo menos um caractere especial'
      ),
    confirmPassword: z.string().min(1, 'A confirmação da senha é obrigatória'),
    bio: z.string().min(1, 'Campo obrigatorio'),
    contact: z.string().min(1, 'Campo obrigatorio'),
    course_module: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });
