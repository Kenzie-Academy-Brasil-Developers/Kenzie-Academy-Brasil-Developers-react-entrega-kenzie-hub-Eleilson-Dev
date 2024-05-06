import { Input } from '../../../fragments/Input';

export const FormInputs = ({ register }) => {
  return (
    <>
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
        type="text"
        placeholder="Opção de contato"
        {...register('contact')}
      />
    </>
  );
};
