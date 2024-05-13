import { useLoginContext } from '../../../hooks/useLoginContext';
import styles from './styles.module.scss';
import { FaPlus } from 'react-icons/fa';

export const HeaderTechs = () => {
  const { setIsModalOpen, addTechToProfile } = useLoginContext();

  const openModal = () => {
    setIsModalOpen((prevState) => {
      return {
        ...prevState,
        isOpen: true,
        title: 'Cadastrar Tecnologia',
        btnTitle: 'Cadastrar Tecnologia',
        onConfirm: addTechToProfile,
        required: true,
      };
    });
  };

  return (
    <div className={styles.headerContent}>
      <header>
        <h1>Tecnologias</h1>
        <button onClick={openModal}>
          <FaPlus />
        </button>
      </header>
    </div>
  );
};
