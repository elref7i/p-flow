export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: { main: '#2B273A' }, // اللون الأساسي
    secondary: { main: '#A5B1B8' }, // لون ثانوي
    background: {
      default: mode === 'light' ? '#F5F6F6' : '#181919', // لون الخلفية العام
      paper: mode === 'light' ? '#FFFFFF' : '#2B273A', // لون المكونات الورقية
    },
    text: {
      primary: mode === 'light' ? '#2B273A' : '#F5F6F6', // اللون الأساسي للنصوص
      secondary: mode === 'light' ? '#7E828B' : '#A5B1B8', // اللون الثانوي للنصوص
    },
    grey: {
      100: mode === 'light' ? '#DDDDDD' : '#939494',
      200: mode === 'light' ? '#939494' : '#A5B1B8',
      300: mode === 'light' ? '#626262' : '#7E828B',
      400: mode === 'light' ? '#494a4a' : '#9BA1AD',
      500: mode === 'light' ? '#181919' : '#2B273A',
    },
  },
});
