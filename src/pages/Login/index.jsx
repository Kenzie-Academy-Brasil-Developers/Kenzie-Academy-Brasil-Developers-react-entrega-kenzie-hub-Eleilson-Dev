import { FormLogin } from '../../components/FormLogin';
import { LoginProvider } from '../../providers/LoginContext';
import styles from './styles.module.scss';

export const Login = () => {
  return (
    <div className={`${styles.loginBox} conteiner`}>
      <header>
        <h1>Kenzie Hub</h1>
      </header>
      <LoginProvider>
        <FormLogin />
      </LoginProvider>
    </div>
  );
};
