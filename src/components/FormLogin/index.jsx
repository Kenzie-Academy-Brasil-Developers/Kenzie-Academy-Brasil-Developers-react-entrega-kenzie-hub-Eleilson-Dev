import styles from './styles.module.scss';

import { useLoginContext } from '../../hooks/useLoginContext';
import { useNavigate } from 'react-router-dom';

import { Input } from '../../fragments/Input';
import { Button } from '../../fragments/Button';

export const FormLogin = () => {
  const { isVisible } = useLoginContext();
  const navigate = useNavigate();

  const handleNavTo = () => {
    navigate('/register');
  };

  return (
    <form className={styles.form}>
      <h2 className="Title1">Login</h2>
      <Input id="email" type="email" placeholder="Digite seu email aqui" />
      <Input
        id="senha"
        type={isVisible ? 'text' : 'password'}
        placeholder="Digite sua senha aqui"
        icon="visible"
      />
      <Button type={'submit'} title="Entrar" bgColor="btn1" />
      <p className="HeadlineBold">Ainda não possui uma conta?</p>
      <Button
        type={'button'}
        title="Cadastre-se"
        bgColor="btn2"
        navTo={handleNavTo}
      />
    </form>
  );
};
