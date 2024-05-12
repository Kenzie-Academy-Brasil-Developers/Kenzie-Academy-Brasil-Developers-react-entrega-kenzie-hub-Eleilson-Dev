import styles from './styles.module.scss';
import { FaPlus } from 'react-icons/fa';

export const HeaderTechs = ({ setIsModalOpen }) => {
  return (
    <div className={styles.headerContent}>
      <header>
        <h1>Tecnologias</h1>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <FaPlus />
        </button>
      </header>
    </div>
  );
};
