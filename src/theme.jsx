const colors = {
  // الألوان الأساسية
  primary: '#FF7A00', // لون أساسي (برتقالي)
  secondary: '#958DA5', // لون ثانوي (رمادي بنفسجي)
  auth: '#939494', // لون ثانوي (رمادي بنفسجي)
  error: '#B3261E', // لون الخطأ (أحمر داكن)
  warning: '#F9A825', // لون التحذير (أصفر داكن)
  success: '#4CAF50', // لون النجاح (أخضر)
  info: '#2196F3', // لون المعلومات (أزرق)

  // درجات الألوان للوضع الفاتح (Light Mode)
  lightBackground: '#FFFFFF', // لون الخلفية العام (أبيض)
  lightPaper: '#F5F5F5', // لون المكونات الورقية (رمادي فاتح)
  lightNavbar: '#E8E8E8', // لون شريط التنقل (رمادي فاتح)
  lightTextPrimary: '#1C1B1F', // اللون الأساسي للنصوص (أسود داكن)
  lightTextSecondary: '#49454F', // اللون الثانوي للنصوص (رمادي داكن)
  lightGrey: {
    100: '#F5F5F5', // درجة فاتحة جدًا
    200: '#EEEEEE', // درجة فاتحة
    300: '#E0E0E0', // درجة متوسطة
    400: '#BDBDBD', // درجة داكنة
    500: '#9E9E9E', // درجة داكنة جدًا
  },

  // درجات الألوان للوضع الداكن (Dark Mode)
  darkBackground: '#383838', // لون الخلفية العام (أسود داكن)
  darkPaper: '#1E1E1E', // لون المكونات الورقية (رمادي داكن جدًا)
  darkNavbar: '#2B2B2B', // لون شريط التنقل (رمادي داكن)
  darkTextPrimary: '#E0E0E0', // اللون الأساسي للنصوص (رمادي فاتح)
  darkTextSecondary: '#A5A5A5', // اللون الثانوي للنصوص (رمادي متوسط)
  darkGrey: {
    100: '#1E1E1E', // درجة فاتحة جدًا
    200: '#2B2B2B', // درجة فاتحة
    300: '#3D3D3D', // درجة متوسطة
    400: '#5C5C5C', // درجة داكنة
    500: '#7E7E7E', // درجة داكنة جدًا
  },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    // الألوان الأساسية
    primary: { main: colors.primary }, // نفس اللون في كلا الوضعين
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
    },

    // النصوص
    text: {
      primary:
        mode === 'light' ? colors.lightTextPrimary : colors.darkTextPrimary,
      secondary:
        mode === 'light' ? colors.lightTextSecondary : colors.darkTextSecondary,
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
