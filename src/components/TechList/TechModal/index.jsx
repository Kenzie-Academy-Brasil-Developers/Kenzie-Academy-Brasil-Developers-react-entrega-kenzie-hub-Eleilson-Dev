import styles from './styles.module.scss';

import { useForm } from 'react-hook-form';
import { Input } from '../../../fragments/Input';
import statusOption from '../../../constants/statusOptions';
import { SelectController } from '../../SelectController';
import { useLoginContext } from '../../../hooks/useLoginContext';

export const TechModal = () => {
  const { isModalOpen, setIsModalOpen } = useLoginContext();
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      status: 'Iniciante',
    },
  });

  const closeModal = (event) => {
    event.preventDefault();

    setIsModalOpen((prevState) => {
      return { ...prevState, isOpen: false };
    });
  };

  const handleEventTech = (formTech) => {
    isModalOpen.onConfirm(formTech);
  };

  return (
    <div className={styles.modal}>
      <form
        onSubmit={handleSubmit(handleEventTech)}
        className={styles.modalContent}
      >
        <header>
          <h1>{isModalOpen.title}</h1>
          <button onClick={closeModal}>X</button>
        </header>
        <div className={styles.details}>
          {isModalOpen.required && (
            <Input
              label="nome"
              required={true}
              placeholder="Material UI"
              type="text"
              {...register('title')}
            />
          )}
          <SelectController
            name="status"
            control={control}
            label="status"
            keyValue="status"
            options={statusOption}
          />
          <button type="submit" className={styles.btnModal}>
            {isModalOpen.btnTitle}
          </button>
        </div>
      </form>
    </div>
  );
};
