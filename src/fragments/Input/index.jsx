import { forwardRef } from 'react';
import styles from './styles.module.scss';

export const Input = forwardRef(({ id, ...rest }, ref) => {
  return (
    <div className={styles.inputBox}>
      <label htmlFor={id}>{id}</label>
      <input ref={ref} id={id} {...rest} />
    </div>
  );
});
