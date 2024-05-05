import styles from './styles.module.scss';

export const DropdownOptions = ({ options, onSelect, toggleDropdown }) => {
  return (
    <div className={styles.options}>
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => {
            onSelect(option.course_module);
            toggleDropdown();
          }}
        >
          {option.course_module}
        </div>
      ))}
    </div>
  );
};
