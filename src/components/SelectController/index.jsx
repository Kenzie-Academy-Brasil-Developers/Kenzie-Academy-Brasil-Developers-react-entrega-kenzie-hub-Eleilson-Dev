import { Controller } from 'react-hook-form';
import { Select } from '../../fragments/Select';

export const SelectController = ({
  name,
  control,
  label,
  keyValue,
  options,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          label={label}
          keyValue={keyValue}
          options={options}
          defaultValue={options[0][keyValue]}
        />
      )}
    />
  );
};
