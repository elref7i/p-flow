// استيراد الثيم
import { useTheme, useMediaQuery } from "@mui/material";

// دالة للحصول على المتغيرات
export const useThemeConstants = () => {
  const theme = useTheme();

  // Media Query
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // الألوان الأساسية
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const auth = theme.palette.auth.main;
  const error = theme.palette.error.main;
  const warning = theme.palette.warning.main;
  const success = theme.palette.success.main;
  const info = theme.palette.info.main;

  // الخلفيات الرئيسية
  const background = theme.palette.background.default;
  const backgroundElevated = theme.palette.background.elevated;
  const backgroundLowered = theme.palette.background.lowered;
  const backgroundBlue = theme.palette.background.blue;

  // خلفيات الأقسام
  const authBackground = theme.palette.background.auth;
  const inventoryBackground = theme.palette.background.inventory;
  const pharmacyBackground = theme.palette.background.pharmacy;
  const adminBackground = theme.palette.background.admin;

  // خلفيات المكونات
  const cardBackground = theme.palette.background.card;
  const cardHoverBackground = theme.palette.background.cardHover;
  const cardActiveBackground = theme.palette.background.cardActive;
  const cardDetailsBackground = theme.palette.background.cardDetails;
  const cartBackground = theme.palette.background.cart;
  const paperBackground = theme.palette.background.paper;
  const sidebarBackground = theme.palette.background.sidebar;
  const headerBackground = theme.palette.background.header;
  const footerBackground = theme.palette.background.footer;
  const tooltipBackground = theme.palette.background.tooltip;
  const badgeBackground = theme.palette.background.badge;

  // خلفيات لوحة المعلومات
  const dashboardBackground = theme.palette.background.dashboard;
  const statsBackground = theme.palette.background.stats;
  const statsSecondaryBackground = theme.palette.background.statsSecondary;
  const chartsBackground = theme.palette.background.charts;
  const tableBackground = theme.palette.background.table;
  const tableHeaderBackground = theme.palette.background.tableHeader;
  const tableRowBackground = theme.palette.background.tableRow;
  const tableRowAltBackground = theme.palette.background.tableRowAlt;
  const tableRowHoverBackground = theme.palette.background.tableRowHover;

  // التدرجات اللونية
  const gradientBlue = theme.palette.background.gradientBlue;
  const gradientNavy = theme.palette.background.gradientNavy;
  const gradientChart = theme.palette.background.gradientChart;
  const gradientPurple = theme.palette.background.gradientPurple;
  const gradientGreen = theme.palette.background.gradientGreen;

  // خلفيات خاصة بالوضع الداكن
  const navyBackground = theme.palette.background.navy;
  const deepBlueBackground = theme.palette.background.deepBlue;

  // شريط التنقل
  const navbarBackground = theme.palette.background.navbar;
  const navbarInventoryBackground = theme.palette.background.navbarInventory;
  const navbarPharmacyBackground = theme.palette.background.navbarPharmacy;
  const navbarAdminBackground = theme.palette.background.navbarAdmin;

  // النصوص
  const textPrimary = theme.palette.text.primary;
  const textSecondary = theme.palette.text.secondary;
  const textTertiary = theme.palette.text.tertiary;
  const textInverted = theme.palette.text.inverted;
  const textDisabled = theme.palette.text.disabled;
  const textLink = theme.palette.text.link;
  const textSuccess = theme.palette.text.success;
  const textWarning = theme.palette.text.warning;
  const textError = theme.palette.text.error;
  const buttonText = theme.palette.text.button;
  const buttonTextDisabled = theme.palette.text.buttonDisabled;

  // الأزرار
  const buttonBackground = theme.palette.background.button;
  const buttonHoverBackground = theme.palette.background.buttonHover;
  const buttonActiveBackground = theme.palette.background.buttonActive;
  const buttonDisabledBackground = theme.palette.background.buttonDisabled;
  const buttonHover = theme.palette.action.hover;

  // حقول الإدخال
  const inputBackground = theme.palette.background.input;
  const inputHoverBackground = theme.palette.background.inputHover;
  const inputFocusBackground = theme.palette.background.inputFocus;
  const inputDisabledBackground = theme.palette.background.inputDisabled;

  // الحدود
  const border = theme.palette.border.default;
  const borderFocus = theme.palette.border.focus;
  const borderHover = theme.palette.border.hover;
  const inputBorder = theme.palette.border.input;
  const inputBorderHover = theme.palette.border.inputHover;
  const inputBorderFocus = theme.palette.border.inputFocus;
  const inputBorderDisabled = theme.palette.border.inputDisabled;
  const tableBorder = theme.palette.border.table;

  // أنماط الجداول
  const tableHeader = theme.palette.table.header;
  const tableHeaderText = theme.palette.table.headerText;
  const tableRow = theme.palette.table.row;
  const tableRowAlt = theme.palette.table.rowAlt;
  const tableRowHover = theme.palette.table.rowHover;
  const tableBorderColor = theme.palette.table.border;
  const tableText = theme.palette.table.text;

  // أنماط الـ Sidebar
  const sidebarBackgroundColor = theme.palette.sidebar.background;
  const sidebarBorder = theme.palette.sidebar.border;
  const sidebarText = theme.palette.sidebar.text;
  const sidebarTextSecondary = theme.palette.sidebar.textSecondary;
  const sidebarItemHover = theme.palette.sidebar.itemHover;
  const sidebarItemActive = theme.palette.sidebar.itemActive;
  const sidebarItemActiveBackground =
    theme.palette.sidebar.itemActiveBackground;
  const sidebarIcon = theme.palette.sidebar.icon;
  const sidebarIconActive = theme.palette.sidebar.iconActive;
  const sidebarHeader = theme.palette.sidebar.header;
  const sidebarFooter = theme.palette.sidebar.footer;

  // ألوان الرسوم البيانية
  const chartBlue = theme.palette.chart.blue;
  const chartGreen = theme.palette.chart.green;
  const chartRed = theme.palette.chart.red;
  const chartYellow = theme.palette.chart.yellow;
  const chartPurple = theme.palette.chart.purple;
  const chartTeal = theme.palette.chart.teal;
  const chartOrange = theme.palette.chart.orange;
  const chartPink = theme.palette.chart.pink;
  const chartGray = theme.palette.chart.gray;

  // مؤشرات الحالة
  const statusOnline = theme.palette.status.online;
  const statusOffline = theme.palette.status.offline;
  const statusAway = theme.palette.status.away;
  const statusBusy = theme.palette.status.busy;

  // الظلال
  const shadowSm = theme.shadows[1];
  const shadowMd = theme.shadows[2];
  const shadowLg = theme.shadows[3];
  const shadowXl = theme.shadows[4];
  const shadow2xl = theme.shadows[5];
  const shadowInner = theme.shadows[6];
  const shadowButton = theme.shadows[7];
  const shadowBlue = theme.shadows[8];

  // الأشكال
  const borderRadius = theme.shape.borderRadius;
  const borderRadiusSm = theme.shape.borderRadiusSm;
  const borderRadiusLg = theme.shape.borderRadiusLg;
  const borderRadiusXl = theme.shape.borderRadiusXl;
  const borderRadiusFull = theme.shape.borderRadiusFull;

  // الانتقالات
  const transitionEasingEaseInOut = theme.transitions.easing.easeInOut;
  const transitionEasingEaseOut = theme.transitions.easing.easeOut;
  const transitionEasingEaseIn = theme.transitions.easing.easeIn;
  const transitionEasingSharp = theme.transitions.easing.sharp;
  const transitionDurationShortest = theme.transitions.duration.shortest;
  const transitionDurationShorter = theme.transitions.duration.shorter;
  const transitionDurationShort = theme.transitions.duration.short;
  const transitionDurationStandard = theme.transitions.duration.standard;
  const transitionDurationComplex = theme.transitions.duration.complex;
  const transitionDurationEnteringScreen =
    theme.transitions.duration.enteringScreen;
  const transitionDurationLeavingScreen =
    theme.transitions.duration.leavingScreen;

  // مؤشرات z-index
  const zIndexMobileStepper = theme.zIndex.mobileStepper;
  const zIndexFab = theme.zIndex.fab;
  const zIndexSpeedDial = theme.zIndex.speedDial;
  const zIndexAppBar = theme.zIndex.appBar;
  const zIndexDrawer = theme.zIndex.drawer;
  const zIndexModal = theme.zIndex.modal;
  const zIndexSnackbar = theme.zIndex.snackbar;
  const zIndexTooltip = theme.zIndex.tooltip;

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
    caption: {
      fontSize: theme.typography.caption.fontSize,
      lineHeight: theme.typography.caption.lineHeight,
    },
    overline: {
      fontSize: theme.typography.overline.fontSize,
      fontWeight: theme.typography.overline.fontWeight,
      letterSpacing: theme.typography.overline.letterSpacing,
      lineHeight: theme.typography.overline.lineHeight,
      textTransform: theme.typography.overline.textTransform,
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

    // الخلفيات الرئيسية
    background,
    backgroundElevated,
    backgroundLowered,
    backgroundBlue,

    // خلفيات الأقسام
    authBackground,
    inventoryBackground,
    pharmacyBackground,
    adminBackground,

    // خلفيات المكونات
    cardBackground,
    cardHoverBackground,
    cardActiveBackground,
    cardDetailsBackground,
    cartBackground,
    paperBackground,
    sidebarBackground,
    headerBackground,
    footerBackground,
    tooltipBackground,
    badgeBackground,

    // خلفيات لوحة المعلومات
    dashboardBackground,
    statsBackground,
    statsSecondaryBackground,
    chartsBackground,
    tableBackground,
    tableHeaderBackground,
    tableRowBackground,
    tableRowAltBackground,
    tableRowHoverBackground,

    // التدرجات اللونية
    gradientBlue,
    gradientNavy,
    gradientChart,
    gradientPurple,
    gradientGreen,

    // خلفيات خاصة بالوضع الداكن
    navyBackground,
    deepBlueBackground,

    // شريط التنقل
    navbarBackground,
    navbarInventoryBackground,
    navbarPharmacyBackground,
    navbarAdminBackground,

    // النصوص
    textPrimary,
    textSecondary,
    textTertiary,
    textInverted,
    textDisabled,
    textLink,
    textSuccess,
    textWarning,
    textError,
    buttonText,
    buttonTextDisabled,

    // الأزرار
    buttonBackground,
    buttonHoverBackground,
    buttonActiveBackground,
    buttonDisabledBackground,
    buttonHover,

    // حقول الإدخال
    inputBackground,
    inputHoverBackground,
    inputFocusBackground,
    inputDisabledBackground,
    inputBorder,
    inputBorderHover,
    inputBorderFocus,
    inputBorderDisabled,

    // الحدود
    border,
    borderFocus,
    borderHover,
    tableBorder,

    // أنماط الجداول
    tableHeader,
    tableHeaderText,
    tableRow,
    tableRowAlt,
    tableRowHover,
    tableBorderColor,
    tableText,

    // أنماط الـ Sidebar
    sidebarBackgroundColor,
    sidebarBorder,
    sidebarText,
    sidebarTextSecondary,
    sidebarItemHover,
    sidebarItemActive,
    sidebarItemActiveBackground,
    sidebarIcon,
    sidebarIconActive,
    sidebarHeader,
    sidebarFooter,

    // ألوان الرسوم البيانية
    chartBlue,
    chartGreen,
    chartRed,
    chartYellow,
    chartPurple,
    chartTeal,
    chartOrange,
    chartPink,
    chartGray,

    // مؤشرات الحالة
    statusOnline,
    statusOffline,
    statusAway,
    statusBusy,

    // الظلال
    shadowSm,
    shadowMd,
    shadowLg,
    shadowXl,
    shadow2xl,
    shadowInner,
    shadowButton,
    shadowBlue,

    // الأشكال
    borderRadius,
    borderRadiusSm,
    borderRadiusLg,
    borderRadiusXl,
    borderRadiusFull,

    // الانتقالات
    transitionEasingEaseInOut,
    transitionEasingEaseOut,
    transitionEasingEaseIn,
    transitionEasingSharp,
    transitionDurationShortest,
    transitionDurationShorter,
    transitionDurationShort,
    transitionDurationStandard,
    transitionDurationComplex,
    transitionDurationEnteringScreen,
    transitionDurationLeavingScreen,

    // مؤشرات z-index
    zIndexMobileStepper,
    zIndexFab,
    zIndexSpeedDial,
    zIndexAppBar,
    zIndexDrawer,
    zIndexModal,
    zIndexSnackbar,
    zIndexTooltip,

    // أنماط Typography
    typography,

    //Media query
    isMobile,
  };
};
