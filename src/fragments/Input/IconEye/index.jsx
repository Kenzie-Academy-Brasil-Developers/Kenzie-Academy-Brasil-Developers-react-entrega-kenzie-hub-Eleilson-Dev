import styles from './styles.module.scss';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useLoginContext } from '../../../hooks/useLoginContext';

export const IconEye = () => {
  const { isVisible, setIsVisible } = useLoginContext();
  return (
    <div className={styles.iconBox}>
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
        type="button"
      >
        {isVisible ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
      </button>
    </div>
  );
};
