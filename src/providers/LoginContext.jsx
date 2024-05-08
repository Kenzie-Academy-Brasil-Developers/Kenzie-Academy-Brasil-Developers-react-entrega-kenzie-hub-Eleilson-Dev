import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { errorToast } from '../utils/toasts';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('@TOKEN');
      const userId = localStorage.getItem('@USERID');

      if (token && userId) {
        try {
          navigate('/dashboard');
          const { data } = await api.get(`/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
        } catch (error) {
          console.log(error);
          localStorage.removeItem('@TOKEN');
          localStorage.removeItem('@USERID');
        }
      }
    };

    loadUser();
  }, []);

  const userLoged = async (formLogin) => {
    try {
      const { data } = await api.post('/sessions', formLogin);
      localStorage.setItem('@TOKEN', data.token);
      localStorage.setItem('@USERID', data.user.id);
      setUser(data.user);
      navigate('/dashboard');
    } catch (error) {
      // console.log(error);
      errorToast('E-mail ou senha invalidos');
    }
  };

  const userLogin = (formLogin) => {
    userLoged(formLogin);
  };

  const userIsLoged =
    !localStorage.getItem('@TOKEN') && !localStorage.getItem('@USERID');

  const userLogout = () => {
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@USERID');
    setUser(null);
    navigate('/');
  };

  return (
    <LoginContext.Provider
      value={{
        isVisible,
        setIsVisible,
        user,
        userLogin,
        userLogout,
        userIsLoged,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
