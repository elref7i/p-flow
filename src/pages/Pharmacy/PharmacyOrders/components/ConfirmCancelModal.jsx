/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material";
import { CardDelete } from "../../../../components/prescription-modal/styles/delete-model";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

export default function ConfirmCancelModal({
  open,
  onClose,
  onConfirm,
  loading = false,
}) {
  const { adminBackground } = useThemeConstants();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          ...CardDelete,
          background: adminBackground,
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.25rem" }}>
        Cancel Order ?
      </DialogTitle>

      <DialogContent>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary" }}
        >
          This action cannot be undone and your order will be permanently
          cancelled.
        </Typography>
      </DialogContent>

      <DialogActions
        sx={{
          justifyContent: "center",
          gap: 2,
          mt: 2,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Button
          onClick={onConfirm}
          variant="contained"
          color="error"
          disabled={loading}
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            minWidth: 120,
            borderRadius: 2,
          }}
        >
          {loading ? "Cancelling..." : "Yes, Cancel"}
        </Button>

        <Button
          onClick={onClose}
          variant="outlined"
          disabled={loading}
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            minWidth: 120,
            borderRadius: 2,
          }}
        >
          No, Keep
        </Button>
      </DialogActions>
    </Dialog>
  );
}
