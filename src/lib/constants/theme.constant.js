// استيراد الثيم
import { useTheme } from "@mui/material/styles";

// دالة للحصول على المتغيرات
export const useThemeConstants = () => {
  const theme = useTheme();

  // الألوان الأساسية
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const auth = theme.palette.auth.main;
  const error = theme.palette.error.main;
  const warning = theme.palette.warning.main;
  const success = theme.palette.success.main;
  const info = theme.palette.info.main;

  // الخلفيات
  const background = theme.palette.background.default;
  const authBackground = theme.palette.background.auth;
  const inventoryBackground = theme.palette.background.inventory;
  const pharmacyBackground = theme.palette.background.pharmacy;
  const adminBackground = theme.palette.background.admin;

  // خلفيات المكونات
  const cardBackground = theme.palette.background.card;
  const cardDetailsBackground = theme.palette.background.cardDetails;
  const cartBackground = theme.palette.background.cart;
  const paperBackground = theme.palette.background.paper;

  // شريط التنقل
  const navbarBackground = theme.palette.background.navbar;
  const navbarInventoryBackground = theme.palette.background.navbarInventory;
  const navbarPharmacyBackground = theme.palette.background.navbarPharmacy;
  const navbarAdminBackground = theme.palette.background.navbarAdmin;

  // النصوص
  const textPrimary = theme.palette.text.primary;
  const textSecondary = theme.palette.text.secondary;
  const buttonText = theme.palette.text.button;

  // الأزرار
  const buttonBackground = theme.palette.background.button;
  const buttonHover = theme.palette.action.hover;

  // الحدود
  const border = theme.palette.border.default;

  // أنماط الجداول
  const tableHeader = theme.palette.table.header;
  const tableHeaderText = theme.palette.table.headerText;
  const tableRow = theme.palette.table.row;
  const tableRowAlt = theme.palette.table.rowAlt;
  const tableRowHover = theme.palette.table.rowHover;
  const tableBorder = theme.palette.table.border;
  const tableText = theme.palette.table.text;

  // أنماط الـ Sidebar
  const sidebarBackground = theme.palette.sidebar.background;
  const sidebarBorder = theme.palette.sidebar.border;
  const sidebarText = theme.palette.sidebar.text;
  const sidebarTextSecondary = theme.palette.sidebar.textSecondary;
  const sidebarItemHover = theme.palette.sidebar.itemHover;
  const sidebarItemActive = theme.palette.sidebar.itemActive;
  const sidebarItemActiveBackground =
    theme.palette.sidebar.itemActiveBackground;
  const sidebarIcon = theme.palette.sidebar.icon;
  const sidebarHeader = theme.palette.sidebar.header;
  const sidebarFooter = theme.palette.sidebar.footer;

  // الظلال (تستخدم الظلال المحدثة تلقائيًا)
  const shadow1 = theme.shadows[1];
  const shadow2 = theme.shadows[2];
  const shadow3 = theme.shadows[3];

  const typography = {
    fontFamily: theme.typography.fontFamily,
    h1: {
      fontSize: theme.typography.h1.fontSize,
      fontWeight: theme.typography.h1.fontWeight,
      lineHeight: theme.typography.h1.lineHeight,
    },
    h2: {
      fontSize: theme.typography.h2.fontSize,
      fontWeight: theme.typography.h2.fontWeight,
      lineHeight: theme.typography.h2.lineHeight,
    },
    h3: {
      fontSize: theme.typography.h3.fontSize,
      fontWeight: theme.typography.h3.fontWeight,
      lineHeight: theme.typography.h3.lineHeight,
    },
    h4: {
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight,
      lineHeight: theme.typography.h4.lineHeight,
    },
    h5: {
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.h5.fontWeight,
      lineHeight: theme.typography.h5.lineHeight,
    },
    h6: {
      fontSize: theme.typography.h6.fontSize,
      fontWeight: theme.typography.h6.fontWeight,
      lineHeight: theme.typography.h6.lineHeight,
    },
    body1: {
      fontSize: theme.typography.body1.fontSize,
      lineHeight: theme.typography.body1.lineHeight,
    },
    body2: {
      fontSize: theme.typography.body2.fontSize,
      lineHeight: theme.typography.body2.lineHeight,
    },
    button: {
      fontSize: theme.typography.button.fontSize,
      fontWeight: theme.typography.button.fontWeight,
      lineHeight: theme.typography.button.lineHeight,
      textTransform: theme.typography.button.textTransform,
    },
  };

  return {
    // الألوان الأساسية
    primary,
    secondary,
    auth,
    error,
    warning,
    success,
    info,

    // الخلفيات
    background,
    authBackground,
    inventoryBackground,
    pharmacyBackground,
    adminBackground,

    // خلفيات المكونات
    cardBackground,
    cardDetailsBackground,
    cartBackground,
    paperBackground,

    // شريط التنقل
    navbarBackground,
    navbarInventoryBackground,
    navbarPharmacyBackground,
    navbarAdminBackground,

    // النصوص
    textPrimary,
    textSecondary,
    buttonText,

    // الأزرار
    buttonBackground,
    buttonHover,

    // الحدود
    border,

    // الظلال
    shadow1,
    shadow2,
    shadow3,

    // أنماط الجداول
    tableHeader,
    tableHeaderText,
    tableRow,
    tableRowAlt,
    tableRowHover,
    tableBorder,
    tableText,

    // أنماط الـ Sidebar
    sidebarBackground,
    sidebarBorder,
    sidebarText,
    sidebarTextSecondary,
    sidebarItemHover,
    sidebarItemActive,
    sidebarItemActiveBackground,
    sidebarIcon,
    sidebarHeader,
    sidebarFooter,

    // أنماط Typography
    typography,
  };
};
