import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserTypeContext } from '../../context/UserType.context';

// eslint-disable-next-line react/prop-types
export default function ProductRoute({ children, allowedRolls }) {
  const { token, role } = useContext(UserTypeContext);
  const location = useLocation();

  // !allowedRolls.includes(role)
  if (location.pathname === '/' && role && token) {
    return <Navigate to={`/${role}`} replace />;
  }
  if (allowedRolls.includes(role)) return children;
  if (!token) return <Navigate to="/landing" />;
}
