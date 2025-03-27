import { useForgetPassword } from '@/context/Forget.context';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function ForgetProtectedRoute({ children }) {
  const { isForgetCompleted } = useForgetPassword();

  return isForgetCompleted ? (
    children
  ) : (
    <Navigate to="/forgetpassword" replace />
  );
}
