import { HeaderTechs } from './HeaderTechs';
import styles from './styles.module.scss';

export const Technologies = () => {
  return (
    <div className={styles.techsContent}>
      <HeaderTechs />
      <ul>
        <li>
          <h1>teste 1</h1>
        </li>
        <li>
          <h1>teste 2</h1>
        </li>
        <li>
          <h1>teste 3</h1>
        </li>
      </ul>
    </div>
  );
};
