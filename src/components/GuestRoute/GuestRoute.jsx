import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserTypeContext } from '../../context/UserType.context';

// eslint-disable-next-line react/prop-types
export default function GuestRoute({ children }) {
  const { token } = useContext(UserTypeContext);
  return !token ? children : <Navigate to="/" />;
}
