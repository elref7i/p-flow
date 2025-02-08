export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // primary: { main: '#1976d2' },
          // background: { default: '#f5f5f5', paper: '#fff' },
          // text: { primary: '#000', secondary: '#555' },
        }
      : {
          // primary: { main: '#90caf9' },
          // background: { default: '#121212', paper: '#1e1e1e' },
          // text: { primary: '#fff', secondary: '#bbb' },
        }),
  },
});
