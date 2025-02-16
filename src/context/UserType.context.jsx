/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const UserTypeContext = createContext(0);

export default function UserTypeProvider({ children }) {
  const [role, setRole] = useState(localStorage.getItem('role'));
  const [token, setToken] = useState(localStorage.getItem('token'));

  function logout() {
    setToken(null);
    setRole(null);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
  return (
    <UserTypeContext.Provider
      // @ts-ignore
      value={{ token, setToken, role, setRole, logout }}
    >
      {children}
    </UserTypeContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export function useTypeContext() {
  return useContext(UserTypeContext);
}
