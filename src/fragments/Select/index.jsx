import { forwardRef, useEffect } from 'react';
import styles from './styles.module.scss';

import { useSelect } from '../../hooks/useSelect';
import { AngleDownIcon } from '../AngleDownIcon';
import { DropdownOptions } from './DropdownOptions';

export const Select = forwardRef(
  ({ onChange, value, defaultValue, options, ...props }, ref) => {
    const {
      showDropdown,
      currentValue,
      toggleDropdown,
      handleSelect,
      setCurrentValue,
    } = useSelect(defaultValue, onChange);

    useEffect(() => {
      setCurrentValue(value);
    }, [value]);

    return (
      <div className={styles.selectBox}>
        <label htmlFor={props.id || 'select'}>Selecionar Módulo</label>

        <div
          className={styles.optionsContent}
          ref={ref}
          onClick={toggleDropdown}
          {...props}
        >
          <h2>{currentValue}</h2>
          <AngleDownIcon />
          {showDropdown && (
            <DropdownOptions
              options={options}
              onSelect={handleSelect}
              toggleDropdown={toggleDropdown}
            />
          )}
        </div>
      </div>
    );
  }
);
