import { createContext, useEffect, useState } from 'react';
import moduleOptions from '../constants/moduleOptions';

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [formData, setFormData] = useState({ name: '', course_module: '' });

  const userRegister = (newUser) => {
    const data = moduleOptions.find((option) => {
      if (option.course_module === newUser.course_module) {
        return option;
      }
    });

    if (data) {
      const { course_module, description } = data;

      setFormData(() => {
        return {
          ...newUser,
          course_module: `${course_module} ${description}`,
        };
      });
    }

    console.log('cadastro realizado');
  };

  return (
    <RegisterContext.Provider value={{ formData, setFormData, userRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};
