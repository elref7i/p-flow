import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { CircularProgress, TextField } from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import { useTypeContext } from "@/context/UserType.context";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Role from "../../Role/Role";
import { AdminAddUser } from "../../../lib/schemas/AdminSchema";
import { useAdminAddUser } from "../../../lib/hooks/useAdminAction";
import PasswordControl from "../../Common/PasswordControl";
// تعديل حجم وتخطيط Modal Add
// تغيير style المودال ليكون أوسع
const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", // تغيير العرض ليكون نسبة من الشاشة
  maxWidth: "1200px", // وضع حد أقصى للعرض
  maxHeight: "90vh",
  bgcolor: "background.paper",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
  borderRadius: "16px",
  p: 0,
  overflow: "hidden",
};

export default function ModalAdd() {
  const { token } = useTypeContext();
  const [open, setOpen] = useState(false);
  // const theme = useTheme();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const { mutate, isLoading, reset, isError, isSuccess } = useAdminAddUser();
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    setFieldValue,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      name: "",
      ownerName: "",
      phone: "",
      role: "",
      city: "",

      governorate: "",
      registrationNumber: "",
      identificationNumber: "",
      password: "",
      rePassword: "",
    },
    validationSchema: AdminAddUser,
    onSubmit: (values) => {
      mutate(
        { token, values },
        {
          onSuccess: () => {
            handleClose();
            resetForm();
          },
        }
      );
    },
  });

  return (
    <Box>
      <Button
        onClick={handleOpen}
        variant="contained"
        startIcon={<PersonAddIcon />}
        sx={{
          borderRadius: "8px",
          bgcolor: "#333",
          "&:hover": {
            bgcolor: "#555",
          },
        }}
      >
        Add Orders
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              bgcolor: "#333", // Green header for Add modal
              color: "white",
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PersonAddIcon />
              <Box
                component="h2"
                sx={{ m: 0, fontSize: "1.25rem", fontWeight: "600" }}
              >
                Add User
              </Box>
            </Box>
          </Box>
          {/* تعديل تخطيط النموذج ليكون بأربعة أعمدة بدلاً من اثنين */}
          <Box
            component={"form"}
            onSubmit={handleSubmit}
            sx={{
              p: 3,
              overflow: "auto",
              maxHeight: "calc(90vh - 60px)",
              display: "grid",
              gap: 1.5,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr 1fr",
              }, // 4 أعمدة على الشاشات الكبيرة
              "& .MuiTextField-root": {
                gridColumn: { xs: "span 1", sm: "span 1", md: "span 1" },
                mb: 1,
              },
              "& .MuiTextField-root.fullWidth": {
                gridColumn: { xs: "span 1", sm: "span 2", md: "span 2" },
              },
            }}
          >
            {/* تعديل الحقول لتناسب التخطيط الجديد (إزالة fullWidth من بعض الحقول) */}
            <TextField
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
              label="Email"
              name="email"
              margin="normal"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email}
              helperText={touched.email && errors.email}
              InputProps={{
                sx: { borderRadius: "10px" },
              }}
            />
            <TextField
              label="Registration Number"
              name="registrationNumber"
              margin="normal"
              type="number"
              value={values.registrationNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.registrationNumber && touched.registrationNumber}
              helperText={
                touched.registrationNumber && errors.registrationNumber
              }
              InputProps={{
                sx: { borderRadius: "10px" },
              }}
            />
            <TextField
              label="Identification Number"
              name="identificationNumber"
              margin="normal"
              type="number"
              value={values.identificationNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.identificationNumber && touched.identificationNumber
              }
              helperText={
                touched.identificationNumber && errors.identificationNumber
              }
              InputProps={{
                sx: { borderRadius: "10px" },
              }}
            />
            <TextField
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
              type="text"
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
            <Box sx={{ gridColumn: "span 2" }}>
              <PasswordControl
                name="password"
                error={errors.password}
                value={values.password}
                touched={touched.password}
                handleBlur={handleBlur}
                handleChange={handleChange}
                text="Password"
              />
            </Box>
            <Box sx={{ gridColumn: "span 2" }}>
              <PasswordControl
                name="rePassword"
                error={errors.rePassword}
                value={values.rePassword}
                touched={touched.rePassword}
                handleBlur={handleBlur}
                handleChange={handleChange}
                text="Confirm Password"
              />
            </Box>
            <Box sx={{ gridColumn: "span 2" }}>
              <Role
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                values={values}
              />
            </Box>
            {/* تعديل مكان زر الإضافة ليكون في نهاية النموذج */}
            <Box
              sx={{
                gridColumn: { xs: "span 1", sm: "span 2", md: "span 4" },
                display: "flex",
                justifyContent: "center",
                mt: 3,
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color={isError ? "error" : "primary"}
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  px: 5,
                  py: 1.5,
                  fontWeight: "bold",
                  borderRadius: "10px",
                  bgcolor: "#333",
                  boxShadow: "0 4px 12px rgba(25, 118, 210, 0.2)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 16px rgba(25, 118, 210, 0.3)",
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
                    <PersonAddIcon size={20} />
                  )
                }
              >
                Add User
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
