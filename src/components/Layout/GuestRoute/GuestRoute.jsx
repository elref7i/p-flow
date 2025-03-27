import { Navigate } from 'react-router-dom';
import { useTypeContext } from '../../../context/UserType.context';

// eslint-disable-next-line react/prop-types
export default function GuestRoute({ children }) {
  const { token } = useTypeContext();
  return !token ? children : <Navigate to="/" />;
}
