import { HeaderTechs } from './HeaderTechs';
import { TechCard } from './TechCard';
import { TechModal } from './TechModal';
import styles from './styles.module.scss';
import { useLoginContext } from '../../hooks/useLoginContext';

export const TechList = () => {
  const { isModalOpen, userTechs } = useLoginContext();

  return (
    <div className={styles.techsContent}>
      <HeaderTechs />
      {isModalOpen.isOpen ? <TechModal /> : null}
      <ul>
        {userTechs.length > 0 ? (
          userTechs.map((tech) => (
            <TechCard
              key={tech.id}
              techId={tech.id}
              title={tech.title}
              status={tech.status}
            />
          ))
        ) : (
          <p>você ainda possui nenhuma tecnologia cadastrada!</p>
        )}
      </ul>
    </div>
  );
};
