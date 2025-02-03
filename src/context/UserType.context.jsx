import { createContext, useState } from 'react';

export const UserTypeContext = createContext(0);

// eslint-disable-next-line react/prop-types
export default function UserTypeProvider({ children }) {
  const [userType, setUserType] = useState('pharmacy'.toLowerCase());
  return (
    <UserTypeContext.Provider
      // @ts-ignore
      value={{ userType, setUserType }}
    >
      {children}
    </UserTypeContext.Provider>
  );
}
