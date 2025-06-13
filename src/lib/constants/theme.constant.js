"use client";

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

  // خلفيات إضافية
  const backgroundBlueSoft = theme.palette.background.blueSoft;
  const backgroundBlueLight = theme.palette.background.blueLight;
  const backgroundBlueMedium = theme.palette.background.blueMedium;
  const backgroundPurpleSoft = theme.palette.background.purpleSoft;
  const backgroundPurpleLight = theme.palette.background.purpleLight;
  const backgroundPurpleMedium = theme.palette.background.purpleMedium;
  const backgroundGreenSoft = theme.palette.background.greenSoft;
  const backgroundGreenLight = theme.palette.background.greenLight;
  const backgroundGreenMedium = theme.palette.background.greenMedium;
  const backgroundYellowSoft = theme.palette.background.yellowSoft;
  const backgroundYellowLight = theme.palette.background.yellowLight;
  const backgroundYellowMedium = theme.palette.background.yellowMedium;
  const backgroundRedSoft = theme.palette.background.redSoft;
  const backgroundRedLight = theme.palette.background.redLight;
  const backgroundRedMedium = theme.palette.background.redMedium;
  const backgroundGraySoft = theme.palette.background.graySoft;
  const backgroundGrayLight = theme.palette.background.grayLight;
  const backgroundGrayMedium = theme.palette.background.grayMedium;
  const backgroundYellow = theme.palette.background.yellow;
  const backgroundGreen = theme.palette.background.green;
  const backgroundPurple = theme.palette.background.purple;
  const backgroundRed = theme.palette.background.red;
  const backgroundGray = theme.palette.background.gray;

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

  // خلفيات مكونات إضافية
  const cardBlueBackground = theme.palette.background.cardBlue;
  const cardPurpleBackground = theme.palette.background.cardPurple;
  const cardGreenBackground = theme.palette.background.cardGreen;
  const cardYellowBackground = theme.palette.background.cardYellow;
  const cardRedBackground = theme.palette.background.cardRed;
  const cardGrayBackground = theme.palette.background.cardGray;
  const alertInfoBackground = theme.palette.background.alertInfo;
  const alertSuccessBackground = theme.palette.background.alertSuccess;
  const alertWarningBackground = theme.palette.background.alertWarning;
  const alertErrorBackground = theme.palette.background.alertError;
  const modalBackground = theme.palette.background.modal;
  const drawerBackground = theme.palette.background.drawer;
  const popoverBackground = theme.palette.background.popover;
  const menuBackground = theme.palette.background.menu;

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

  // خلفيات إحصائيات إضافية
  const statsBlueBackground = theme.palette.background.statsBlue;
  const statsPurpleBackground = theme.palette.background.statsPurple;
  const statsGreenBackground = theme.palette.background.statsGreen;
  const statsYellowBackground = theme.palette.background.statsYellow;
  const statsRedBackground = theme.palette.background.statsRed;
  const statsTealBackground = theme.palette.background.statsTeal;
  const statsOrangeBackground = theme.palette.background.statsOrange;
  const statsPinkBackground = theme.palette.background.statsPink;
  const statsIndigoBackground = theme.palette.background.statsIndigo;

  // التدرجات اللونية
  const gradientBlue = theme.palette.background.gradientBlue;
  const gradientNavy = theme.palette.background.gradientNavy;
  const gradientChart = theme.palette.background.gradientChart;
  const gradientPurple = theme.palette.background.gradientPurple;
  const gradientGreen = theme.palette.background.gradientGreen;

  // تدرجات لونية إضافية
  const gradientBlueToGreen = theme.palette.background.gradientBlueToGreen;
  const gradientPurpleToBlue = theme.palette.background.gradientPurpleToBlue;
  const gradientYellowToOrange =
    theme.palette.background.gradientYellowToOrange;
  const gradientRedToPurple = theme.palette.background.gradientRedToPurple;
  const gradientGrayToBlue = theme.palette.background.gradientGrayToBlue;
  const gradientBlueGray = theme.palette.background.gradientBlueGray;

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

  // ألوان رسوم بيانية إضافية
  const chartIndigo = theme.palette.chart.indigo;
  const chartCyan = theme.palette.chart.cyan;
  const chartAmber = theme.palette.chart.amber;
  const chartEmerald = theme.palette.chart.emerald;
  const chartViolet = theme.palette.chart.violet;
  const chartFuchsia = theme.palette.chart.fuchsia;
  const chartRose = theme.palette.chart.rose;
  const chartSky = theme.palette.chart.sky;
  const chartLime = theme.palette.chart.lime;

  // مؤشرات الحالة
  const statusOnline = theme.palette.status.online;
  const statusOffline = theme.palette.status.offline;
  const statusAway = theme.palette.status.away;
  const statusBusy = theme.palette.status.busy;

  // مؤشرات حالة إضافية
  const statusAvailable = theme.palette.status.available;
  const statusUnavailable = theme.palette.status.unavailable;
  const statusPending = theme.palette.status.pending;
  const statusApproved = theme.palette.status.approved;
  const statusRejected = theme.palette.status.rejected;
  const statusInProgress = theme.palette.status.inProgress;
  const statusCompleted = theme.palette.status.completed;
  const statusCancelled = theme.palette.status.cancelled;

  // الظلال
  const shadowSm = theme.shadows[1];
  const shadowMd = theme.shadows[2];
  const shadowLg = theme.shadows[3];
  const shadowXl = theme.shadows[4];
  const shadow2xl = theme.shadows[5];
  const shadowInner = theme.shadows[6];
  const shadowButton = theme.shadows[7];
  const shadowBlue = theme.shadows[8];

  // ظلال إضافية
  const shadowPurple = theme.shadows[10];
  const shadowGreen = theme.shadows[11];
  const shadowYellow = theme.shadows[12];
  const shadowRed = theme.shadows[13];
  const shadowFloating = theme.shadows[14];

  // الأشكال
  const borderRadius = theme.shape.borderRadius;
  const borderRadiusSm = theme.shape.borderRadiusSm;
  const borderRadiusLg = theme.shape.borderRadiusLg;
  const borderRadiusXl = theme.shape.borderRadiusXl;
  const borderRadiusFull = theme.shape.borderRadiusFull;

  // الانتقالات
  const transitionStandard = theme.transitions.standard; // "all 300ms cubic-bezier(0.4, 0, 0.2, 1)"
  const transitionEasingEaseInOut = theme.transitions.easeInOut;
  const transitionEasingEaseOut = theme.transitions.easeOut;
  const transitionEasingEaseIn = theme.transitions.easeIn;
  const transitionEasingSharp = theme.transitions.sharp;

  // الانتقالات المخصصة
  const transitionSmooth = theme.transitions.smooth; // "all 0.5s ease"
  const transitionBounce = theme.transitions.bounce;
  const transitionSlowFade = theme.transitions.slowFade;
  const transitionQuickSlide = theme.transitions.quickSlide;

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

    // خلفيات إضافية
    backgroundBlueSoft,
    backgroundBlueLight,
    backgroundBlueMedium,
    backgroundPurpleSoft,
    backgroundPurpleLight,
    backgroundPurpleMedium,
    backgroundGreenSoft,
    backgroundGreenLight,
    backgroundGreenMedium,
    backgroundYellowSoft,
    backgroundYellowLight,
    backgroundYellowMedium,
    backgroundRedSoft,
    backgroundRedLight,
    backgroundRedMedium,
    backgroundGraySoft,
    backgroundGrayLight,
    backgroundGrayMedium,
    backgroundYellow,
    backgroundGreen,
    backgroundPurple,
    backgroundRed,
    backgroundGray,

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

    // خلفيات مكونات إضافية
    cardBlueBackground,
    cardPurpleBackground,
    cardGreenBackground,
    cardYellowBackground,
    cardRedBackground,
    cardGrayBackground,
    alertInfoBackground,
    alertSuccessBackground,
    alertWarningBackground,
    alertErrorBackground,
    modalBackground,
    drawerBackground,
    popoverBackground,
    menuBackground,

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

    // خلفيات إحصائيات إضافية
    statsBlueBackground,
    statsPurpleBackground,
    statsGreenBackground,
    statsYellowBackground,
    statsRedBackground,
    statsTealBackground,
    statsOrangeBackground,
    statsPinkBackground,
    statsIndigoBackground,

    // التدرجات اللونية
    gradientBlue,
    gradientNavy,
    gradientChart,
    gradientPurple,
    gradientGreen,

    // تدرجات لونية إضافية
    gradientBlueToGreen,
    gradientPurpleToBlue,
    gradientYellowToOrange,
    gradientRedToPurple,
    gradientGrayToBlue,
    gradientBlueGray,

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

    // ألوان رسوم بيانية إضافية
    chartIndigo,
    chartCyan,
    chartAmber,
    chartEmerald,
    chartViolet,
    chartFuchsia,
    chartRose,
    chartSky,
    chartLime,

    // مؤشرات الحالة
    statusOnline,
    statusOffline,
    statusAway,
    statusBusy,

    // مؤشرات حالة إضافية
    statusAvailable,
    statusUnavailable,
    statusPending,
    statusApproved,
    statusRejected,
    statusInProgress,
    statusCompleted,
    statusCancelled,

    // الظلال
    shadowSm,
    shadowMd,
    shadowLg,
    shadowXl,
    shadow2xl,
    shadowInner,
    shadowButton,
    shadowBlue,

    // ظلال إضافية
    shadowPurple,
    shadowGreen,
    shadowYellow,
    shadowRed,
    shadowFloating,

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
    transitionBounce,
    transitionSmooth,
    transitionStandard,
    transitionQuickSlide,
    transitionSlowFade,

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
