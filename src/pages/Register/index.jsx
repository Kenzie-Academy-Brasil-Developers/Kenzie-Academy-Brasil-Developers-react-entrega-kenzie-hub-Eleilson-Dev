import styles from './styles.module.scss';

import { Link } from 'react-router-dom';
import { FormRegister } from '../../components/FormRegister';

export const Register = () => {
  return (
    <div className={`${styles.registerBox} conteiner`}>
      <header>
        <h1>Kenzie Hub</h1>
        <Link to="/">Voltar</Link>
      </header>
      <FormRegister />
    </div>
  );
};
