import { createContext, useState } from 'react';

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const teste = 'teste';
  return (
    <AccountContext.Provider value={{ teste }}>
      {children}
    </AccountContext.Provider>
  );
};
