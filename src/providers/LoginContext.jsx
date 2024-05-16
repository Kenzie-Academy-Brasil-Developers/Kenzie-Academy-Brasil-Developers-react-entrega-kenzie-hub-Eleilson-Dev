import { createContext, useEffect, useState, useCallback } from 'react';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../utils/toasts';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState({
    isOpen: false,
    title: '',
    btnTitle: '',
    onConfirm: () => {},
    required: null,
  });

  const [user, setUser] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [userTechs, setUserTechs] = useState([]);
  const navigate = useNavigate();

  const loadUser = useCallback(async () => {
    const token = localStorage.getItem('@TOKEN');
    const userId = localStorage.getItem('@USERID');
    if (token && userId) {
      try {
        const { data } = await api.get(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        setUserTechs(data.techs);
        navigate('/dashboard');
      } catch (error) {
        console.log(error);
        localStorage.removeItem('@TOKEN');
        localStorage.removeItem('@USERID');
        setUser(null);
        setUserTechs([]);
      }
    }
  }, [navigate]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const userLoged = async (formLogin) => {
    try {
      const { data } = await api.post('/sessions', formLogin);
      localStorage.setItem('@TOKEN', data.token);
      localStorage.setItem('@USERID', data.user.id);
      await loadUser();
    } catch (error) {
      console.log(error);
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
    setUserTechs([]);
    navigate('/');
  };

  const addTechToProfile = async (formTech) => {
    try {
      const token = localStorage.getItem('@TOKEN');
      const { data } = await api.post('/users/techs', formTech, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserTechs([...userTechs, data]);
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deletTech = async (techId) => {
    try {
      const token = localStorage.getItem('@TOKEN');
      await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newUserTechs = userTechs.filter((tech) => {
        return tech.id !== techId;
      });
      setUserTechs(newUserTechs);
      successToast('Tecnologia Deletada com sucesso');
    } catch (error) {
      console.log(error);
    }
  };

  const updateTech = async (techId, formData) => {
    setIsModalOpen((prevState) => {
      return { ...prevState, isOpen: false };
    });

    try {
      const token = localStorage.getItem('@TOKEN');
      const { data } = await api.put(`/users/techs/${techId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const updatedTechs = userTechs.map((tech) => {
        if (tech.id === techId) {
          return data;
        }

        return tech;
      });
      successToast('Alterações salvas com sucesso.');
      setUserTechs(updatedTechs);
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
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
        isModalOpen,
        setIsModalOpen,
        addTechToProfile,
        userTechs,
        updateTech,
        deletTech,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
