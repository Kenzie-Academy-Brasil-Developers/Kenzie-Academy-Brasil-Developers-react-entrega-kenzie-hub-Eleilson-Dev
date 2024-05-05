import { createContext, useEffect, useState } from 'react';

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <RegisterContext.Provider value={{ formData, setFormData }}>
      {children}
    </RegisterContext.Provider>
  );
};
