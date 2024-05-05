import styles from './styles.module.scss';
import { HeaderDashBoard } from './HeaderDashBoard';
import { useRegisterContext } from '../../hooks/useRegisterContext';

export const Dashboard = () => {
  const { formData } = useRegisterContext();

  return (
    <div className={`${styles.dashBox}`}>
      <HeaderDashBoard />
      <main>
        <section className={styles.userSection}>
          <div className="dashboardConteiner">
            <h1 className="Title1">Olá, {formData.name}</h1>
            <p className="Headline">{formData.course_module}</p>
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
