//* Version 5 - Enhanced Complete Theme with More Backgrounds and Shadows
const colors = {
  // Primary colors
  primary: {
    light: "#3B82F6", // Blue from Justadmin
    dark: "#0066FF", // Blue from Stovest
    // إضافة درجات اللون الأساسي
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
  },
  secondary: {
    light: "#64748B",
    dark: "#555555",
    // إضافة درجات اللون الثانوي
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
  },
  auth: "#64B5F6", // Keeping auth color unchanged as requested

  // Status colors (unchanged)
  error: "#FF5252",
  warning: "#FFC107",
  success: "#4CAF50",
  info: "#2196F3",

  // Light Mode (based on Justadmin) - إضافة المزيد من الخلفيات
  lightBackground: "#F8FAFC",
  lightBackgroundElevated: "#FFFFFF",
  lightBackgroundLowered: "#F1F5F9",
  lightBackgroundBlue: "#3B82F6",
  lightBackgroundYellow: "#FACC15",
  lightBackgroundGreen: "#22C55E",
  lightBackgroundPurple: "#8B5CF6",
  lightBackgroundRed: "#EF4444",
  lightBackgroundGray: "#F1F5F9",

  // خلفيات إضافية للوضع الفاتح - مستوحاة من Justadmin
  lightBackgroundBlueSoft: "#EFF6FF",
  lightBackgroundBlueLight: "#DBEAFE",
  lightBackgroundBlueMedium: "#BFDBFE",
  lightBackgroundPurpleSoft: "#F5F3FF",
  lightBackgroundPurpleLight: "#EDE9FE",
  lightBackgroundPurpleMedium: "#DDD6FE",
  lightBackgroundGreenSoft: "#ECFDF5",
  lightBackgroundGreenLight: "#D1FAE5",
  lightBackgroundGreenMedium: "#A7F3D0",
  lightBackgroundYellowSoft: "#FFFBEB",
  lightBackgroundYellowLight: "#FEF3C7",
  lightBackgroundYellowMedium: "#FDE68A",
  lightBackgroundRedSoft: "#FEF2F2",
  lightBackgroundRedLight: "#FEE2E2",
  lightBackgroundRedMedium: "#FECACA",
  lightBackgroundGraySoft: "#F9FAFB",
  lightBackgroundGrayLight: "#F3F4F6",
  lightBackgroundGrayMedium: "#E5E7EB",

  // Light Mode Gradients
  lightGradientBlue: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
  lightGradientPurple: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
  lightGradientGreen: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
  // إضافة تدرجات لونية جديدة
  lightGradientBlueToGreen: "linear-gradient(135deg, #3B82F6 0%, #22C55E 100%)",
  lightGradientPurpleToBlue:
    "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
  lightGradientYellowToOrange:
    "linear-gradient(135deg, #FACC15 0%, #F97316 100%)",
  lightGradientRedToPurple: "linear-gradient(135deg, #EF4444 0%, #8B5CF6 100%)",
  lightGradientGrayToBlue: "linear-gradient(135deg, #F1F5F9 0%, #DBEAFE 100%)",
  lightGradientBlueGray: "linear-gradient(135deg, #CBD5E1 0%, #93C5FD 100%)",

  // Light Mode Backgrounds for specific sections
  lightbgAuth:
    "linear-gradient(63.25deg, rgba(0, 0, 0, 0) 46.5%, rgba(64, 0, 255, 0.48) 107.58%), linear-gradient(297.17deg, rgba(255, 250, 244, 0) 60.92%, #9BCEFF 107.8%)",
  lightbgInventory:
    "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)",
  lightbgPharmacy:
    "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)",
  lightbgAdmin:
    "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)",

  // Light Mode Component backgrounds
  lightbgCard: "#FFFFFF",
  lightbgCardHover: "#F8FAFC",
  lightbgCardActive: "#F1F5F9",
  lightbgCardDetails: "#FFFFFF",
  lightbgCart: "#FFFFFF",
  lightbgSidebar: "#FFFFFF",
  lightbgHeader: "#FFFFFF",
  lightbgFooter: "#F8FAFC",
  lightbgTooltip: "#334155",
  lightbgBadge: "#F1F5F9",
  // إضافة خلفيات مكونات جديدة
  lightbgCardBlue: "#EFF6FF",
  lightbgCardPurple: "#F5F3FF",
  lightbgCardGreen: "#ECFDF5",
  lightbgCardYellow: "#FFFBEB",
  lightbgCardRed: "#FEF2F2",
  lightbgCardGray: "#F9FAFB",
  lightbgAlertInfo: "#EFF6FF",
  lightbgAlertSuccess: "#ECFDF5",
  lightbgAlertWarning: "#FFFBEB",
  lightbgAlertError: "#FEF2F2",
  lightbgModal: "#FFFFFF",
  lightbgDrawer: "#FFFFFF",
  lightbgPopover: "#FFFFFF",
  lightbgMenu: "#FFFFFF",

  // Light Mode Dashboard components
  lightbgDashboard: "#F8FAFC",
  lightbgStats: "#3B82F6", // Blue card background from Justadmin
  lightbgStatsSecondary: "#FFFFFF", // White card background from Justadmin
  lightbgCharts: "#FFFFFF",
  lightbgTable: "#FFFFFF",
  lightbgTableHeader: "#F8FAFC",
  lightbgTableRow: "#FFFFFF",
  lightbgTableRowAlt: "#F8FAFC",
  lightbgTableRowHover: "#F1F5F9",
  // إضافة خلفيات لوحة معلومات جديدة
  lightbgStatsPurple: "#8B5CF6",
  lightbgStatsGreen: "#22C55E",
  lightbgStatsYellow: "#FACC15",
  lightbgStatsRed: "#EF4444",
  lightbgStatsTeal: "#14B8A6",
  lightbgStatsOrange: "#F97316",
  lightbgStatsPink: "#EC4899",
  lightbgStatsIndigo: "#6366F1",

  // Light Mode Text colors
  lightTextPrimary: "#0F172A",
  lightTextSecondary: "#64748B",
  lightTextTertiary: "#94A3B8",
  lightTextInverted: "#FFFFFF",
  lightTextDisabled: "#CBD5E1",
  lightTextLink: "#3B82F6",
  lightTextSuccess: "#22C55E",
  lightTextWarning: "#F59E0B",
  lightTextError: "#EF4444",

  // Light Mode Border colors
  lightBorder: "#E2E8F0",
  lightBorderFocus: "#3B82F6",
  lightBorderHover: "#CBD5E1",

  // Light Mode Button colors
  lightBgButton: "#3B82F6",
  lightBgButtonHover: "#2563EB",
  lightBgButtonActive: "#1D4ED8",
  lightBgButtonDisabled: "#CBD5E1",
  lightButtonText: "#FFFFFF",
  lightButtonTextDisabled: "#94A3B8",

  // Light Mode Input colors
  lightBgInput: "#FFFFFF",
  lightBgInputHover: "#F8FAFC",
  lightBgInputFocus: "#FFFFFF",
  lightBgInputDisabled: "#F1F5F9",
  lightInputBorder: "#CBD5E1",
  lightInputBorderHover: "#94A3B8",
  lightInputBorderFocus: "#3B82F6",
  lightInputBorderDisabled: "#E2E8F0",

  // Light Mode Shadows - تحسين وإضافة المزيد من الظلال
  lightShadowSm: "0px 1px 2px rgba(15, 23, 42, 0.08)",
  lightShadowMd:
    "0px 4px 6px -1px rgba(15, 23, 42, 0.1), 0px 2px 4px -1px rgba(15, 23, 42, 0.06)",
  lightShadowLg:
    "0px 10px 15px -3px rgba(15, 23, 42, 0.1), 0px 4px 6px -2px rgba(15, 23, 42, 0.05)",
  lightShadowXl:
    "0px 20px 25px -5px rgba(15, 23, 42, 0.1), 0px 10px 10px -5px rgba(15, 23, 42, 0.04)",
  lightShadow2xl: "0px 25px 50px -12px rgba(15, 23, 42, 0.25)",
  lightShadowInner: "inset 0px 2px 4px rgba(15, 23, 42, 0.06)",
  lightShadowInnerMd: "inset 0px 4px 8px rgba(15, 23, 42, 0.08)",
  lightShadowButton: "0px 1px 3px rgba(59, 130, 246, 0.3)",
  // إضافة ظلال جديدة
  lightShadowBlue: "0px 4px 14px rgba(59, 130, 246, 0.3)",
  lightShadowPurple: "0px 4px 14px rgba(139, 92, 246, 0.3)",
  lightShadowGreen: "0px 4px 14px rgba(34, 197, 94, 0.3)",
  lightShadowYellow: "0px 4px 14px rgba(250, 204, 21, 0.3)",
  lightShadowRed: "0px 4px 14px rgba(239, 68, 68, 0.3)",
  lightShadowFloating: "0px 8px 30px rgba(15, 23, 42, 0.12)",

  // Light Mode Grey scale
  lightGrey: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
  },

  // Dark Mode (based on Stovest) - إضافة المزيد من الخلفيات
  darkBackground: "#0A0E17", // Very dark blue/black from Stovest
  darkBackgroundElevated: "#111827", // Slightly lighter than background
  darkBackgroundLowered: "#060A12", // Darker than background
  darkBackgroundBlue: "#0066FF", // Bright blue from Stovest
  darkBackgroundNavy: "#0A1A3B", // Navy blue from Stovest chart
  darkBackgroundDeepBlue: "#051029", // Deep blue from Stovest
  darkBackgroundCard: "#111827", // Card background from Stovest
  darkBackgroundSidebar: "#0F1623", // Sidebar background from Stovest

  // خلفيات إضافية للوضع الداكن - مستوحاة من Stovest
  darkBackgroundBlueSoft: "#172554",
  darkBackgroundBlueLight: "#1E3A8A",
  darkBackgroundBlueMedium: "#1D4ED8",
  darkBackgroundPurpleSoft: "#2E1065",
  darkBackgroundPurpleLight: "#4C1D95",
  darkBackgroundPurpleMedium: "#6D28D9",
  darkBackgroundGreenSoft: "#14532D",
  darkBackgroundGreenLight: "#166534",
  darkBackgroundGreenMedium: "#15803D",
  darkBackgroundYellowSoft: "#713F12",
  darkBackgroundYellowLight: "#854D0E",
  darkBackgroundYellowMedium: "#A16207",
  darkBackgroundRedSoft: "#7F1D1D",
  darkBackgroundRedLight: "#991B1B",
  darkBackgroundRedMedium: "#B91C1C",
  darkBackgroundGraySoft: "#111827",
  darkBackgroundGrayLight: "#1F2937",
  darkBackgroundGrayMedium: "#374151",

  // Dark Mode Gradients
  darkGradientBlue: "linear-gradient(135deg, #0066FF 0%, #0044CC 100%)",
  darkGradientNavy: "linear-gradient(180deg, #0A1A3B 0%, #051029 100%)",
  darkGradientChart:
    "linear-gradient(180deg, rgba(0, 102, 255, 0.2) 0%, rgba(0, 102, 255, 0) 100%)",
  // إضافة تدرجات لونية جديدة
  darkGradientBlueToDeepBlue:
    "linear-gradient(135deg, #0066FF 0%, #051029 100%)",
  darkGradientPurpleToBlue: "linear-gradient(135deg, #7C3AED 0%, #0066FF 100%)",
  darkGradientGreenToBlue: "linear-gradient(135deg, #15803D 0%, #0066FF 100%)",
  darkGradientRedToBlue: "linear-gradient(135deg, #B91C1C 0%, #0066FF 100%)",
  darkGradientGrayToBlue: "linear-gradient(135deg, #1F2937 0%, #172554 100%)",
  darkGradientBlueGlow:
    "linear-gradient(135deg, rgba(0, 102, 255, 0.8) 0%, rgba(0, 102, 255, 0.4) 50%, rgba(0, 102, 255, 0.1) 100%)",

  // Dark Mode Backgrounds for specific sections
  darkbgAuth:
    "linear-gradient(291.59deg, #1A1A1A 44.64%, #001B34 100.68%), linear-gradient(244.91deg, rgba(16, 0, 64, 0.73) -5.58%, rgba(0, 0, 0, 0) 72.1%)",
  darkbgInventory:
    "linear-gradient(135deg, #111827 0%, #0F1623 50%, #0A0E17 100%)",
  darkbgPharmacy:
    "linear-gradient(135deg, #111827 0%, #0F1623 50%, #0A0E17 100%)",
  darkbgAdmin: "linear-gradient(135deg, #111827 0%, #0F1623 50%, #0A0E17 100%)",

  // Dark Mode Component backgrounds
  darkbgCard: "#111827",
  darkbgCardHover: "#1E293B",
  darkbgCardActive: "#1E293B",
  darkbgCardDetails: "#111827",
  darkbgCart: "#111827",
  darkbgSidebar: "#0F1623",
  darkbgHeader: "#111827",
  darkbgFooter: "#0A0E17",
  darkbgTooltip: "#1E293B",
  darkbgBadge: "#1E293B",
  // إضافة خلفيات مكونات جديدة
  darkbgCardBlue: "#172554",
  darkbgCardPurple: "#2E1065",
  darkbgCardGreen: "#14532D",
  darkbgCardYellow: "#713F12",
  darkbgCardRed: "#7F1D1D",
  darkbgCardGray: "#111827",
  darkbgAlertInfo: "#172554",
  darkbgAlertSuccess: "#14532D",
  darkbgAlertWarning: "#713F12",
  darkbgAlertError: "#7F1D1D",
  darkbgModal: "#1E293B",
  darkbgDrawer: "#1E293B",
  darkbgPopover: "#1E293B",
  darkbgMenu: "#1E293B",

  // Dark Mode Dashboard components
  darkbgDashboard: "#0A0E17",
  darkbgStats: "#111827",
  darkbgStatsSecondary: "#1E293B",
  darkbgCharts: "#111827",
  darkbgTable: "#111827",
  darkbgTableHeader: "#1E293B",
  darkbgTableRow: "#111827",
  darkbgTableRowAlt: "#1E293B",
  darkbgTableRowHover: "#334155",
  // إضافة خلفيات لوحة معلومات جديدة
  darkbgStatsBlue: "#0066FF",
  darkbgStatsPurple: "#7C3AED",
  darkbgStatsGreen: "#15803D",
  darkbgStatsYellow: "#A16207",
  darkbgStatsRed: "#B91C1C",
  darkbgStatsTeal: "#0D9488",
  darkbgStatsOrange: "#C2410C",
  darkbgStatsPink: "#BE185D",
  darkbgStatsIndigo: "#4F46E5",

  // Dark Mode Text colors
  darkTextPrimary: "#FFFFFF",
  darkTextSecondary: "#94A3B8",
  darkTextTertiary: "#64748B",
  darkTextInverted: "#0F172A",
  darkTextDisabled: "#475569",
  darkTextLink: "#0066FF",
  darkTextSuccess: "#22C55E",
  darkTextWarning: "#F59E0B",
  darkTextError: "#EF4444",

  // Dark Mode Border colors
  darkBorder: "#1E293B",
  darkBorderFocus: "#0066FF",
  darkBorderHover: "#334155",

  // Dark Mode Button colors
  darkBgButton: "#0066FF",
  darkBgButtonHover: "#0044CC",
  darkBgButtonActive: "#0033AA",
  darkBgButtonDisabled: "#334155",
  darkButtonText: "#FFFFFF",
  darkButtonTextDisabled: "#64748B",

  // Dark Mode Input colors
  darkBgInput: "#1E293B",
  darkBgInputHover: "#334155",
  darkBgInputFocus: "#1E293B",
  darkBgInputDisabled: "#0F172A",
  darkInputBorder: "#334155",
  darkInputBorderHover: "#475569",
  darkInputBorderFocus: "#0066FF",
  darkInputBorderDisabled: "#1E293B",

  // Dark Mode Shadows - تحسين وإضافة المزيد من الظلال
  darkShadowSm: "0px 1px 2px rgba(255, 255, 255, 0.05)",
  darkShadowMd:
    "0px 4px 6px -1px rgba(255, 255, 255, 0.07), 0px 2px 4px -1px rgba(255, 255, 255, 0.06)",
  darkShadowLg:
    "0px 10px 15px -3px rgba(255, 255, 255, 0.08), 0px 4px 6px -2px rgba(255, 255, 255, 0.06)",
  darkShadowXl:
    "0px 20px 25px -5px rgba(255, 255, 255, 0.1), 0px 10px 10px -5px rgba(255, 255, 255, 0.04)",
  darkShadow2xl: "0px 25px 50px -12px rgba(255, 255, 255, 0.15)",
  darkShadowInner: "inset 0px 2px 4px rgba(255, 255, 255, 0.06)",
  darkShadowInnerMd: "inset 0px 4px 8px rgba(255, 255, 255, 0.08)",
  darkShadowButton: "0px 1px 3px rgba(0, 102, 255, 0.5)",
  darkShadowBlue: "0px 0px 15px rgba(0, 102, 255, 0.5)",
  // إضافة ظلال جديدة
  darkShadowBlueLg: "0px 0px 30px rgba(0, 102, 255, 0.7)",
  darkShadowPurple: "0px 0px 15px rgba(124, 58, 237, 0.5)",
  darkShadowGreen: "0px 0px 15px rgba(21, 128, 61, 0.5)",
  darkShadowYellow: "0px 0px 15px rgba(161, 98, 7, 0.5)",
  darkShadowRed: "0px 0px 15px rgba(185, 28, 28, 0.5)",
  darkShadowFloating:
    "0px 8px 30px rgba(255, 255, 255, 0.1), 0px 0px 10px rgba(0, 102, 255, 0.3)",

  // Dark Mode Grey scale
  darkGrey: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
  },

  // Table colors - light mode
  lightTableHeader: "#F8FAFC",
  lightTableHeaderText: "#0F172A",
  lightTableRow: "#FFFFFF",
  lightTableRowAlt: "#F8FAFC",
  lightTableRowHover: "#F1F5F9",
  lightTableBorder: "#E2E8F0",
  lightTableText: "#0F172A",

  // Table colors - dark mode
  darkTableHeader: "#1E293B",
  darkTableHeaderText: "#FFFFFF",
  darkTableRow: "#111827",
  darkTableRowAlt: "#1E293B",
  darkTableRowHover: "#334155",
  darkTableBorder: "#334155",
  darkTableText: "#FFFFFF",

  // Sidebar colors - light mode
  lightSidebarBackground: "#FFFFFF",
  lightSidebarBorder: "#E2E8F0",
  lightSidebarText: "#0F172A",
  lightSidebarTextSecondary: "#64748B",
  lightSidebarItemHover: "#F1F5F9",
  lightSidebarItemActive: "#3B82F6",
  lightSidebarItemActiveBackground: "#EFF6FF",
  lightSidebarIcon: "#64748B",
  lightSidebarIconActive: "#3B82F6",
  lightSidebarHeader: "#FFFFFF",
  lightSidebarFooter: "#F8FAFC",

  // Sidebar colors - dark mode
  darkSidebarBackground: "#0F1623",
  darkSidebarBorder: "#1E293B",
  darkSidebarText: "#FFFFFF",
  darkSidebarTextSecondary: "#94A3B8",
  darkSidebarItemHover: "#1E293B",
  darkSidebarItemActive: "#0066FF",
  darkSidebarItemActiveBackground: "#1E293B",
  darkSidebarIcon: "#94A3B8",
  darkSidebarIconActive: "#0066FF",
  darkSidebarHeader: "#0F1623",
  darkSidebarFooter: "#0A0E17",

  // Chart colors
  chartColors: {
    blue: "#0066FF",
    green: "#22C55E",
    red: "#EF4444",
    yellow: "#FACC15",
    purple: "#8B5CF6",
    teal: "#14B8A6",
    orange: "#F97316",
    pink: "#EC4899",
    gray: "#64748B",
    indigo: "#6366F1",
    cyan: "#06B6D4",
    amber: "#F59E0B",
    emerald: "#10B981",
    violet: "#8B5CF6",
    fuchsia: "#D946EF",
    rose: "#F43F5E",
    sky: "#0EA5E9",
    lime: "#84CC16",
  },

  // Status indicators
  statusColors: {
    online: "#22C55E",
    offline: "#94A3B8",
    away: "#F97316",
    busy: "#EF4444",
    available: "#22C55E",
    unavailable: "#EF4444",
    pending: "#F59E0B",
    approved: "#22C55E",
    rejected: "#EF4444",
    inProgress: "#0066FF",
    completed: "#22C55E",
    cancelled: "#EF4444",
  },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "light" ? colors.primary.light : colors.primary.dark,
      // إضافة درجات اللون الأساسي
      50: colors.primary[50],
      100: colors.primary[100],
      200: colors.primary[200],
      300: colors.primary[300],
      400: colors.primary[400],
      500: colors.primary[500],
      600: colors.primary[600],
      700: colors.primary[700],
      800: colors.primary[800],
      900: colors.primary[900],
    },
    secondary: {
      main: mode === "light" ? colors.secondary.light : colors.secondary.dark,
      // إضافة درجات اللون الثانوي
      50: colors.secondary[50],
      100: colors.secondary[100],
      200: colors.secondary[200],
      300: colors.secondary[300],
      400: colors.secondary[400],
      500: colors.secondary[500],
      600: colors.secondary[600],
      700: colors.secondary[700],
      800: colors.secondary[800],
      900: colors.secondary[900],
    },
    auth: { main: colors.auth }, // Keeping auth color unchanged as requested
    error: { main: colors.error },
    warning: { main: colors.warning },
    success: { main: colors.success },
    info: { main: colors.info },

    background: {
      default:
        mode === "light" ? colors.lightBackground : colors.darkBackground,
      elevated:
        mode === "light"
          ? colors.lightBackgroundElevated
          : colors.darkBackgroundElevated,
      lowered:
        mode === "light"
          ? colors.lightBackgroundLowered
          : colors.darkBackgroundLowered,
      blue:
        mode === "light"
          ? colors.lightBackgroundBlue
          : colors.darkBackgroundBlue,

      // إضافة خلفيات جديدة
      blueSoft:
        mode === "light"
          ? colors.lightBackgroundBlueSoft
          : colors.darkBackgroundBlueSoft,
      blueLight:
        mode === "light"
          ? colors.lightBackgroundBlueLight
          : colors.darkBackgroundBlueLight,
      blueMedium:
        mode === "light"
          ? colors.lightBackgroundBlueMedium
          : colors.darkBackgroundBlueMedium,
      purpleSoft:
        mode === "light"
          ? colors.lightBackgroundPurpleSoft
          : colors.darkBackgroundPurpleSoft,
      purpleLight:
        mode === "light"
          ? colors.lightBackgroundPurpleLight
          : colors.darkBackgroundPurpleLight,
      purpleMedium:
        mode === "light"
          ? colors.lightBackgroundPurpleMedium
          : colors.darkBackgroundPurpleMedium,
      greenSoft:
        mode === "light"
          ? colors.lightBackgroundGreenSoft
          : colors.darkBackgroundGreenSoft,
      greenLight:
        mode === "light"
          ? colors.lightBackgroundGreenLight
          : colors.darkBackgroundGreenLight,
      greenMedium:
        mode === "light"
          ? colors.lightBackgroundGreenMedium
          : colors.darkBackgroundGreenMedium,
      yellowSoft:
        mode === "light"
          ? colors.lightBackgroundYellowSoft
          : colors.darkBackgroundYellowSoft,
      yellowLight:
        mode === "light"
          ? colors.lightBackgroundYellowLight
          : colors.darkBackgroundYellowLight,
      yellowMedium:
        mode === "light"
          ? colors.lightBackgroundYellowMedium
          : colors.darkBackgroundYellowMedium,
      redSoft:
        mode === "light"
          ? colors.lightBackgroundRedSoft
          : colors.darkBackgroundRedSoft,
      redLight:
        mode === "light"
          ? colors.lightBackgroundRedLight
          : colors.darkBackgroundRedLight,
      redMedium:
        mode === "light"
          ? colors.lightBackgroundRedMedium
          : colors.darkBackgroundRedMedium,
      graySoft:
        mode === "light"
          ? colors.lightBackgroundGraySoft
          : colors.darkBackgroundGraySoft,
      grayLight:
        mode === "light"
          ? colors.lightBackgroundGrayLight
          : colors.darkBackgroundGrayLight,
      grayMedium:
        mode === "light"
          ? colors.lightBackgroundGrayMedium
          : colors.darkBackgroundGrayMedium,
      yellow:
        mode === "light"
          ? colors.lightBackgroundYellow
          : colors.darkBackgroundYellow,
      green:
        mode === "light"
          ? colors.lightBackgroundGreen
          : colors.darkBackgroundGreen,
      purple:
        mode === "light"
          ? colors.lightBackgroundPurple
          : colors.darkBackgroundPurple,
      red:
        mode === "light" ? colors.lightBackgroundRed : colors.darkBackgroundRed,
      gray:
        mode === "light"
          ? colors.lightBackgroundGray
          : colors.darkBackgroundGray,

      // Section backgrounds
      auth: mode === "light" ? colors.lightbgAuth : colors.darkbgAuth,
      inventory:
        mode === "light" ? colors.lightbgInventory : colors.darkbgInventory,
      pharmacy:
        mode === "light" ? colors.lightbgPharmacy : colors.darkbgPharmacy,
      admin: mode === "light" ? colors.lightbgAdmin : colors.darkbgAdmin,

      // Component backgrounds
      card: mode === "light" ? colors.lightbgCard : colors.darkbgCard,
      cardHover:
        mode === "light" ? colors.lightbgCardHover : colors.darkbgCardHover,
      cardActive:
        mode === "light" ? colors.lightbgCardActive : colors.darkbgCardActive,
      cardDetails:
        mode === "light" ? colors.lightbgCardDetails : colors.darkbgCardDetails,
      cart: mode === "light" ? colors.lightbgCart : colors.darkbgCart,
      sidebar: mode === "light" ? colors.lightbgSidebar : colors.darkbgSidebar,
      header: mode === "light" ? colors.lightbgHeader : colors.darkbgHeader,
      footer: mode === "light" ? colors.lightbgFooter : colors.darkbgFooter,
      tooltip: mode === "light" ? colors.lightbgTooltip : colors.darkbgTooltip,
      badge: mode === "light" ? colors.lightbgBadge : colors.darkbgBadge,

      // إضافة خلفيات مكونات جديدة
      cardBlue:
        mode === "light" ? colors.lightbgCardBlue : colors.darkbgCardBlue,
      cardPurple:
        mode === "light" ? colors.lightbgCardPurple : colors.darkbgCardPurple,
      cardGreen:
        mode === "light" ? colors.lightbgCardGreen : colors.darkbgCardGreen,
      cardYellow:
        mode === "light" ? colors.lightbgCardYellow : colors.darkbgCardYellow,
      cardRed: mode === "light" ? colors.lightbgCardRed : colors.darkbgCardRed,
      cardGray:
        mode === "light" ? colors.lightbgCardGray : colors.darkbgCardGray,
      alertInfo:
        mode === "light" ? colors.lightbgAlertInfo : colors.darkbgAlertInfo,
      alertSuccess:
        mode === "light"
          ? colors.lightbgAlertSuccess
          : colors.darkbgAlertSuccess,
      alertWarning:
        mode === "light"
          ? colors.lightbgAlertWarning
          : colors.darkbgAlertWarning,
      alertError:
        mode === "light" ? colors.lightbgAlertError : colors.darkbgAlertError,
      modal: mode === "light" ? colors.lightbgModal : colors.darkbgModal,
      drawer: mode === "light" ? colors.lightbgDrawer : colors.darkbgDrawer,
      popover: mode === "light" ? colors.lightbgPopover : colors.darkbgPopover,
      menu: mode === "light" ? colors.lightbgMenu : colors.darkbgMenu,

      // Dashboard components
      dashboard:
        mode === "light" ? colors.lightbgDashboard : colors.darkbgDashboard,
      stats: mode === "light" ? colors.lightbgStats : colors.darkbgStats,
      statsSecondary:
        mode === "light"
          ? colors.lightbgStatsSecondary
          : colors.darkbgStatsSecondary,
      charts: mode === "light" ? colors.lightbgCharts : colors.darkbgCharts,
      table: mode === "light" ? colors.lightbgTable : colors.darkbgTable,
      tableHeader:
        mode === "light" ? colors.lightbgTableHeader : colors.darkbgTableHeader,
      tableRow:
        mode === "light" ? colors.lightbgTableRow : colors.darkbgTableRow,
      tableRowAlt:
        mode === "light" ? colors.lightbgTableRowAlt : colors.darkbgTableRowAlt,
      tableRowHover:
        mode === "light"
          ? colors.lightbgTableRowHover
          : colors.darkbgTableRowHover,

      // إضافة خلفيات لوحة معلومات جديدة
      statsBlue:
        mode === "light" ? colors.lightbgStats : colors.darkbgStatsBlue,
      statsPurple:
        mode === "light" ? colors.lightbgStatsPurple : colors.darkbgStatsPurple,
      statsGreen:
        mode === "light" ? colors.lightbgStatsGreen : colors.darkbgStatsGreen,
      statsYellow:
        mode === "light" ? colors.lightbgStatsYellow : colors.darkbgStatsYellow,
      statsRed:
        mode === "light" ? colors.lightbgStatsRed : colors.darkbgStatsRed,
      statsTeal:
        mode === "light" ? colors.lightbgStatsTeal : colors.darkbgStatsTeal,
      statsOrange:
        mode === "light" ? colors.lightbgStatsOrange : colors.darkbgStatsOrange,
      statsPink:
        mode === "light" ? colors.lightbgStatsPink : colors.darkbgStatsPink,
      statsIndigo:
        mode === "light" ? colors.lightbgStatsIndigo : colors.darkbgStatsIndigo,

      // Gradients
      gradientBlue:
        mode === "light" ? colors.lightGradientBlue : colors.darkGradientBlue,
      gradientNavy:
        mode === "dark" ? colors.darkGradientNavy : colors.lightGradientBlue,
      gradientChart: mode === "dark" ? colors.darkGradientChart : "none",
      gradientPurple:
        mode === "light" ? colors.lightGradientPurple : colors.darkGradientBlue,
      gradientGreen:
        mode === "light" ? colors.lightGradientGreen : colors.darkGradientBlue,

      // إضافة تدرجات لونية جديدة
      gradientBlueToGreen:
        mode === "light"
          ? colors.lightGradientBlueToGreen
          : colors.darkGradientGreenToBlue,
      gradientPurpleToBlue:
        mode === "light"
          ? colors.lightGradientPurpleToBlue
          : colors.darkGradientPurpleToBlue,
      gradientYellowToOrange:
        mode === "light"
          ? colors.lightGradientYellowToOrange
          : colors.darkGradientBlueToDeepBlue,
      gradientRedToPurple:
        mode === "light"
          ? colors.lightGradientRedToPurple
          : colors.darkGradientRedToBlue,
      gradientGrayToBlue:
        mode === "light"
          ? colors.lightGradientGrayToBlue
          : colors.darkGradientGrayToBlue,
      gradientBlueGray:
        mode === "light"
          ? colors.lightGradientBlueGray
          : colors.darkGradientBlueGlow,

      // Special dark mode backgrounds
      navy:
        mode === "dark"
          ? colors.darkBackgroundNavy
          : colors.lightBackgroundBlue,
      deepBlue:
        mode === "dark"
          ? colors.darkBackgroundDeepBlue
          : colors.lightBackgroundBlue,

      // Button backgrounds
      button: mode === "light" ? colors.lightBgButton : colors.darkBgButton,
      buttonHover:
        mode === "light" ? colors.lightBgButtonHover : colors.darkBgButtonHover,
      buttonActive:
        mode === "light"
          ? colors.lightBgButtonActive
          : colors.darkBgButtonActive,
      buttonDisabled:
        mode === "light"
          ? colors.lightBgButtonDisabled
          : colors.darkBgButtonDisabled,

      // Input backgrounds
      input: mode === "light" ? colors.lightBgInput : colors.darkBgInput,
      inputHover:
        mode === "light" ? colors.lightBgInputHover : colors.darkBgInputHover,
      inputFocus:
        mode === "light" ? colors.lightBgInputFocus : colors.darkBgInputFocus,
      inputDisabled:
        mode === "light"
          ? colors.lightBgInputDisabled
          : colors.darkBgInputDisabled,
    },

    text: {
      primary:
        mode === "light" ? colors.lightTextPrimary : colors.darkTextPrimary,
      secondary:
        mode === "light" ? colors.lightTextSecondary : colors.darkTextSecondary,
      tertiary:
        mode === "light" ? colors.lightTextTertiary : colors.darkTextTertiary,
      inverted:
        mode === "light" ? colors.lightTextInverted : colors.darkTextInverted,
      disabled:
        mode === "light" ? colors.lightTextDisabled : colors.darkTextDisabled,
      link: mode === "light" ? colors.lightTextLink : colors.darkTextLink,
      success:
        mode === "light" ? colors.lightTextSuccess : colors.darkTextSuccess,
      warning:
        mode === "light" ? colors.lightTextWarning : colors.darkTextWarning,
      error: mode === "light" ? colors.lightTextError : colors.darkTextError,
      button: mode === "light" ? colors.lightButtonText : colors.darkButtonText,
      buttonDisabled:
        mode === "light"
          ? colors.lightButtonTextDisabled
          : colors.darkButtonTextDisabled,
    },

    border: {
      default: mode === "light" ? colors.lightBorder : colors.darkBorder,
      focus:
        mode === "light" ? colors.lightBorderFocus : colors.darkBorderFocus,
      hover:
        mode === "light" ? colors.lightBorderHover : colors.darkBorderHover,
      input:
        mode === "light" ? colors.lightInputBorder : colors.darkInputBorder,
      inputHover:
        mode === "light"
          ? colors.lightInputBorderHover
          : colors.darkInputBorderHover,
      inputFocus:
        mode === "light"
          ? colors.lightInputBorderFocus
          : colors.darkInputBorderFocus,
      inputDisabled:
        mode === "light"
          ? colors.lightInputBorderDisabled
          : colors.darkInputBorderDisabled,
      table:
        mode === "light" ? colors.lightTableBorder : colors.darkTableBorder,
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
      iconActive:
        mode === "light"
          ? colors.lightSidebarIconActive
          : colors.darkSidebarIconActive,
      header:
        mode === "light" ? colors.lightSidebarHeader : colors.darkSidebarHeader,
      footer:
        mode === "light" ? colors.lightSidebarFooter : colors.darkSidebarFooter,
    },

    chart: colors.chartColors,
    status: colors.statusColors,

    grey: mode === "light" ? colors.lightGrey : colors.darkGrey,

    action: {
      active: mode === "light" ? colors.primary.light : colors.primary.dark,
      hover:
        mode === "light" ? colors.lightBgButtonHover : colors.darkBgButtonHover,
      selected: mode === "light" ? colors.lightGrey[400] : colors.darkGrey[500],
      disabled: mode === "light" ? colors.lightGrey[400] : colors.darkGrey[500],
      disabledBackground:
        mode === "light" ? colors.lightGrey[200] : colors.darkGrey[300],
    },
  },

  shadows: [
    "none",
    mode === "light" ? colors.lightShadowSm : colors.darkShadowSm,
    mode === "light" ? colors.lightShadowMd : colors.darkShadowMd,
    mode === "light" ? colors.lightShadowLg : colors.darkShadowLg,
    mode === "light" ? colors.lightShadowXl : colors.darkShadowXl,
    mode === "light" ? colors.lightShadow2xl : colors.darkShadow2xl,
    mode === "light" ? colors.lightShadowInner : colors.darkShadowInner,
    mode === "light" ? colors.lightShadowInnerMd : colors.darkShadowInnerMd,
    mode === "light" ? colors.lightShadowButton : colors.darkShadowButton,
    mode === "light" ? colors.lightShadowBlue : colors.darkShadowBlue,
    mode === "light" ? colors.lightShadowPurple : colors.darkShadowPurple,
    mode === "light" ? colors.lightShadowGreen : colors.darkShadowGreen,
    mode === "light" ? colors.lightShadowYellow : colors.darkShadowYellow,
    mode === "light" ? colors.lightShadowRed : colors.darkShadowRed,
    mode === "light" ? colors.lightShadowFloating : colors.darkShadowFloating,
    mode === "dark" ? colors.darkShadowBlueLg : "none", // Special blue glow for dark mode
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
    caption: {
      fontSize: "0.75rem",
      lineHeight: 1.5,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.05em",
      lineHeight: 1.5,
      textTransform: "uppercase",
    },
  },

  shape: {
    borderRadius: 8,
    borderRadiusSm: 4,
    borderRadiusLg: 12,
    borderRadiusXl: 16,
    borderRadiusFull: 9999,
  },

  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },

  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
});
