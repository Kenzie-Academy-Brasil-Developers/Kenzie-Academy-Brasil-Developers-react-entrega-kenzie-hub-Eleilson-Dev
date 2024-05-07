import { ToastContainer } from 'react-toastify';

import { RoutesMain } from './components/routes';
import { LoginProvider } from './providers/LoginContext';

const App = () => {
  return (
    <>
      <ToastContainer />
      <LoginProvider>
        <RoutesMain />
      </LoginProvider>
    </>
  );
};

export default App;
