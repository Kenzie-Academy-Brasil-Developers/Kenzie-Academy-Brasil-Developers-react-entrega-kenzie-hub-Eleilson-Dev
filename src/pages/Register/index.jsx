import styles from './styles.module.scss';

import { FormRegister } from '../../components/FormRegister';
import { HeaderRegister } from './HeaderRegister';
import { RegisterProvider } from '../../providers/RegisterContext';

export const Register = () => {
  return (
    <div className={`${styles.registerBox} conteiner`}>
      <HeaderRegister />
      <main>
        <RegisterProvider>
          <FormRegister />
        </RegisterProvider>
      </main>
    </div>
  );
};
