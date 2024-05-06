import { useLoginContext } from '../../hooks/useLoginContext';
import { Outlet, Navigate } from 'react-router-dom';

export const ProtectedRoutes = () => {
  const { user } = useLoginContext();
  return user ? <Outlet /> : <Navigate to="/" />;
};
