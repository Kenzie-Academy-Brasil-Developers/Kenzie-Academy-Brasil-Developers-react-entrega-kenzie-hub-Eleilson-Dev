// successToast.jsx
import { toast } from 'react-toastify';
import './toastStyles.scss';

export const successToast = () => {
  return toast.success('Conta criada com sucesso!', {
    icon: 'iconcolor',
    className: 'toast-custom-success',
    progressClassName: 'toast-custom-progress-bar',
    autoClose: 5000,
  });
};

export const errorToast = () => {
  return toast.error('Ops! Algo deu errado', {
    className: 'toast-custom-error',
    progressClassName: 'toast-custom-progress-bar',
    autoClose: 5000,
  });
};
