const colors = {
  // الألوان الأساسية
  primary: '#5188FF', // لون أساسي (أزرق)
  secondary: '#2196F3', // لون ثانوي (أزرق فاتح)
  auth: '#64B5F6', // لون ثانوي (أزرق فاتح جدًا)
  error: '#FF5252', // لون الخطأ (أحمر فاتح)
  warning: '#FFC107', // لون التحذير (أصفر)
  success: '#4CAF50', // لون النجاح (أخضر)
  info: '#2196F3', // لون المعلومات (أزرق فاتح)

  // درجات الألوان للوضع الفاتح (Light Mode)
  lightBackground: '#FFFFFF',
  lightbgAuth:
    ' linear-gradient(63.25deg, rgba(0, 0, 0, 0) 46.5%, rgba(64, 0, 255, 0.48) 107.58%), linear-gradient(297.17deg, rgba(255, 250, 244, 0) 60.92%, #9BCEFF 107.8%)',
  lightPaper: '#F5F5F5', // لون المكونات الورقية (رمادي فاتح)
  lightNavbar: '#E0E0E0', // لون شريط التنقل (رمادي فاتح)
  lightTextPrimary: '#212121', // اللون الأساسي للنصوص (أسود داكن)
  lightTextSecondary: '#757575', // اللون الثانوي للنصوص (رمادي داكن)
  lightGrey: {
    100: '#F5F5F5', // نفس لون الخلفية
    200: '#EEEEEE', // نفس لون الورق
    300: '#E0E0E0', // لون خلفية الزر
    400: '#BDBDBD', // لون الحدود
    500: '#9E9E9E', // لون رمادي داكن للنصوص الثانوية
  },
  lightBgButton: '#5188FF',
  lightButtonText: '#FFFFFF', // لون نص الأزرار في الوضع الفاتح (أبيض)
  lightBorder: '#BDBDBD', // لون الحدود في الوضع الفاتح

  // درجات الألوان للوضع الداكن (Dark Mode)
  darkBackground: '#121212',
  darkbgAuth:
    'linear-gradient(291.59deg, #1A1A1A 44.64%, #001B34 100.68%), linear-gradient(244.91deg, rgba(16, 0, 64, 0.73) -5.58%, rgba(0, 0, 0, 0) 72.1%)',
  darkPaper: '#1E1E1E', // لون المكونات الورقية (رمادي داكن)
  darkNavbar: '#2E2E2E', // لون شريط التنقل (رمادي داكن)
  darkTextPrimary: '#FFFFFF', // اللون الأساسي للنصوص (أبيض)
  darkTextSecondary: '#BDBDBD', // اللون الثانوي للنصوص (رمادي فاتح)
  darkGrey: {
    100: '#1E1E1E',
    200: '#2E2E2E',
    300: '#424242',
    400: '#616161',
    500: '#757575',
    600: '#9E9E9E',
  },
  darkBgButton: '#5188FF',
  darkButtonText: '#FFFFFF', // لون نص الأزرار في الوضع الداكن (أبيض)
  darkBorder: '#424242', // لون الحدود في الوضع الداكن
  BgButtonHover: '#5188FF77', // لون زر الوضع الداكن (أزرق)
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: { main: colors.primary }, // أزرق للعناصر الأساسية
    secondary: { main: colors.secondary }, // أزرق فاتح للعناصر الثانوية
    auth: { main: colors.auth }, // أزرق فاتح جدًا للتأكيد
    error: { main: colors.error }, // أحمر للخطأ
    warning: { main: colors.warning }, // أصفر للتحذير
    success: { main: colors.success }, // أخضر للنجاح
    info: { main: colors.info }, // أزرق فاتح للمعلومات

    // الخلفيات والأسطح
    background: {
      default:
        mode === 'light' ? colors.lightBackground : colors.darkBackground,
      auth: mode === 'light' ? colors.lightbgAuth : colors.darkbgAuth,
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
      active: mode === 'light' ? colors.primary : colors.secondary, // أزرق للعناصر النشطة
      hover: mode === 'light' ? colors.BgButtonHover : colors.BgButtonHover, // استخدام لون رمادي متوسط للـ hover
      selected: mode === 'light' ? colors.lightGrey[400] : colors.darkGrey[500],
      disabled: mode === 'light' ? colors.lightGrey[400] : colors.darkGrey[500],
      disabledBackground:
        mode === 'light' ? colors.lightGrey[200] : colors.darkGrey[300],
    },
  },
  shadows:
    mode === 'light'
      ? [
          'none', // elevation 0 (بدون ظل)
          '0px 2px 4px rgba(0, 0, 0, 0.1)', // elevation 1 (ظل فاتح للوضع الفاتح)
          '0px 3px 6px rgba(0, 0, 0, 0.1)', // elevation 2 (ظل فاتح للوضع الفاتح)
          '0px 4px 8px rgba(0, 0, 0, 0.1)', // elevation 3 (ظل فاتح للوضع الفاتح)
          // يمكنك إضافة المزيد من الظلال هنا
        ]
      : [
          'none', // elevation 0 (بدون ظل)
          '0px 2px 4px rgba(255, 255, 255, 0.1)', // elevation 1 (ظل فاتح للوضع الداكن)
          '0px 3px 6px rgba(255, 255, 255, 0.1)', // elevation 2 (ظل فاتح للوضع الداكن)
          '0px 4px 8px rgba(255, 255, 255, 0.1)', // elevation 3 (ظل فاتح للوضع الداكن)
          // يمكنك إضافة المزيد من الظلال هنا
        ],
});
