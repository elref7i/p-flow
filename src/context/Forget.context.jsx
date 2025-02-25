import { createContext, useContext, useState } from 'react';

const ForgetPasswordContext = createContext();

// eslint-disable-next-line react/prop-types
export default function ForgetPasswordProvider({ children }) {
  const [isForgetCompleted, setForgetCompleted] = useState(false);

  return (
    <ForgetPasswordContext.Provider
      value={{ isForgetCompleted, setForgetCompleted }}
    >
      {children}
    </ForgetPasswordContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useForgetPassword() {
  return useContext(ForgetPasswordContext);
}
