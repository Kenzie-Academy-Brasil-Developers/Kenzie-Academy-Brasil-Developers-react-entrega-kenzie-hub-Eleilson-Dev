import { Route, Routes } from 'react-router-dom';

import { Login } from '../../pages/Login';
import { Register } from '../../pages/Register';
import { Dashboard } from '../../pages/Dashboard';
import { ProtectedDashboard, ProtectedLogin } from '../ProtectedRoutes';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedLogin />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<ProtectedDashboard />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
