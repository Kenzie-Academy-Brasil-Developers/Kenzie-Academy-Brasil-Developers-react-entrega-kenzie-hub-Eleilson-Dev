import styles from './styles.module.scss';
import { HeaderDashBoard } from './HeaderDashBoard';

import { useLoginContext } from '../../hooks/useLoginContext';
import { TechList } from '../../components/TechList';

export const Dashboard = () => {
  const { user } = useLoginContext();

  return (
    <div className={`${styles.dashBox}`}>
      <HeaderDashBoard />
      <main>
        <section className={styles.userSection}>
          <div className="dashboardConteiner">
            <h1 className="Title1">Olá, {user?.name}</h1>
            <p className="Headline">{user?.course_module}</p>
          </div>
        </section>
        <section className={`dashboardConteiner`}>
          <TechList />
        </section>
      </main>
    </div>
  );
};
