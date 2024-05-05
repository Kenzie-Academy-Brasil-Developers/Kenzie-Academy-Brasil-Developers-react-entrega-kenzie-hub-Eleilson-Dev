import { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <LoginContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </LoginContext.Provider>
  );
};
