import styles from './styles.module.scss';

import { useLoginContext } from '../../hooks/useLoginContext';
import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';
import { Input } from '../../fragments/Input';
import { Button } from '../../fragments/Button';

export const FormLogin = () => {
  const { isVisible, userLogin } = useLoginContext();
  const { register, handleSubmit, reset } = useForm();

  const loginSubmit = (formData) => {
    userLogin(formData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(loginSubmit)} className={styles.form}>
      <h2 className="Title1">Login</h2>
      <Input
        id="email"
        label="email"
        type="email"
        placeholder="Digite seu email aqui"
        {...register('email')}
      />
      <Input
        id="senha"
        label="senha"
        type={isVisible ? 'text' : 'password'}
        placeholder="Digite sua senha aqui"
        icon="visible"
        {...register('password')}
      />
      <Button type={'submit'} title="Entrar" bgColor="btn1" />
      <p className="HeadlineBold">Ainda não possui uma conta?</p>
      <Link to="/register">Cadastre-se</Link>
    </form>
  );
};
