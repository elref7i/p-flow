/* eslint-disable react/prop-types */
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, IconButton, Chip } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useThemeConstants } from "@/lib/constants/theme.constant";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import EditPromotion from "./edit_promotion";
import DetailsPromotion from "./details_promotion";
import AddPromotaion from "./add_promotion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function PromotionDetails({ dataInfo }) {
  // States
  const [open, setOpen] = useState(false);
  const [showOptions, setShowOptions] = useState("default");

  //Variabled
  const { promotion } = dataInfo;

  //Themes
  const {
    typography,
    cardActiveBackground,
    cardHoverBackground,
    textPrimary,
    textError,
    textLink,
  } = useThemeConstants();

  // Functions
  const handleOpen = () => setOpen(true);
  const handleEdit = () => {
    setShowOptions("edit");
  };
  const handleAdd = () => {
    setShowOptions("add");
  };

  const handleClose = () => {
    setOpen(false);
    setShowOptions("default");
  };

  return (
    <>
      <Button
        color="auth"
        variant="outlined"
        onClick={handleOpen}
        startIcon={<LocalOfferIcon fontSize="medium" />}
      >
        Show Promotion
      </Button>
      <Modal
        sx={{ bgcolor: "#00000022" }}
        aria-labelledby="promotion-modal-title"
        aria-describedby="promotion-modal-description"
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
          <Box
            sx={{
              background: cardActiveBackground,
              boxShadow: 8,
              position: "absolute",
              top: "50%",
              px: 2,
              pt: 4,
              pb: 2,
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              borderRadius: "8px",
              "&:hover": {
                boxShadow: 7,
                background: cardHoverBackground,
              },
            }}
          >
            {/* Close Modal */}
            <IconButton
              onClick={handleClose}
              size="large"
              sx={{
                color: textError,
                position: "absolute",
                top: -7,
                right: 2,
              }}
            >
              <Close />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                pb: 1,
              }}
            >
              <LocalOfferIcon
                color="primary"
                sx={{ fontSize: "40px", mr: 2 }}
              />
              <Typography
                id="promotion-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  color: textPrimary,
                  fontWeight: "bold",
                  fontSize: typography.h5.fontSize,
                }}
              >
                Promotion Details
              </Typography>
              <Chip
                label={promotion.isActive ? "Active" : "Inactive"}
                color={promotion.isActive ? "success" : "error"}
                size="small"
                sx={{ ml: "auto" }}
              />
            </Box>

            <Divider
              sx={{
                mb: 2,
                boxShadow: 8,
              }}
            />

            {showOptions !== "default" && (
              <Button
                onClick={() => {
                  setShowOptions("default");
                }}
                sx={{
                  mb: 1,
                  fontSize: typography.h6.fontSize,
                  fontWeight: typography.h6.fontWeight,
                  color: textLink,
                }}
                startIcon={<ArrowBackIcon />}
              >
                Back Show Details Offer
              </Button>
            )}
            {showOptions === "edit" ? (
              <EditPromotion
                promotion={promotion}
                id={dataInfo._id}
                setShowOptions={setShowOptions}
              />
            ) : showOptions === "add" ? (
              <AddPromotaion
                dataInfo={dataInfo}
                setOpen={setOpen}
              />
            ) : (
              <DetailsPromotion promotion={promotion} />
            )}

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              {dataInfo.promotion.isActive === false
                ? showOptions !== "add" && (
                    <Button
                      onClick={handleAdd}
                      variant="outlined"
                      color={"primary"}
                    >
                      {"Add Offer"}
                    </Button>
                  )
                : showOptions !== "edit" && (
                    <Button
                      onClick={handleEdit}
                      variant="contained"
                      color={"warning"}
                      sx={{
                        color: textPrimary,
                      }}
                    >
                      {"Edit Offer"}
                    </Button>
                  )}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
