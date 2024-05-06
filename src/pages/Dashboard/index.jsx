import styles from './styles.module.scss';
import { HeaderDashBoard } from './HeaderDashBoard';

import { useLoginContext } from '../../hooks/useLoginContext';

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
        <section className={`${styles.detailsSection} dashboardConteiner`}>
          <h1 className="Title1">Que pena! Estamos em desenvolvimento :(</h1>
          <p className="Paragraph">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </section>
      </main>
    </div>
  );
};
