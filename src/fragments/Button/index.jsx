import styles from './styles.module.scss';

export const Button = ({ type, title, disabled, bgColor }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.btn} ${bgColor}`}
    >
      {title}
    </button>
  );
};
