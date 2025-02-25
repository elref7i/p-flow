const colors = {
  // الألوان الأساسية
  primary: '#24292E', // لون أساسي (أسود داكن)
  secondary: '#0366D6', // لون ثانوي (أزرق)
  auth: '#939494', // لون ثانوي (رمادي بنفسجي)
  error: '#CB2431', // لون الخطأ (أحمر)
  warning: '#F9A825', // لون التحذير (أصفر داكن)
  success: '#28A745', // لون النجاح (أخضر)
  info: '#0366D6', // لون المعلومات (أزرق)

  // درجات الألوان للوضع الفاتح (Light Mode)
  lightBackground: '#FFFFFF', // لون الخلفية العام (أبيض)
  lightPaper: '#F6F8FA', // لون المكونات الورقية (رمادي فاتح)
  lightNavbar: '#F6F8FA', // لون شريط التنقل (رمادي فاتح)
  lightTextPrimary: '#24292E', // اللون الأساسي للنصوص (أسود داكن)
  lightTextSecondary: '#586069', // اللون الثانوي للنصوص (رمادي داكن)
  lightGrey: {
    100: '#F6F8FA',
    200: '#EAEEF2',
    300: '#D1D5DA',
    400: '#959DA5',
    500: '#6A737D',
  },
  lightBgButton: 'linear-gradient(45deg, #24292E, #0366D6)', // لون زر الوضع الفاتح
  lightButtonText: '#FFFFFF', // لون نص الأزرار في الوضع الفاتح

  // درجات الألوان للوضع الداكن (Dark Mode)
  darkBackground: '#0D1117', // لون الخلفية العام (أسود داكن جدًا)
  darkPaper: '#161B22', // لون المكونات الورقية (رمادي داكن جدًا)
  darkNavbar: '#0D1117', // لون شريط التنقل (أسود داكن جدًا)
  darkTextPrimary: '#C9D1D9', // اللون الأساسي للنصوص (رمادي فاتح)
  darkTextSecondary: '#8B949E', // اللون الثانوي للنصوص (رمادي متوسط)
  darkGrey: {
    100: '#161B22',
    200: '#21262D',
    300: '#30363D',
    400: '#484F58',
    500: '#6E7681',
  },
  darkBgButton: 'linear-gradient(45deg, #24292E, #0366D6)', // لون زر الوضع الداكن
  darkButtonText: '#FFFFFF', // لون نص الأزرار في الوضع الداكن
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    auth: { main: colors.auth },
    error: { main: colors.error },
    warning: { main: colors.warning },
    success: { main: colors.success },
    info: { main: colors.info },

    // الخلفيات والأسطح
    background: {
      default:
        mode === 'light' ? colors.lightBackground : colors.darkBackground,
      paper: mode === 'light' ? colors.lightPaper : colors.darkPaper,
      navbar: mode === 'light' ? colors.lightNavbar : colors.darkNavbar,
      button: mode === 'light' ? colors.lightBgButton : colors.darkBgButton, // لون زر الخلفية
    },

    // النصوص
    text: {
      primary:
        mode === 'light' ? colors.lightTextPrimary : colors.darkTextPrimary,
      secondary:
        mode === 'light' ? colors.lightTextSecondary : colors.darkTextSecondary,
      button: mode === 'light' ? colors.lightButtonText : colors.darkButtonText, // لون نص الأزرار
    },

    // درجات الرمادي
    grey: mode === 'light' ? colors.lightGrey : colors.darkGrey,

    // ألوان إضافية
    action: {
      active: mode === 'light' ? colors.primary : colors.secondary,
      hover: mode === 'light' ? colors.lightGrey[200] : colors.darkGrey[400],
      selected: mode === 'light' ? colors.lightGrey[300] : colors.darkGrey[400],
      disabled: mode === 'light' ? colors.lightGrey[400] : colors.darkGrey[500],
      disabledBackground:
        mode === 'light' ? colors.lightGrey[200] : colors.darkGrey[300],
    },
  },
});
