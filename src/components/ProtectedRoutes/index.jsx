import { useLoginContext } from '../../hooks/useLoginContext';
import { Outlet, Navigate } from 'react-router-dom';

export const DashboarProtected = () => {
  const { user } = useLoginContext();
  return user ? <Outlet /> : <Navigate to="/" />;
};

export const LoginProtected = () => {
  const { user } = useLoginContext();
  return !user ? <Outlet /> : <Navigate to="/dashboard" />;
};
