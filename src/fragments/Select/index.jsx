import styles from './styles.module.scss';

import { AngleDownIcon } from '../AngleDownIcon';
import { forwardRef, useEffect, useState } from 'react';

export const Select = forwardRef(
  ({ onChange, value, defaultValue, options, ...props }, ref) => {
    const [showSelect, setShowSelect] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || defaultValue);

    const toggleDropdown = () => setShowSelect(!showSelect);

    const handleSelect = (option) => {
      onChange(option);
      setShowSelect(false);
    };

    useEffect(() => {
      if (selectedValue) setSelectedValue(value);
    }, [value]);

    return (
      <div className={styles.selectBox}>
        <label htmlFor={props.id || 'select'}>Selecionar Módulo</label>

        <div ref={ref} onClick={toggleDropdown} {...props}>
          <h2>{value}</h2>
          <span>
            <AngleDownIcon />
          </span>
          {showSelect && (
            <div className={styles.options}>
              {options.map((option, index) => (
                <div key={index} onClick={() => handleSelect(option)}>
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);
