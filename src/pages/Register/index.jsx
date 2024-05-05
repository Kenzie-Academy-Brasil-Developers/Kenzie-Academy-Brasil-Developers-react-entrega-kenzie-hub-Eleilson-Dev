import styles from './styles.module.scss';

import { FormRegister } from '../../components/FormRegister';
import { HeaderRegister } from './HeaderRegister';

export const Register = () => {
  return (
    <div className={`${styles.registerBox} conteiner`}>
      <HeaderRegister />
      <main>
        <FormRegister />
      </main>
    </div>
  );
};
