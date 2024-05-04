import { createContext, useEffect, useState } from 'react';

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <AccountContext.Provider value={{ formData, setFormData }}>
      {children}
    </AccountContext.Provider>
  );
};
