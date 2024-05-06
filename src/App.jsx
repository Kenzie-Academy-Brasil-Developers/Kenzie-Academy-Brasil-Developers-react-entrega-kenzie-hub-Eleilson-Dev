import { RoutesMain } from './components/routes';
import { LoginProvider } from './providers/LoginContext';

const App = () => {
  return (
    <>
      <LoginProvider>
        <RoutesMain />
      </LoginProvider>
    </>
  );
};

export default App;
