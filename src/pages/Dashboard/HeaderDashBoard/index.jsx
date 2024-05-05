import { Link } from 'react-router-dom';

export const HeaderDashBoard = () => {
  return (
    <header className="dashboardConteiner">
      <h1>Kenzie Hub</h1>
      <Link to="/">Sair</Link>
    </header>
  );
};
