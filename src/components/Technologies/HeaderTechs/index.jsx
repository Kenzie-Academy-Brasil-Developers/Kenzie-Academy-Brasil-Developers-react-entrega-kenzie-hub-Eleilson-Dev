import styles from './styles.module.scss';
import { FaPlus } from 'react-icons/fa';

export const HeaderTechs = () => {
  return (
    <div className={styles.headerContent}>
      <header>
        <h1>Tecnologias</h1>
        <button>
          <FaPlus />
        </button>
      </header>
    </div>
  );
};
