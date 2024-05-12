import styles from './styles.module.scss';

export const DropdownOptions = ({
  options,
  onSelect,
  keyValue,
  toggleDropdown,
}) => {
  return (
    <div className={styles.options}>
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => {
            onSelect(option[keyValue]);
            toggleDropdown();
          }}
        >
          {option[keyValue]}
        </div>
      ))}
    </div>
  );
};
