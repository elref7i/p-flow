import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserTypeContext } from '../../context/UserType.context';

export default function ProductRoute({ children }) {
  const { token } = useContext(UserTypeContext);
  if (token) {
    return children;
  } else {
    return <Navigate to="/landing" />;
  }
}
