/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogActions,
  Button,
  Typography,
  Slide,
  Stack,
} from "@mui/material";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
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
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      keepMounted
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: {
          py: 2,
          px: 3,
          borderRadius: 2,
          textAlign: "center",
          backgroundColor: "#fafafa",
          boxShadow: 3,
        },
      }}
    >
      <Stack alignItems="center" spacing={1.5}>
        <WarningAmberRoundedIcon sx={{ fontSize: 42, color: "#f44336" }} />
        <Typography
          variant="h6"
          sx={{
            color: "#333",
            fontWeight: "bold",
            fontSize: "1.1rem",
            lineHeight: 1.4,
          }}
        >
          Are you sure you want to cancel this order ?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This action cannot be undone.
        </Typography>
      </Stack>

      <DialogActions sx={{ justifyContent: "center", mt: 2 }}>
        <Button
          onClick={onConfirm}
          variant="contained"
          color="error"
          sx={{
            fontWeight: "bold",
            px: 2.5,
            py: 0.75,
            borderRadius: 2,
            textTransform: "none",
            minWidth: 110,
            fontSize: "0.9rem",
          }}
          disabled={loading}
        >
          {loading ? "Cancelling..." : "Yes, Cancel"}
        </Button>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            borderColor: "#ccc",
            color: "#333",
            fontWeight: "bold",
            px: 2.5,
            py: 0.75,
            borderRadius: 2,
            textTransform: "none",
            minWidth: 110,
            fontSize: "0.9rem",
            "&:hover": {
              backgroundColor: "#f5f5f5",
              borderColor: "#999",
            },
          }}
          disabled={loading}
        >
          No, Keep
        </Button>
      </DialogActions>
    </Dialog>
  );
}
