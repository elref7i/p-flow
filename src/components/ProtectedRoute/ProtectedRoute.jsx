import { Navigate, useLocation } from 'react-router-dom';
import { useTypeContext } from '../../context/UserType.context';

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children, allowedRolls }) {
  const { token, role } = useTypeContext();
  const location = useLocation();

  // !allowedRolls.includes(role)
  if (location.pathname === '/' && role && token) {
    return <Navigate to={`/${role}`} replace />;
  }
  // eslint-disable-next-line react/prop-types
  if (allowedRolls.includes(role)) return children;
  if (!token) return <Navigate to="/landing" />;
}
