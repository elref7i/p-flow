/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogActions,
  Button,
  Typography,
  Slide,
  Stack,
  Box,
  useTheme,
  Avatar,
} from "@mui/material";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmCancelModal({
  open,
  onClose,
  onConfirm,
  loading = false,
}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      keepMounted
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 4,
          textAlign: "center",
          background: isDark
            ? "linear-gradient(145deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.95) 100%)"
            : "linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)",
          backdropFilter: "blur(20px)",
          boxShadow: isDark
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
            : "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
          border: isDark
            ? "1px solid rgba(71, 85, 105, 0.5)"
            : "1px solid rgba(226, 232, 240, 0.5)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #ef4444, #f97316, #eab308)",
            backgroundSize: "200% 100%",
            animation: "warningGlow 3s linear infinite",
            "@keyframes warningGlow": {
              "0%": { backgroundPosition: "0% 50%" },
              "100%": { backgroundPosition: "200% 50%" },
            },
          },
        },
      }}
    >
      <Box sx={{ p: 4, position: "relative" }}>
        {/* Background Pattern */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isDark
              ? "radial-gradient(circle at 30% 20%, rgba(239, 68, 68, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)"
              : "radial-gradient(circle at 30% 20%, rgba(239, 68, 68, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(249, 115, 22, 0.05) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />

        <Stack
          alignItems="center"
          spacing={3}
          sx={{ position: "relative", zIndex: 1 }}
        >
          {/* Enhanced Warning Icon */}
          <Box sx={{ position: "relative" }}>
            <Avatar
              sx={{
                width: 80,
                height: 80,
                background: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
                boxShadow: "0 8px 32px rgba(239, 68, 68, 0.4)",
                animation: "pulse 2s infinite",
                "@keyframes pulse": {
                  "0%, 100%": {
                    boxShadow:
                      "0 8px 32px rgba(239, 68, 68, 0.4), 0 0 0 0 rgba(239, 68, 68, 0.7)",
                  },
                  "50%": {
                    boxShadow:
                      "0 12px 40px rgba(239, 68, 68, 0.6), 0 0 0 15px rgba(239, 68, 68, 0)",
                  },
                },
              }}
            >
              <WarningAmberRoundedIcon sx={{ fontSize: 40, color: "white" }} />
            </Avatar>

            {/* Floating particles */}
            <Box
              sx={{
                position: "absolute",
                top: -10,
                right: -10,
                width: 20,
                height: 20,
                background: "linear-gradient(45deg, #fbbf24, #f59e0b)",
                borderRadius: "50%",
                animation: "float 3s ease-in-out infinite",
                "@keyframes float": {
                  "0%, 100%": { transform: "translateY(0px)" },
                  "50%": { transform: "translateY(-10px)" },
                },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -5,
                left: -15,
                width: 15,
                height: 15,
                background: "linear-gradient(45deg, #f97316, #ea580c)",
                borderRadius: "50%",
                animation: "float 3s ease-in-out infinite 1s",
              }}
            />
          </Box>

          {/* Enhanced Typography */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                background: isDark
                  ? "linear-gradient(135deg, #f87171 0%, #fb923c 100%)"
                  : "linear-gradient(135deg, #dc2626 0%, #ea580c 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 800,
                mb: 1,
                letterSpacing: "-0.5px",
              }}
            >
              Cancel Order ?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: isDark ? "#94a3b8" : "#6b7280",
                fontSize: "1rem",
              }}
            >
              This action cannot be undone and your order will be permanently
              cancelled.
            </Typography>
          </Box>
        </Stack>

        {/* Enhanced Action Buttons */}
        <DialogActions sx={{ justifyContent: "center", mt: 4, gap: 2, px: 0 }}>
          <Button
            onClick={onConfirm}
            variant="contained"
            startIcon={loading ? null : <CheckCircleIcon />}
            disabled={loading}
            sx={{
              background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
              color: "white",
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: 3,
              textTransform: "none",
              fontSize: "1rem",
              minWidth: 140,
              boxShadow: "0 8px 25px rgba(239, 68, 68, 0.4)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                transition: "left 0.5s ease",
              },
              "&:hover": {
                background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 12px 35px rgba(239, 68, 68, 0.5)",
                "&::before": {
                  left: "100%",
                },
              },
              "&:disabled": {
                background: "linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)",
                color: "white",
                transform: "none",
                boxShadow: "none",
              },
              ...(loading && {
                animation: "loading 1.5s ease-in-out infinite",
                "@keyframes loading": {
                  "0%, 100%": { opacity: 1 },
                  "50%": { opacity: 0.7 },
                },
              }),
            }}
          >
            {loading ? "Cancelling..." : "Yes, Cancel"}
          </Button>

          <Button
            onClick={onClose}
            variant="outlined"
            startIcon={loading ? null : <CancelIcon />}
            disabled={loading}
            sx={{
              borderColor: isDark ? "#475569" : "#d1d5db",
              color: isDark ? "#e2e8f0" : "#374151",
              background: isDark
                ? "linear-gradient(135deg, rgba(51, 65, 85, 0.5) 0%, rgba(71, 85, 105, 0.5) 100%)"
                : "linear-gradient(135deg, rgba(249, 250, 251, 0.8) 0%, rgba(243, 244, 246, 0.8) 100%)",
              backdropFilter: "blur(10px)",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: 3,
              textTransform: "none",
              fontSize: "1rem",
              minWidth: 140,
              borderWidth: 2,
              "&:hover": {
                borderWidth: 2,
                borderColor: isDark ? "#64748b" : "#9ca3af",
                background: isDark
                  ? "linear-gradient(135deg, rgba(71, 85, 105, 0.7) 0%, rgba(100, 116, 139, 0.7) 100%)"
                  : "linear-gradient(135deg, rgba(243, 244, 246, 0.9) 0%, rgba(229, 231, 235, 0.9) 100%)",
                transform: "translateY(-2px)",
                boxShadow: isDark
                  ? "0 8px 25px rgba(0, 0, 0, 0.3)"
                  : "0 8px 25px rgba(0, 0, 0, 0.1)",
              },
              "&:disabled": {
                borderColor: "#9ca3af",
                color: "#9ca3af",
                background: "transparent",
              },
            }}
          >
            No, Keep
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
