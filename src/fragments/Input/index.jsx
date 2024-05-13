import styles from './styles.module.scss';

import { forwardRef } from 'react';
import { IconEye } from './IconEye';

export const Input = forwardRef(
  ({ id, label, icon, errors, required, ...rest }, ref) => {
    const errorMessage = errors && errors[id] ? errors[id].message : null;

    return (
      <div className={styles.inputContent}>
        <label htmlFor={id}>{label}</label>

        <div
          className={`${styles.inputBox} ${
            errorMessage ? 'border2' : 'border1'
          }`}
        >
          <input ref={ref} id={id} {...rest} required={required} />
          {icon === 'visible' ? <IconEye /> : null}
        </div>

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </div>
    );
  }
);
