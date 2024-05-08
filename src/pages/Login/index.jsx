import styles from './styles.module.scss';
import { FormLogin } from '../../components/FormLogin';
import { useLoginContext } from '../../hooks/useLoginContext';

export const Login = () => {
  const { userIsLoged } = useLoginContext();
  return (
    <div className={`${styles.loginBox} conteiner`}>
      {userIsLoged && (
        <>
          <header>
            <h1>Kenzie Hub</h1>
          </header>

          <FormLogin />
        </>
      )}
    </div>
  );
};
