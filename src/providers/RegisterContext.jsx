import { createContext } from 'react';
import { api } from '../services/api';
import moduleOptions from '../constants/moduleOptions';
import { successToast, errorToast } from '../utils/toasts';

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const userRegister = async (formRegisterData) => {
    try {
      await api.post('/users', formRegisterData);
      successToast();
    } catch (error) {
      console.error('Registration error:', error.response || error);
      errorToast();
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
      console.log('cadastro realizado');
    } else {
      console.log('Module not found for:', newUser.course_module);
    }
  };

  return (
    <RegisterContext.Provider value={{ userCreate }}>
      {children}
    </RegisterContext.Provider>
  );
};
