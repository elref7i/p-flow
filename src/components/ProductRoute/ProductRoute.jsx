import { Navigate } from 'react-router-dom';

export default function ProductRoute({ children }) {
  const token = false;
  if (token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
