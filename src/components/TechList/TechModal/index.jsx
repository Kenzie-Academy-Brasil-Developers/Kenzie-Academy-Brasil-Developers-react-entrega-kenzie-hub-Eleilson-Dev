import styles from './styles.module.scss';

import { useForm } from 'react-hook-form';
import { Input } from '../../../fragments/Input';
import statusOption from '../../../constants/statusOptions';
import { SelectController } from '../../SelectController';

export const TechModal = ({ setIsModalOpen }) => {
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      status: 'Iniciante',
    },
  });

  const openModal = () => {
    setIsModalOpen(false);
  };

  const updateTech = (event) => {
    console.log(event);
  };

  return (
    <div className={styles.modal}>
      <form className={styles.modalContent} onSubmit={handleSubmit(updateTech)}>
        <header>
          <h1>Cadastrar Tecnologia</h1>
          <button onClick={openModal}>X</button>
        </header>
        <div className={styles.details}>
          <Input
            label="nome"
            placeholder="Digite o nome aqui "
            type="text"
            {...register('update')}
          />
          <SelectController
            name="status"
            control={control}
            label="status"
            keyValue="status"
            options={statusOption}
          />
          <button type="submit" className={styles.btnModal}>
            Cadastrar Tecnologia
          </button>
        </div>
      </form>
    </div>
  );
};
