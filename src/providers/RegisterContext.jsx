import { createContext, useState } from 'react';
import { api } from '../services/api';
import moduleOptions from '../constants/moduleOptions';
import { successToast, errorToast } from '../utils/toasts';

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleFormChange = () => {
    setIsDisabled(false);
  };

  const userRegister = async (formRegisterData) => {
    try {
      await api.post('/users', formRegisterData);
      successToast('Conta criada com sucesso!');
    } catch (error) {
      errorToast('Ops! Algo deu errado');
    }
  };

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

      userRegister(updatedFormData);
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
