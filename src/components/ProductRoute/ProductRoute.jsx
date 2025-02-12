import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserTypeContext } from '../../context/UserType.context';

export default function ProductRoute({ children }) {
  const { token } = useContext(UserTypeContext);
  return token ? children : <Navigate to={'/landing'} />;
}
