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
  lightBackground: '#FAFAFA', // لون الخلفية العام (أبيض فاتح جدًا)
  lightPaper: '#F5F5F5', // لون المكونات الورقية (أبيض رمادي فاتح)
  lightNavbar: '#F0F0F0', // لون شريط التنقل (رمادي فاتح جدًا)
  lightTextPrimary: '#24292E', // اللون الأساسي للنصوص (أسود داكن)
  lightTextSecondary: '#586069', // اللون الثانوي للنصوص (رمادي داكن)
  lightGrey: {
    100: '#FAFAFA', // نفس لون الخلفية
    200: '#F5F5F5', // نفس لون الورق
    300: '#EAEEF2', // لون خلفية الزر
    400: '#D1D5DA', // لون الحدود
    500: '#6A737D', // لون رمادي داكن للنصوص الثانوية
  },
  lightBgButton: '#0D1117', // لون زر الوضع الفاتح (أغمق قليلاً من الخلفية)
  lightButtonText: '#D1D5DA', // لون نص الأزرار في الوضع الفاتح
  lightBorder: '#6A737D', // لون الحدود في الوضع الفاتح

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
  darkBgButton: '#161B22', // لون زر الوضع الداكن (رمادي داكن جدًا)
  darkButtonText: '#FFFFFF', // لون نص الأزرار في الوضع الداكن (أبيض)
  darkBorder: '#30363D', // لون الحدود في الوضع الداكن
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

    // الحدود
    border: {
      default: mode === 'light' ? colors.lightBorder : colors.darkBorder, // لون الحدود
    },

    // ألوان إضافية
    action: {
      active: mode === 'light' ? colors.primary : colors.secondary,
      hover: mode === 'light' ? colors.lightGrey[300] : colors.darkGrey[300], // استخدام لون رمادي متوسط للـ hover
      selected: mode === 'light' ? colors.lightGrey[400] : colors.darkGrey[500],
      disabled: mode === 'light' ? colors.lightGrey[400] : colors.darkGrey[500],
      disabledBackground:
        mode === 'light' ? colors.lightGrey[200] : colors.darkGrey[300],
    },
  },
});
