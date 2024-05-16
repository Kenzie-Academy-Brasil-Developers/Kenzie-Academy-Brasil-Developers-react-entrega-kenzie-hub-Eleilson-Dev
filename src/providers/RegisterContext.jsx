import { createContext, useState } from 'react';
import { api } from '../services/api';
import { successToast, errorToast } from '../utils/toasts';
import { useMutation } from '@tanstack/react-query';
import moduleOptions from '../constants/moduleOptions';

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleFormChange = () => {
    setIsDisabled(false);
  };

  const userRegister = useMutation({
    mutationFn: async (formRegisterData) => {
      return await api.post('/users', formRegisterData);
    },
    onSuccess: () => {
      successToast('Conta criada com sucesso!');
    },
    onError: () => {
      errorToast('Ops! Algo deu errado');
    },
  });

  const userCreate = (newUser) => {
    const data = moduleOptions.find(
      (option) => option.course_module === newUser.course_module
    );

    if (data) {
      const { course_module, description } = data;

      const updatedFormData = {
        ...newUser,
        course_module: `${course_module} ${description}`,
      };

      userRegister.mutate(updatedFormData);
    } else {
      console.log('Module not found for:', newUser.course_module);
    }
  };

  return (
    <RegisterContext.Provider
      value={{ userCreate, handleFormChange, isDisabled }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
