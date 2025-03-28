/* eslint-disable react-refresh/only-export-components */
import { createTheme, ThemeProvider } from '@mui/material';
import { createContext, useContext, useMemo, useState } from 'react';
import { getDesignTokens } from '../theme';

const ThemeContext = createContext(0);

// eslint-disable-next-line react/prop-types
export default function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        handleDrawerClose,
        handleDrawerOpen,
        open,
        setOpen,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
