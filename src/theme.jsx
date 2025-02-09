export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: { main: '#2B273A' }, // اللون الأساسي
    secondary: { main: '#A5B1B8' }, // لون ثانوي للمكونات التفاعلية

    ...(mode === 'light'
      ? {
          background: {
            default: '#F5F6F6', // لون الخلفية العام
            paper: '#FFFFFF', // لون المكونات اللي بتستخدم Paper
          },
          text: {
            primary: '#2B273A', // اللون الأساسي للنصوص
            secondary: '#7E828B', // اللون الثانوي للنصوص
          },
          grey: {
            100: '#DDDDDD',
            200: '#939494',
            300: '#626262',
            400: '#494a4a',
            500: '#181919',
          },
        }
      : {
          background: {
            default: '#181919', // لون الخلفية العام في الوضع الداكن
            paper: '#494a4a', // لون المكونات اللي بتستخدم Paper
          },
          text: {
            primary: '#F5F6F6', // اللون الأساسي للنصوص في الوضع الداكن
            secondary: '#9BA1AD', // اللون الثانوي للنصوص
          },
          grey: {
            100: '#939494',
            200: '#A5B1B8',
            300: '#7E828B',
            400: '#9BA1AD',
            500: '#2B273A',
          },
        }),
  },
});
