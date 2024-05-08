import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '../schemas/formRegister.schema';

export const useCustomForm = () => {
  const { control, register, handleSubmit, reset, watch, formState } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      course_module: 'Primeiro Módulo',
    },
  });

  return { control, register, handleSubmit, reset, watch, formState };
};
