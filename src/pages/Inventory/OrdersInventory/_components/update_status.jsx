/* eslint-disable react/prop-types */
import { useState } from "react";
import { useThemeConstants } from "@/lib/constants/theme.constant";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextareaAutosize,
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import { useUpdateOrderStatus } from "../../../../lib/hooks/useOrdersAction";
import { useTypeContext } from "../../../../context/UserType.context";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  maxHeight: "85vh",
  bgcolor: "background.paper",
  boxShadow: " 0px 1px 4px 0px rgba(245, 158, 11, 0.75)",
  borderRadius: "16px",
  p: 0, // Remove padding here to apply it differently
  overflow: "hidden", // Hide overflow initially
};

export default function UpdateStatusOrder({ status, id }) {
  //States
  const [open, setOpen] = useState(false);

  //Context
  const { token } = useTypeContext();

  //Mutations
  const { mutate, isLoading, isSuccess, isError } = useUpdateOrderStatus();

  //Themes
  const { shadow2, typography, pharmacyBackground, textPrimary } =
    useThemeConstants();

  // Form

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      status,
      note: "",
    },
    onSubmit: (values) => {
      console.log(values);

      mutate({ values, token, orderId: id });
    },
  });

  //Functions
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        color="warning"
        sx={{
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <EditIcon fontSize="medium" />
      </IconButton>

      <Modal
        open={open}
        sx={{ bgcolor: "#000000aa" }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: pharmacyBackground,
              boxShadow: shadow2, // Green header for Add modal
              color: textPrimary,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <EditIcon />
              <Box
                component="h2"
                sx={{
                  m: 0,
                  fontSize: typography.h1.fontSize,
                  fontWeight: typography.h1.fontWeight,
                  lineHeight: typography.h1.lineHeight,
                  textWrap: "nowrap",
                }}
              >
                Update Order Status
              </Box>
            </Box>
          </Box>
          <Box
            component={"form"}
            onSubmit={handleSubmit}
            sx={{
              p: 3,
              overflow: "auto",
              maxHeight: "calc(85vh - 60px)", // Adjust for header
              gap: 1,
            }}
          >
            <FormControl
              fullWidth
              sx={{ mb: 2 }}
              error={errors.status && touched.status}
            >
              <InputLabel id="demo-simple-select-error-label">
                Status
              </InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                defaultValue={status}
                label="Age"
                onChange={(e) => {
                  setFieldValue("status", e.target.value);
                  console.log(e.target.value);
                }}
              >
                <MenuItem value={"pending"}>Pending</MenuItem>
                <MenuItem value={"confirmed"}>Confirmed</MenuItem>
                <MenuItem value={"processing"}>Processing</MenuItem>
                <MenuItem value={"shipped"}>Shipped</MenuItem>
                <MenuItem value={"delivered"}>Delivered</MenuItem>
                <MenuItem value={"rejected"}>Rejected</MenuItem>
              </Select>
              {errors.status && touched.status && (
                <FormHelperText>Error</FormHelperText>
              )}
            </FormControl>

            <FormControl
              error={Boolean(errors.note && touched.note)}
              fullWidth
            >
              <TextareaAutosize
                aria-label="note"
                name="note"
                placeholder="Note"
                minRows={6}
                value={values.note}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  padding: "16px",
                  fontSize: "16px",
                  borderColor: errors.note && touched.note ? "red" : "#ccc",
                  borderRadius: "4px",
                  borderWidth: "1px",
                  resize: "vertical",
                }}
              />
              {touched.note && errors.note && (
                <FormHelperText>{errors.note}</FormHelperText>
              )}
            </FormControl>

            <Box
              sx={{
                gridColumn: "span 2",
                display: "flex",
                justifyContent: "center",
                mt: 3,
              }}
            >
              <Button
                type="submit"
                variant="contained"
                // color={isError ? "error" : "warning"}
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  px: 5,
                  py: 1.5,
                  fontWeight: "bold",
                  borderRadius: "10px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
                startIcon={
                  isLoading ? (
                    <CircularProgress
                      color="inherit"
                      size={20}
                    />
                  ) : isError ? (
                    <WarningAmberIcon
                      color="warning"
                      size={20}
                    />
                  ) : isSuccess ? (
                    <CheckCircleIcon
                      color="success"
                      size={20}
                    />
                  ) : (
                    <EditIcon size={20} />
                  )
                }
              >
                Update Status
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
