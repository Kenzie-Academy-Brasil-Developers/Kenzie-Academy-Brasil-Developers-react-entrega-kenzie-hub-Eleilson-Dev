import styles from './styles.module.scss';

import { useAccountContext } from '../../hooks/useAccountContext';
import { Input } from '../../fragments/Input';
import { useForm } from 'react-hook-form';
import { FormHeader } from './FormHeader';

export const FormRegister = () => {
  const { setFormData } = useAccountContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addRegister = (formData) => {
    setFormData(formData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(addRegister)} className={styles.form}>
      <FormHeader />
      <Input
        id="nome"
        placeholder="Digite aqui seu nome"
        {...register('name')}
      />
      <Input
        id="email"
        placeholder="Digite aqui seu email"
        {...register('email')}
      />
      <Input
        id="senha"
        placeholder="Digite aqui sua senha"
        {...register('password')}
      />
      <Input
        id="confirmar senha"
        placeholder="Digite novamente sua senha"
        {...register('confirmPassword')}
      />
      <Input id="bio" placeholder="Fale sobre você" {...register('bio')} />
      <Input
        id="contato"
        placeholder="Opção de contato"
        {...register('contact')}
      />
      <Input id="Selecionar modulo" placeholder="Primeiro Modulo" />
      <button disabled={false} type="submit">
        Cadastrar
      </button>
    </form>
  );
};
