/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { CircularProgress, IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { UpdateDataUser } from "@/lib/schemas/AdminSchema";
import { useTypeContext } from "@/context/UserType.context";
import { getSpecificUser } from "@/lib/api/admin.api";
import { useUpdateUser } from "@/lib/hooks/useAdminAction";
import EditIcon from "@mui/icons-material/Edit";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

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

export default function ModalUpdated({ userId }) {
  //States
  const [open, setOpen] = useState(false);
  const [dataSpecificUser, setDataSpecificUser] = useState(null);

  //Context
  const { token } = useTypeContext();

  //Themes
  const { shadow2, typography, pharmacyBackground, textPrimary } =
    useThemeConstants();

  //Functions
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  //* Function GET SPECIFIC USER
  const fetchUserSpecific = async () => {
    try {
      const userData = await getSpecificUser({ token, userId });
      setDataSpecificUser(userData);
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, isError, mutate, reset, isSuccess } = useUpdateUser();

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    setValues,
  } = useFormik({
    initialValues: {
      name: "",
      ownerName: "",
      phone: "",
      city: "",
      governorate: "",
    },
    validationSchema: UpdateDataUser,
    onSubmit: async (values) => {
      mutate(
        { userId, token, values },
        {
          onSuccess: () => {
            //* لما يتم تفعيل socket in backend
            // await fetchUserData(userId, token);
            handleClose();
          },
        }
      );
    },
  });

  useEffect(() => {
    if (dataSpecificUser) {
      const { name, ownerName, phone, city, governorate } = dataSpecificUser;
      setValues({
        name: name || "",
        ownerName: ownerName || "",
        phone: phone || "",
        city: city || "",
        governorate: governorate || "",
      });
    }
  }, [dataSpecificUser]);

  return (
    <>
      <IconButton
        onClick={async () => {
          await fetchUserSpecific();
          handleOpen();
        }}
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
                Update User Information
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
              display: "grid",
              gap: 1,
              gridTemplateColumns: "1fr 1fr",
              "& .MuiTextField-root": {
                gridColumn: { xs: "span 2", sm: "span 1" },
              },
              "& .MuiTextField-root:nth-of-type(odd)": {
                pr: { sm: 1 },
              },
              "& .MuiTextField-root:nth-of-type(even)": {
                pl: { sm: 1 },
              },
              "& .MuiTextField-root.fullWidth": {
                gridColumn: "span 2",
                px: 0,
              },
            }}
          >
            <TextField
              className="fullWidth"
              label="Name"
              margin="normal"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name && touched.name}
              helperText={touched.name && errors.name}
              InputProps={{
                sx: { borderRadius: "10px" },
              }}
            />
            <TextField
              className="fullWidth"
              label="Owner Name"
              name="ownerName"
              margin="normal"
              type="text"
              value={values.ownerName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.ownerName && touched.ownerName}
              helperText={touched.ownerName && errors.ownerName}
              InputProps={{
                sx: { borderRadius: "10px" },
              }}
            />
            <TextField
              className="fullWidth"
              label="Phone"
              name="phone"
              margin="normal"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.phone && touched.phone}
              helperText={touched.phone && errors.phone}
              InputProps={{
                sx: { borderRadius: "10px" },
              }}
            />
            <TextField
              label="City"
              name="city"
              margin="normal"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.city && touched.city}
              helperText={touched.city && errors.city}
              InputProps={{
                sx: { borderRadius: "10px" },
              }}
            />
            <TextField
              label="Governorate"
              name="governorate"
              margin="normal"
              type="text"
              value={values.governorate}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.governorate && touched.governorate}
              helperText={touched.governorate && errors.governorate}
              InputProps={{
                sx: { borderRadius: "10px" },
              }}
            />

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
                color={isError ? "error" : "warning"}
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
                Update Data
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
