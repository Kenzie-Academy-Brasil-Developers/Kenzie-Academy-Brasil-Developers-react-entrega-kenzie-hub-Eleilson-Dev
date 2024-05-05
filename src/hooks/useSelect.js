import { useState, useEffect } from 'react';

export const useSelect = (initialValue, onChange) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentValue, setCurrentValue] = useState(initialValue);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleSelect = (option) => {
    if (onChange) {
      onChange(option);
    }
    setCurrentValue(option);
    toggleDropdown();
  };

  return {
    showDropdown,
    currentValue,
    toggleDropdown,
    handleSelect,
    setCurrentValue,
  };
};
