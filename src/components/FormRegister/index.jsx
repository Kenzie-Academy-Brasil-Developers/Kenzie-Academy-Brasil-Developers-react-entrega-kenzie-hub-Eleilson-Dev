import styles from './styles.module.scss';

import { useRegisterContext } from '../../hooks/useRegisterContext';
import { Controller } from 'react-hook-form';
import { FormInputs } from './FormInputs';
import { HeaderRegister } from './HeaderRegister';
import { Button } from '../../fragments/Button';
import { Select } from '../../fragments/Select';
import { useCustomForm } from '../../hooks/useCustomForm';

export const FormRegister = () => {
  const { setFormData, userRegister } = useRegisterContext();
  const { control, register, handleSubmit, reset, errors } = useCustomForm();

  const addRegister = (formData) => {
    setFormData(formData);
    userRegister(formData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(addRegister)} className={styles.form}>
      <HeaderRegister />
      <FormInputs register={register} />
      <Controller
        name="module"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={['Primeiro Módulo', 'Segundo Módulo', 'Terceiro Módulo']}
            defaultValue="Primeiro Módulo"
          />
        )}
      />
      <Button type="submit" bgColor="btn1" title="Cadastrar" />
    </form>
  );
};
