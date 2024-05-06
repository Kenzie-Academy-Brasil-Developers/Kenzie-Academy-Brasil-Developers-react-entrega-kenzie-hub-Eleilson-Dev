import { useLoginContext } from '../../hooks/useLoginContext';
import { Outlet, Navigate } from 'react-router-dom';

export const ProtectedDashboard = () => {
  const { user } = useLoginContext();
  return user ? <Outlet /> : <Navigate to="/" />;
};

export const ProtectedLogin = () => {
  const { user } = useLoginContext();
  return !user ? <Outlet /> : <Navigate to="/dashboard" />;
};
