import styles from './styles.module.scss';

import { useRegisterContext } from '../../hooks/useRegisterContext';
import { useForm } from 'react-hook-form';
import { Input } from '../../fragments/Input';
import { HeaderRegister } from './HeaderRegister';
import { Button } from '../../fragments/Button';

export const FormRegister = () => {
  const { setFormData } = useRegisterContext();

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
      <HeaderRegister />
      <Input
        id="nome"
        placeholder="Digite aqui seu nome"
        type="text"
        {...register('name')}
      />
      <Input
        id="email"
        type="email"
        placeholder="Digite aqui seu email"
        {...register('email')}
      />
      <Input
        id="senha"
        type="text"
        placeholder="Digite aqui sua senha"
        {...register('password')}
      />
      <Input
        id="confirmar senha"
        type="text"
        placeholder="Digite novamente sua senha"
        {...register('confirmPassword')}
      />
      <Input id="bio" placeholder="Fale sobre você" {...register('bio')} />
      <Input
        id="contato"
        type={'tel'}
        placeholder="Opção de contato"
        {...register('contact')}
      />
      <Input id="Selecionar modulo" placeholder="Primeiro Modulo" />
      <Button type="submit" disabled={false} bgColor="btn1" title="Cadastrar" />
    </form>
  );
};
