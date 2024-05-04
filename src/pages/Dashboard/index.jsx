import { useAccountContext } from '../../hooks/useAccountContext';

export const Dashboard = () => {
  const { teste } = useAccountContext();
  return <h1>Dashboard page: {teste}</h1>;
};
