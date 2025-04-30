import * as React from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import EditIcon from "@mui/icons-material/Edit";
import { useTypeContext } from "../../../context/UserType.context";
import { validationSchemaSheetExcel } from "../../../lib/schemas/DrugSchema";
import { useAddDrugExcel } from "../../../lib/hooks/useDrugAction";
import { CircularProgress } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "85%", sm: "60%", md: "50%" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function AddDrugFromExcel() {
  //States
  const [open, setOpen] = React.useState(false);

  //Context
  const { token } = useTypeContext();

  //Themes
  const { shadow2, typography, pharmacyBackground, textPrimary } =
    useThemeConstants();

  //Mutaion
  const { mutate: addSheetExcel, isLoading } = useAddDrugExcel();

  //Functions
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  // async function onSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   // await validationSchema.validate(values, { abortEarly: false });

  //   const loading = toast.loading("loading...");
  //   try {
  //     const options = {
  //       url: `${API_URL_DRUG}/excel`,
  //       method: "POST",
  //       data: formData,
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };

  //     const { data } = await axios.request(options);

  //     if (data.status === "success") {
  //       toast.success(data.status);
  //     }
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error);
  //   } finally {
  //     toast.dismiss(loading);
  //   }
  // }
  //Formil
  const formik = useFormik({
    initialValues: {
      startRow: "",
      endRow: "",
      file: null,
    },
    validationSchema: validationSchemaSheetExcel,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("startRow", values.startRow);
      formData.append("endRow", values.endRow);
      formData.append("file", values.file);

      addSheetExcel({ token, formData });

      // console.log(values.startRow);
      // console.log(values.endRow);
      // console.log(values.file);
      // console.log("refai");

      // const loading = toast.loading("loading...");
      // try {
      //   const options = {
      //     url: `${API_URL_DRUG}/excel`,
      //     method: "POST",
      //     data: formData,
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   };

      //   const { data } = await axios.request(options);

      //   if (data.status === "success") {
      //     toast.success(data.status);
      //   }
      //   console.log(data);
      // } catch (error) {
      //   console.log(error);
      //   toast.error(error.message || "An error occurred");
      // } finally {
      //   toast.dismiss(loading);
      // }
    },
  });

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ ml: "auto", display: "block" }}
      >
        Add Drug From Excel
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
                Add Sheet Excel
              </Box>
            </Box>
          </Box>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ p: 2 }}
          >
            <TextField
              fullWidth
              id="firstRow"
              name="startRow"
              label="First Row Number"
              type="number"
              value={formik.values.startRow}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.startRow && Boolean(formik.errors.startRow)}
              helperText={formik.touched.startRow && formik.errors.startRow}
              margin="normal"
              InputProps={{ inputProps: { min: 1 } }}
            />

            <TextField
              fullWidth
              id="lastRow"
              name="endRow"
              label="Last Row Number"
              type="number"
              value={formik.values.endRow}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.endRow && Boolean(formik.errors.endRow)}
              helperText={formik.touched.endRow && formik.errors.endRow}
              margin="normal"
              InputProps={{ inputProps: { min: 1 } }}
            />

            <Box sx={{ mt: 3, mb: 3 }}>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                sx={{ mb: 1 }}
              >
                Upload Excel File
                <VisuallyHiddenInput
                  type="file"
                  name="file"
                  accept=".xlsx,.xls"
                  onChange={(event) => {
                    const file = event.currentTarget.files?.[0];
                    formik.setFieldValue("file", file || null);
                  }}
                  onBlur={formik.handleBlur}
                />
              </Button>
              {formik.values.file && (
                <Typography
                  variant="body2"
                  sx={{ mt: 1 }}
                >
                  Selected file: {formik.values.file.name}
                </Typography>
              )}
              {formik.touched.file && formik.errors.file && (
                <Typography
                  color="error"
                  variant="body2"
                  sx={{ mt: 1 }}
                >
                  {formik.errors.file}
                </Typography>
              )}
            </Box>

            <Box
              sx={{
                mt: 4,
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
              }}
            >
              <Button
                onClick={handleClose}
                variant="outlined"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                startIcon={
                  isLoading ? (
                    <CircularProgress
                      size={20}
                      sx={{
                        fontSize: typography.button.fontSize,
                        fontWeight: typography.button.fontWeight,
                        transform: typography.button.transform,
                        lineHeight: typography.button.lineHeight,
                        color: "white",
                      }}
                    />
                  ) : null
                }
              >
                {isLoading ? "Processing..." : "Import Drugs"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
