import { useContext } from 'react';
import { RegisterContext } from '../providers/RegisterContext';

export const useRegisterContext = () => {
  return useContext(RegisterContext);
};
