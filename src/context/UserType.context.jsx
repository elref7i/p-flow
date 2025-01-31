import { createContext, useState } from 'react';

export const UserTypeContext = createContext(0);

export default function UserTypeProvider({ children }) {
  const [userType, setUserType] = useState('pharmacy'.toLowerCase());
  return (
    <UserTypeContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserTypeContext.Provider>
  );
}
