import styles from './styles.module.scss';

import { useLoginContext } from '../../../hooks/useLoginContext';
import { FaRegTrashAlt, FaPencilAlt } from 'react-icons/fa';

export const TechCard = ({ techId, title, status }) => {
  const { setIsModalOpen, updateTech, deletTech } = useLoginContext();

  const handleDelete = () => {
    deletTech(techId);
  };

  const handleOpenModal = () => {
    setIsModalOpen((prevState) => {
      return {
        ...prevState,
        isOpen: true,
        title: 'Tecnologia Detalhes',
        btnTitle: 'Salvar alterações',
        onConfirm: (formData) => updateTech(techId, formData),
        required: false,
      };
    });
  };

  return (
    <li className={styles.techCard}>
      <div className={styles.cardDetails}>
        <h1>{title}</h1>
        <p>{status}</p>
      </div>
      <div className={styles.cardIcons}>
        <button onClick={handleOpenModal}>
          <FaPencilAlt />
        </button>
        <button onClick={handleDelete}>
          <FaRegTrashAlt />
        </button>
      </div>
    </li>
  );
};
