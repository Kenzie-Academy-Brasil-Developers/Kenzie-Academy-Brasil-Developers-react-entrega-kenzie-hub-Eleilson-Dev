import { Link } from 'react-router-dom';
import { useLoginContext } from '../../../hooks/useLoginContext';

export const HeaderDashBoard = () => {
  const { userLogout } = useLoginContext();
  return (
    <header className="dashboardConteiner">
      <h1>Kenzie Hub</h1>
      <Link onClick={userLogout} to="/">
        Sair
      </Link>
    </header>
  );
};
