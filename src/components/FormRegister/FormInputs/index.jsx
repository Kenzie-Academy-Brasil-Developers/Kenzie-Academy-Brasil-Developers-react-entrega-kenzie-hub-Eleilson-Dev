import { Input } from '../../../fragments/Input';

export const FormInputs = ({ register, errors: { errors } }) => {
  return (
    <>
      <Input
        id="name"
        label="nome"
        placeholder="Digite aqui seu nome"
        type="text"
        errors={errors}
        {...register('name')}
      />
      <Input
        id="email"
        label="email"
        type="email"
        placeholder="Digite aqui seu email"
        errors={errors}
        {...register('email')}
      />
      <Input
        id="password"
        label="senha"
        type="text"
        placeholder="Digite aqui sua senha"
        errors={errors}
        {...register('password')}
      />
      <Input
        id="confirmPassword"
        label="confirmar senha"
        type="text"
        placeholder="Digite novamente sua senha"
        errors={errors}
        {...register('confirmPassword')}
      />
      <Input
        id="bio"
        label="bio"
        placeholder="Fale sobre você"
        errors={errors}
        {...register('bio')}
      />
      <Input
        id="contact"
        label="contato"
        type="text"
        placeholder="Opção de contato"
        errors={errors}
        {...register('contact')}
      />
    </>
  );
};
