import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export default function GuestRoute({ children }) {
  const token = false;
  if (!token) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
GuestRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
