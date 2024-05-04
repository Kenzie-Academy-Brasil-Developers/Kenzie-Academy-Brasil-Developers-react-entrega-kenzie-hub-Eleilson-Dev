import { useContext } from 'react';
import { AccountContext } from '../providers/AccountContext';

export const useAccountContext = () => {
  return useContext(AccountContext);
};
