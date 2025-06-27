/* eslint-disable react/prop-types */
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";
import { CircularProgress } from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { useThemeConstants } from "../lib/constants/theme.constant";
import { Delete } from "@mui/icons-material";
import { CardDelete } from "./prescription-modal/styles/delete-model";

export default function ButtonDelete({
  handleAction,
  isDeleting,
  nameButton = "Delete All",
  nameItems = "",
}) {
  //States
  const [open, setOpen] = React.useState(false);
  const { typography, adminBackground } = useThemeConstants();

  //Functions
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        color="error"
        variant="outlined"
        onClick={handleOpen}
      >
        {nameButton}
      </Button>
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
          <Box sx={{ ...CardDelete, background: adminBackground }}>
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
              Are you sure you want to delete this {nameItems} ?
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button
                color="error"
                variant="outlined"
                onClick={handleAction}
                startIcon={
                  isDeleting ? (
                    <CircularProgress
                      color="error"
                      size="16px"
                    />
                  ) : (
                    <Delete />
                  )
                }
              >
                {nameButton}
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
