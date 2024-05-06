import styles from './styles.module.scss';

import { useRegisterContext } from '../../hooks/useRegisterContext';
import { useCustomForm } from '../../hooks/useCustomForm';
import { useNavigate } from 'react-router-dom';

import { Controller } from 'react-hook-form';
import { FormInputs } from './FormInputs';
import { HeaderRegister } from './HeaderRegister';
import { Button } from '../../fragments/Button';
import { Select } from '../../fragments/Select';
import moduleOptions from '../../constants/moduleOptions';

export const FormRegister = () => {
  const { userCreate } = useRegisterContext();
  const { control, register, handleSubmit, reset, errors } = useCustomForm();
  const navigate = useNavigate();

  const addRegister = (formData) => {
    userCreate(formData);
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit(addRegister)} className={styles.form}>
      <HeaderRegister />
      <FormInputs register={register} />
      <Controller
        name="course_module"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={moduleOptions}
            defaultValue={moduleOptions[0].course_module}
          />
        )}
      />
      <Button type="submit" bgColor="btn1" title="Cadastrar" />
    </form>
  );
};
