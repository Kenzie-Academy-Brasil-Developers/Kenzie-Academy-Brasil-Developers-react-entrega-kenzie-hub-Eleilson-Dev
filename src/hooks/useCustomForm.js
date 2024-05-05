import { useForm } from 'react-hook-form';

export const useCustomForm = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      course_module: 'Primeiro Módulo',
    },
  });

  return { control, register, handleSubmit, reset, errors };
};
