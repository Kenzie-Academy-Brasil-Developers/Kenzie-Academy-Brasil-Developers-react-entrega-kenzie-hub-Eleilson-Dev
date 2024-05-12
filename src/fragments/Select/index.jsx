import { forwardRef, useEffect } from 'react';
import styles from './styles.module.scss';
import { useSelect } from '../../hooks/useSelect';
import { AngleDownIcon } from '../AngleDownIcon';

import { DropdownOptions } from './DropdownOptions';

export const Select = forwardRef(
  (
    { onChange, value, defaultValue, options, label, keyValue, ...props },
    ref
  ) => {
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
        <label htmlFor={props.id || 'select'}>{label}</label>

        <div
          className={styles.optionsContent}
          ref={ref}
          onClick={toggleDropdown}
          {...props}
        >
          <div className={styles.selectDetails}>
            <h2>{currentValue}</h2>
            <AngleDownIcon />
          </div>
          {showDropdown && (
            <DropdownOptions
              options={options}
              onSelect={handleSelect}
              keyValue={keyValue}
              toggleDropdown={toggleDropdown}
            />
          )}
        </div>
      </div>
    );
  }
);
