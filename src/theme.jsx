//* Version 1
const colors = {
  // Primary colors
  primary: "#2D7FF9", // Modern azure blue as primary
  secondary: "#555555", // Medium gray as secondary
  auth: "#64B5F6", // Keeping auth color unchanged
  error: "#FF5252", // Keeping error color
  warning: "#FFC107", // Keeping warning color
  success: "#4CAF50", // Keeping success color
  info: "#2196F3", // Keeping info color

  // Light Mode
  lightBackground: "#FFFFFF",

  // Keeping auth backgrounds unchanged
  lightbgAuth:
    "linear-gradient(63.25deg, rgba(0, 0, 0, 0) 46.5%, rgba(64, 0, 255, 0.48) 107.58%), linear-gradient(297.17deg, rgba(255, 250, 244, 0) 60.92%, #9BCEFF 107.8%)",

  // New section backgrounds - light mode
  // Inventory - light gray gradient with subtle blue hint
  lightbgInventory:
    "linear-gradient(135deg, #FFFFFF 0%, #F5F7FA 50%, #EFF3F8 100%)",

  // Pharmacy - light gray with subtle medical blue hint
  lightbgPharmacy:
    "linear-gradient(135deg, #FFFFFF 0%, #F5F7FA 50%, #EFF3F8 100%)",

  // Admin - matching inventory for consistency
  lightbgAdmin:
    "linear-gradient(135deg, #FFFFFF 0%, #F5F7FA 50%, #EFF3F8 100%)",

  // Component backgrounds - light mode
  lightbgCard: "linear-gradient(135deg, #FFFFFF 0%, #F8F7FF 50%, #F3F0FF 100%)",
  lightbgCardDetails:
    "linear-gradient(135deg, #FFFFFF 0%, #F8F7FF 50%, #F3F0FF 100%)",
  lightbgCart: "linear-gradient(135deg, #FFFFFF 0%, #F8F7FF 50%, #F3F0FF 100%)",

  lightPaper: "#F5F7FA",
  lightNavbar: "#E6EBF5",

  // Navbar colors - light mode
  lightNavbarInventory: "#E6EBF5",
  lightNavbarPharmacy: "#E6EBF5", // Same blue tint for consistency
  lightNavbarAdmin: "#E6EBF5",

  lightTextPrimary: "#212121",
  lightTextSecondary: "#757575",
  lightGrey: {
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
  },
  lightBgButton: "#2D7FF9", // Azure blue buttons
  lightButtonText: "#FFFFFF",
  lightBorder: "#BDBDBD",

  // Dark Mode
  darkBackground: "#121212",

  // Keeping auth backgrounds unchanged
  darkbgAuth:
    "linear-gradient(291.59deg, #1A1A1A 44.64%, #001B34 100.68%), linear-gradient(244.91deg, rgba(16, 0, 64, 0.73) -5.58%, rgba(0, 0, 0, 0) 72.1%)",

  // New section backgrounds - dark mode
  // Inventory - dark gray gradient with subtle blue hint
  darkbgInventory:
    "linear-gradient(135deg, #1A1A1A 0%, #1E2228 50%, #232830 100%)",

  // Pharmacy - dark gray with subtle medical blue hint
  darkbgPharmacy:
    "linear-gradient(135deg, #1A1A1A 0%, #1E2228 50%, #232830 100%)",

  // Admin - matching inventory for consistency
  darkbgAdmin: "linear-gradient(135deg, #1A1A1A 0%, #1E2228 50%, #232830 100%)",

  // Component backgrounds - dark mode
  darkbgCard: "linear-gradient(135deg, #2A2A2A 0%, #2F3645 50%, #3A4454 100%)",
  darkbgCardDetails:
    "linear-gradient(135deg, #2A2A2A 0%, #2F3645 50%, #3A4454 100%)",
  darkbgCart: "linear-gradient(135deg, #2A2A2A 0%, #2F3645 50%, #3A4454 100%)",

  // Testing
  // darkbgCard: "linear-gradient(135deg, #2A2A2A 0%, #2F3645 50%, #3A4454 100%)",
  // darkbgCardDetails:
  //   "linear-gradient(135deg, #2A2A2A 0%, #2F3645 50%, #3A4454 100%)",
  // darkbgCart: "linear-gradient(135deg, #2A2A2A 0%, #2F3645 50%, #3A4454 100%)",

  darkPaper: "#1E2228",
  darkNavbar: "#2A303A",

  // Navbar colors - dark mode
  darkNavbarInventory: "#2A303A",
  darkNavbarPharmacy: "#2A303A", // Same blue tint for consistency
  darkNavbarAdmin: "#2A303A",

  darkTextPrimary: "#FFFFFF",
  darkTextSecondary: "#BDBDBD",
  darkGrey: {
    100: "#1E1E1E",
    200: "#2E2E2E",
    300: "#424242",
    400: "#616161",
    500: "#757575",
    600: "#9E9E9E",
  },
  darkBgButton: "#2D7FF9", // Azure blue buttons
  darkButtonText: "#FFFFFF",
  darkBorder: "#424242",
  BgButtonHover: "#2D7FF9",

  // إضافة ألوان الجداول - الوضع الفاتح
  lightTableHeader: "#EBF3FF", // خلفية رأس الجدول
  lightTableHeaderText: "#1E40AF", // لون نص رأس الجدول
  lightTableRow: "#FFFFFF", // خلفية الصف
  lightTableRowAlt: "#F5F9FF", // خلفية الصف البديل
  lightTableRowHover: "#E6EFFF", // خلفية الصف عند التحويم
  lightTableBorder: "#D1E0FF", // لون حدود الجدول
  lightTableText: "#212121", // لون نص الجدول

  // إضافة ألوان الجداول - الوضع الداكن
  darkTableHeader: "#1E293B", // خلفية رأس الجدول
  darkTableHeaderText: "#93C5FD", // لون نص رأس الجدول
  darkTableRow: "#0F172A", // خلفية الصف
  darkTableRowAlt: "#1E293B", // خلفية الصف البديل
  darkTableRowHover: "#334155", // خلفية الصف عند التحويم
  darkTableBorder: "#334155", // لون حدود الجدول
  darkTableText: "#F8FAFC", // لون نص الجدول

  // الظلال المحدثة - الوضع الفاتح
  lightShadow1: "0px 2px 7px 0px rgba(59, 130, 246, 0.75)",
  lightShadow2: "0px 1px 2px 0px rgba(59, 130, 246, 0.50)",
  lightShadow3: "inset 0px 1px 4px 0px rgba(59, 130, 246, .30)",

  // الظلال المحدثة - الوضع الداكن (أكثر وضوحًا)
  darkShadow1: "0px 1px 6px 0px rgba(59, 130, 246, 0.75)",
  darkShadow2: "0px 1px 2px 0px rgba(59, 130, 246, 0.50)",
  darkShadow3: "inset 0px 1px 6px 0px rgba(59, 130, 246, .85)",

  // إضافة ألوان الـ Sidebar - الوضع الفاتح
  lightSidebarBackground: "#F8FAFF", // خلفية الـ Sidebar
  lightSidebarBorder: "#D1E0FF", // لون حدود الـ Sidebar
  lightSidebarText: "#1E40AF", // لون النص الأساسي في الـ Sidebar
  lightSidebarTextSecondary: "#3B82F6", // لون النص الثانوي في الـ Sidebar
  lightSidebarItemHover: "#EBF3FF", // لون العنصر عند التحويم في الـ Sidebar
  lightSidebarItemActive: "#3B82F6", // لون العنصر النشط في الـ Sidebar
  lightSidebarItemActiveBackground: "#EBF3FF", // خلفية العنصر النشط في الـ Sidebar
  lightSidebarIcon: "#3B82F6", // لون الأيقونات في الـ Sidebar
  lightSidebarHeader: "#E6EFFF", // خلفية رأس الـ Sidebar
  lightSidebarFooter: "#E6EFFF", // خلفية تذييل الـ Sidebar

  // إضافة ألوان الـ Sidebar - الوضع الداكن
  darkSidebarBackground: "#0F172A", // خلفية الـ Sidebar
  darkSidebarBorder: "#1E293B", // لون حدود الـ Sidebar
  darkSidebarText: "#F8FAFC", // لون النص الأساسي في الـ Sidebar
  darkSidebarTextSecondary: "#93C5FD", // لون النص الثانوي في الـ Sidebar
  darkSidebarItemHover: "#1E293B", // لون العنصر عند التحويم في الـ Sidebar
  darkSidebarItemActive: "#3B82F6", // لون العنصر النشط في الـ Sidebar
  darkSidebarItemActiveBackground: "#1E293B", // خلفية العنصر النشط في الـ Sidebar
  darkSidebarIcon: "#60A5FA", // لون الأيقونات في الـ Sidebar
  darkSidebarHeader: "#0F172A", // خلفية رأس الـ Sidebar
  darkSidebarFooter: "#0F172A", // خلفية تذييل الـ Sidebar
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    auth: { main: colors.auth }, // Keeping auth color unchanged
    error: { main: colors.error },
    warning: { main: colors.warning },
    success: { main: colors.success },
    info: { main: colors.info },

    background: {
      default:
        mode === "light" ? colors.lightBackground : colors.darkBackground,
      auth: mode === "light" ? colors.lightbgAuth : colors.darkbgAuth,
      inventory:
        mode === "light" ? colors.lightbgInventory : colors.darkbgInventory,
      pharmacy:
        mode === "light" ? colors.lightbgPharmacy : colors.darkbgPharmacy,
      admin: mode === "light" ? colors.lightbgAdmin : colors.darkbgAdmin,

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
      button: mode === "light" ? colors.lightBgButton : colors.darkBgButton,
    },
    table: {
      header:
        mode === "light" ? colors.lightTableHeader : colors.darkTableHeader,
      headerText:
        mode === "light"
          ? colors.lightTableHeaderText
          : colors.darkTableHeaderText,
      row: mode === "light" ? colors.lightTableRow : colors.darkTableRow,
      rowAlt:
        mode === "light" ? colors.lightTableRowAlt : colors.darkTableRowAlt,
      rowHover:
        mode === "light" ? colors.lightTableRowHover : colors.darkTableRowHover,
      border:
        mode === "light" ? colors.lightTableBorder : colors.darkTableBorder,
      text: mode === "light" ? colors.lightTableText : colors.darkTableText,
    },

    sidebar: {
      background:
        mode === "light"
          ? colors.lightSidebarBackground
          : colors.darkSidebarBackground,
      border:
        mode === "light" ? colors.lightSidebarBorder : colors.darkSidebarBorder,
      text: mode === "light" ? colors.lightSidebarText : colors.darkSidebarText,
      textSecondary:
        mode === "light"
          ? colors.lightSidebarTextSecondary
          : colors.darkSidebarTextSecondary,
      itemHover:
        mode === "light"
          ? colors.lightSidebarItemHover
          : colors.darkSidebarItemHover,
      itemActive:
        mode === "light"
          ? colors.lightSidebarItemActive
          : colors.darkSidebarItemActive,
      itemActiveBackground:
        mode === "light"
          ? colors.lightSidebarItemActiveBackground
          : colors.darkSidebarItemActiveBackground,
      icon: mode === "light" ? colors.lightSidebarIcon : colors.darkSidebarIcon,
      header:
        mode === "light" ? colors.lightSidebarHeader : colors.darkSidebarHeader,
      footer:
        mode === "light" ? colors.lightSidebarFooter : colors.darkSidebarFooter,
    },

    text: {
      primary:
        mode === "light" ? colors.lightTextPrimary : colors.darkTextPrimary,
      secondary:
        mode === "light" ? colors.lightTextSecondary : colors.darkTextSecondary,
      button: mode === "light" ? colors.lightButtonText : colors.darkButtonText,
    },

    grey: mode === "light" ? colors.lightGrey : colors.darkGrey,

    border: {
      default: mode === "light" ? colors.lightBorder : colors.darkBorder,
    },

    action: {
      active: colors.primary, // Use primary blue for active elements in both modes
      hover: mode === "light" ? colors.BgButtonHover : colors.BgButtonHover,
      selected: mode === "light" ? colors.lightGrey[400] : colors.darkGrey[500],
      disabled: mode === "light" ? colors.lightGrey[400] : colors.darkGrey[500],
      disabledBackground:
        mode === "light" ? colors.lightGrey[200] : colors.darkGrey[300],
    },
  },
  shadows: [
    "none",
    mode === "light" ? colors.lightShadow1 : colors.darkShadow1,
    mode === "light" ? colors.lightShadow2 : colors.darkShadow2,
    mode === "light" ? colors.lightShadow3 : colors.darkShadow3,
    // mode === "light" ? colors.sadowWarinng : colors.sadowWarinng,
    // ... باقي الظلال
  ],
  typography: {
    fontFamily:
      '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: {
      fontSize: "1.7rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "1.6rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: "1.4rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.75,
      textTransform: "none",
    },
  },
});
