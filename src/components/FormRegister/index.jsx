import styles from './styles.module.scss';

import { useRegisterContext } from '../../hooks/useRegisterContext';
import { useCustomForm } from '../../hooks/useCustomForm';
import { useNavigate } from 'react-router-dom';

import { SelectController } from '../SelectController';
import { FormInputs } from './FormInputs';
import { HeaderRegister } from './HeaderRegister';
import { Button } from '../../fragments/Button';
import moduleOptions from '../../constants/moduleOptions';

export const FormRegister = () => {
  const { userCreate, handleFormChange, isDisabled } = useRegisterContext();
  const { control, register, handleSubmit, formState } = useCustomForm();

  const navigate = useNavigate();

  const addRegister = (formData) => {
    userCreate(formData);
    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit(addRegister)}
      className={styles.form}
      onChange={handleFormChange}
    >
      <HeaderRegister />
      <FormInputs register={register} errors={formState} />

      <SelectController
        name="course_module"
        control={control}
        label="Selecionar Módulo"
        keyValue="course_module"
        options={moduleOptions}
      />
      <Button
        type="submit"
        disabled={isDisabled}
        bgColor="btn1"
        title="Cadastrar"
      />
    </form>
  );
};
