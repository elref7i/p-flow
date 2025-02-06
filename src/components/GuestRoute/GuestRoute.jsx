import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserTypeContext } from '../../context/UserType.context';

export default function GuestRoute({ children }) {
  const { token } = useContext(UserTypeContext);
  if (!token) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
GuestRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
