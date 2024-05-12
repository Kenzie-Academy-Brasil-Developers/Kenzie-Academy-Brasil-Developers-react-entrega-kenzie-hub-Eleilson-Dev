import { useState } from 'react';
import { HeaderTechs } from './HeaderTechs';
import { TechCard } from './TechCard';
import { TechModal } from './TechModal';
import styles from './styles.module.scss';

export const TechList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.techsContent}>
      <HeaderTechs setIsModalOpen={setIsModalOpen} />
      {isModalOpen ? <TechModal setIsModalOpen={setIsModalOpen} /> : null}
      <ul>
        <TechCard />
        <TechCard />
        <TechCard />
      </ul>
    </div>
  );
};
