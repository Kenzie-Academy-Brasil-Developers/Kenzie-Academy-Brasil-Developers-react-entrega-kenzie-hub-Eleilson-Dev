import { Route, Routes } from 'react-router-dom';

import { Login } from '../../pages/Login';
import { Register } from '../../pages/Register';
import { Dashboard } from '../../pages/Dashboard';
import { DashboarProtected, LoginProtected } from '../ProtectedRoutes';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginProtected />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<DashboarProtected />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
