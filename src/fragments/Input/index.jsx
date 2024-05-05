import styles from './styles.module.scss';

import { forwardRef } from 'react';
import { IconEye } from './IconEye';

export const Input = forwardRef(({ id, icon, placeholder, ...rest }, ref) => {
  return (
    <div className={styles.inputContent}>
      <label htmlFor={id}>{id}</label>
      <div className={styles.inputBox}>
        <input
          ref={ref}
          id={id}
          autoComplete="off"
          placeholder={placeholder}
          {...rest}
        />
        {icon === 'visible' ? <IconEye /> : null}
      </div>
    </div>
  );
});
