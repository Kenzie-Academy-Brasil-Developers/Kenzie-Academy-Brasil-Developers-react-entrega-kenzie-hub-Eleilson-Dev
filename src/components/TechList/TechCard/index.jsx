import styles from './styles.module.scss';
import { FaRegTrashAlt, FaPencilAlt } from 'react-icons/fa';

export const TechCard = () => {
  return (
    <li className={styles.techCard}>
      <div className={styles.cardDetails}>
        <h1>teste</h1>
        <p>avancado</p>
      </div>
      <div className={styles.cardIcons}>
        <button>
          <FaPencilAlt />
        </button>
        <button>
          <FaRegTrashAlt />
        </button>
      </div>
    </li>
  );
};
