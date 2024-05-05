import { createContext, useEffect, useState } from 'react';

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const userRegister = (newUser) => {
    console.log(newUser);
    console.log('cadastro realizado');
  };

  return (
    <RegisterContext.Provider value={{ formData, setFormData, userRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};
