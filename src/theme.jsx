const colors = {
  // الألوان الأساسية
  primary: "#5188FF", // لون أساسي (أزرق)
  secondary: "#2196F3", // لون ثانوي (أزرق فاتح)
  auth: "#64B5F6", // لون ثانوي (أزرق فاتح جدًا)
  error: "#FF5252", // لون الخطأ (أحمر فاتح)
  warning: "#FFC107", // لون التحذير (أصفر)
  success: "#4CAF50", // لون النجاح (أخضر)
  info: "#2196F3", // لون المعلومات (أزرق فاتح)

  // درجات الألوان للوضع الفاتح (Light Mode)
  lightBackground: "#FFFFFF",

  // ألوان auth الأصلية
  lightbgAuth:
    "linear-gradient(63.25deg, rgba(0, 0, 0, 0) 46.5%, rgba(64, 0, 255, 0.48) 107.58%), linear-gradient(297.17deg, rgba(255, 250, 244, 0) 60.92%, #9BCEFF 107.8%)",

  // ألوان جديدة للأقسام المختلفة - وضع فاتح - متناسقة ولكن مختلفة عن auth
  // Inventory - تدرج أزرق-بنفسجي خفيف
  lightbgInventory:
    "linear-gradient(135deg, #F8F9FF 0%, #F0F4FF 50%, #E6EEFF 100%)",

  // Pharmacy - تدرج أزرق-رمادي خفيف
  lightbgPharmacy:
    "linear-gradient(135deg, #F5F7FA 0%, #E4E8F0 50%, #D8E0F0 100%)",

  // Admin - تدرج رمادي-أزرق خفيف
  lightbgAdmin:
    "linear-gradient(135deg, #F9FAFC 0%, #EEF1F6 50%, #E5EAF2 100%)",

  // خلفيات جديدة للمكونات - وضع فاتح
  // Card - تدرج أبيض-أزرق فاتح جدًا
  lightbgCard: "linear-gradient(135deg, #FFFFFF 0%, #FAFBFF 50%, #F5F7FC 100%)",

  // CardDetails - تدرج أبيض-أزرق فاتح
  lightbgCardDetails:
    "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 50%, #F0F5FF 100%)",

  // Cart - تدرج أبيض-أزرق فاتح مع لمسة من البنفسجي
  lightbgCart: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFF 50%, #F2F4FF 100%)",

  lightPaper: "#F5F5F5", // لون المكونات الورقية (رمادي فاتح)
  lightNavbar: "#E0E0E0", // لون شريط التنقل (رمادي فاتح)

  // ألوان navbar متناسقة مع الخلفيات - وضع فاتح
  lightNavbarInventory: "#E1E7FF", // أزرق-بنفسجي فاتح جدًا
  lightNavbarPharmacy: "#DCE3F0", // أزرق-رمادي فاتح
  lightNavbarAdmin: "#E0E6F0", // رمادي-أزرق فاتح

  lightTextPrimary: "#212121", // اللون الأساسي للنصوص (أسود داكن)
  lightTextSecondary: "#757575", // اللون الثانوي للنصوص (رمادي داكن)
  lightGrey: {
    100: "#F5F5F5", // نفس لون الخلفية
    200: "#EEEEEE", // نفس لون الورق
    300: "#E0E0E0", // لون خلفية الزر
    400: "#BDBDBD", // لون الحدود
    500: "#9E9E9E", // لون رمادي داكن للنصوص الثانوية
  },
  lightBgButton: "#5188FF",
  lightButtonText: "#FFFFFF", // لون نص الأزرار في الوضع الفاتح (أبيض)
  lightBorder: "#BDBDBD", // لون الحدود في الوضع الفاتح

  // درجات الألوان للوضع الداكن (Dark Mode)
  darkBackground: "#121212",

  // ألوان auth الأصلية
  darkbgAuth:
    "linear-gradient(291.59deg, #1A1A1A 44.64%, #001B34 100.68%), linear-gradient(244.91deg, rgba(16, 0, 64, 0.73) -5.58%, rgba(0, 0, 0, 0) 72.1%)",

  // ألوان جديدة للأقسام المختلفة - وضع داكن - متناسقة ولكن مختلفة عن auth
  // Inventory - تدرج أزرق-بنفسجي داكن
  darkbgInventory:
    "linear-gradient(135deg, #1A1F35 0%, #232A45 50%, #2C3356 100%)",

  // Pharmacy - تدرج أزرق-رمادي داكن
  darkbgPharmacy:
    "linear-gradient(135deg, #1A2130 0%, #212A3B 50%, #283346 100%)",

  // Admin - تدرج رمادي-أزرق داكن
  darkbgAdmin: "linear-gradient(135deg, #1A1D25 0%, #22252F 50%, #2A2E3A 100%)",

  // خلفيات جديدة للمكونات - وضع داكن
  // Card - تدرج أزرق داكن
  darkbgCard: "linear-gradient(135deg, #1E2132 0%, #252A40 50%, #2C334D 100%)",

  // CardDetails - تدرج أزرق داكن مع لمسة من البنفسجي
  darkbgCardDetails:
    "linear-gradient(135deg, #1E2035 0%, #252A45 50%, #2C3356 100%)",

  // Cart - تدرج أزرق-بنفسجي داكن
  darkbgCart: "linear-gradient(135deg, #1E1E30 0%, #252540 50%, #2C2C50 100%)",

  darkPaper: "#1E1E1E", // لون المكونات الورقية (رمادي داكن)
  darkNavbar: "#2E2E2E", // لون شريط التنقل (رمادي داكن)

  // ألوان navbar متناسقة مع الخلفيات - وضع داكن
  darkNavbarInventory: "#232A45", // أزرق-بنفسجي داكن
  darkNavbarPharmacy: "#212A3B", // أزرق-رمادي داكن
  darkNavbarAdmin: "#22252F", // رمادي-أزرق داكن

  darkTextPrimary: "#FFFFFF", // اللون الأساسي للنصوص (أبيض)
  darkTextSecondary: "#BDBDBD", // اللون الثانوي للنصوص (رمادي فاتح)
  darkGrey: {
    100: "#1E1E1E",
    200: "#2E2E2E",
    300: "#424242",
    400: "#616161",
    500: "#757575",
    600: "#9E9E9E",
  },
  darkBgButton: "#5188FF",
  darkButtonText: "#FFFFFF", // لون نص الأزرار في الوضع الداكن (أبيض)
  darkBorder: "#424242", // لون الحدود في الوضع الداكن
  BgButtonHover: "#5188FF77", // لون زر الوضع الداكن (أزرق)
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
        mode === "light" ? colors.lightBackground : colors.darkBackground,
      auth: mode === "light" ? colors.lightbgAuth : colors.darkbgAuth,
      inventory:
        mode === "light" ? colors.lightbgInventory : colors.darkbgInventory,
      pharmacy:
        mode === "light" ? colors.lightbgPharmacy : colors.darkbgPharmacy,
      admin: mode === "light" ? colors.lightbgAdmin : colors.darkbgAdmin,

      // إضافة خلفيات المكونات الجديدة
      card: mode === "light" ? colors.lightbgCard : colors.darkbgCard,
      cardDetails:
        mode === "light" ? colors.lightbgCardDetails : colors.darkbgCardDetails,
      cart: mode === "light" ? colors.lightbgCart : colors.darkbgCart,

      paper: mode === "light" ? colors.lightPaper : colors.darkPaper,
      navbar: mode === "light" ? colors.lightNavbar : colors.darkNavbar,
      navbarInventory:
        mode === "light"
          ? colors.lightNavbarInventory
          : colors.darkNavbarInventory,
      navbarPharmacy:
        mode === "light"
          ? colors.lightNavbarPharmacy
          : colors.darkNavbarPharmacy,
      navbarAdmin:
        mode === "light" ? colors.lightNavbarAdmin : colors.darkNavbarAdmin,
      button: mode === "light" ? colors.lightBgButton : colors.darkBgButton, // لون زر الخلفية
    },

    // النصوص
    text: {
      primary:
        mode === "light" ? colors.lightTextPrimary : colors.darkTextPrimary,
      secondary:
        mode === "light" ? colors.lightTextSecondary : colors.darkTextSecondary,
      button: mode === "light" ? colors.lightButtonText : colors.darkButtonText, // لون نص الأزرار
    },

    // درجات الرمادي
    grey: mode === "light" ? colors.lightGrey : colors.darkGrey,

    // الحدود
    border: {
      default: mode === "light" ? colors.lightBorder : colors.darkBorder, // لون الحدود
    },

    // ألوان إضافية
    action: {
      active: mode === "light" ? colors.primary : colors.secondary, // أزرق للعناصر النشطة
      hover: mode === "light" ? colors.BgButtonHover : colors.BgButtonHover, // استخدام لون رمادي متوسط للـ hover
      selected: mode === "light" ? colors.lightGrey[400] : colors.darkGrey[500],
      disabled: mode === "light" ? colors.lightGrey[400] : colors.darkGrey[500],
      disabledBackground:
        mode === "light" ? colors.lightGrey[200] : colors.darkGrey[300],
    },
  },
  shadows:
    mode === "light"
      ? [
          "none", // elevation 0 (بدون ظل)
          "0px 2px 4px rgba(0, 0, 0, 0.1)", // elevation 1 (ظل فاتح للوضع الفاتح)
          "0px 3px 6px rgba(0, 0, 0, 0.1)", // elevation 2 (ظل فاتح للوضع الفاتح)
          "0px 4px 8px rgba(0, 0, 0, 0.1)", // elevation 3 (ظل فاتح للوضع الفاتح)
          // يمكنك إضافة المزيد من الظلال هنا
        ]
      : [
          "none", // elevation 0 (بدون ظل)
          "0px 2px 4px rgba(255, 255, 255, 0.1)", // elevation 1 (ظل فاتح للوضع الداكن)
          "0px 3px 6px rgba(255, 255, 255, 0.1)", // elevation 2 (ظل فاتح للوضع الداكن)
          "0px 4px 8px rgba(255, 255, 255, 0.1)", // elevation 3 (ظل فاتح للوضع الداكن)
          // يمكنك إضافة المزيد من الظلال هنا
        ],
});
