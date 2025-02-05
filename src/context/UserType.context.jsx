import { createContext, useState } from 'react';

export const UserTypeContext = createContext(0);

// eslint-disable-next-line react/prop-types
export default function UserTypeProvider({ children }) {
  const [userType, setUserType] = useState('pharmacy'.toLowerCase());
  const [token, setToken] = useState(null);
  return (
    <UserTypeContext.Provider
      // @ts-ignore
      value={{ userType, setUserType, token, setToken }}
    >
      {children}
    </UserTypeContext.Provider>
  );
}
