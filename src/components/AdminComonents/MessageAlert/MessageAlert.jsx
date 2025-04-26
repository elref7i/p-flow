/* eslint-disable react/prop-types */
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import { CircularProgress, IconButton } from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: "8px",
  boxShadow: "0px 1px 5px 0px rgba(220, 38, 38, 80%)",
  p: 4,
  textAlign: "center",
};

export default function AlertModal({ handleAction, isDeleting }) {
  //States
  const [open, setOpen] = React.useState(false);

  const { typography, adminBackground } = useThemeConstants();

  //Functions
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton
        onClick={handleOpen}
        color="error"
      >
        <DeleteIcon fontSize="medium" />
      </IconButton>
      <Modal
        sx={{ bgcolor: "#000000aa" }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={{ ...style, background: adminBackground }}>
            <ReportProblemIcon
              color="error"
              sx={{ fontSize: "60px" }}
            />

            <Typography
              id="transition-modal-description"
              color="error"
              sx={{
                mb: 3,
                fontSize: typography.body1.fontSize,
                lineHeight: typography.body1.lineHeight,
              }}
            >
              Are you sure you want to delete this user?
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button
                onClick={handleAction}
                variant="contained"
                color="error"
                startIcon={
                  isDeleting ? (
                    <CircularProgress
                      color="inherit"
                      size={16}
                    />
                  ) : (
                    <DeleteIcon />
                  )
                }
              >
                Delete
              </Button>
              <Button
                onClick={handleClose}
                variant="outlined"
                color="warning"
                startIcon={<CancelIcon />}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
