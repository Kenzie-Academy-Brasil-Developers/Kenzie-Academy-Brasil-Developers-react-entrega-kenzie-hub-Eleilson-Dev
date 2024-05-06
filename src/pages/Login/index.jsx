import styles from './styles.module.scss';
import { FormLogin } from '../../components/FormLogin';

export const Login = () => {
  return (
    <div className={`${styles.loginBox} conteiner`}>
      <header>
        <h1>Kenzie Hub</h1>
      </header>

      <FormLogin />
    </div>
  );
};
