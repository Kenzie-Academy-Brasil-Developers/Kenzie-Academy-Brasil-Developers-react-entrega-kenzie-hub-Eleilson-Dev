import styles from './styles.module.scss';

export const Button = ({ type, title, disabled, bgColor, navTo }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.btn} ${bgColor}`}
      onClick={navTo}
    >
      {title}
    </button>
  );
};
