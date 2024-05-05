import { useContext } from 'react';
import { LoginContext } from '../providers/LoginContext';

export const useLoginContext = () => {
  return useContext(LoginContext);
};
