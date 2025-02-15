import { createContext, useContext, useState } from 'react';

const UserTypeContext = createContext(0);

// eslint-disable-next-line react/prop-types
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
export function useTypeContext() {
  return useContext(UserTypeContext);
}
