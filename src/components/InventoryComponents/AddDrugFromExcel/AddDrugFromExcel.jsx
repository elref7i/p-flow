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
import { useTypeContext } from "../../../context/UserType.context";
import { validationSchemaSheetExcel } from "../../../lib/schemas/DrugSchema";
import { useAddDrugExcel } from "../../../lib/hooks/useDrugAction";
import { CircularProgress } from "@mui/material";
import CategorySelect from "../../category_select/category_select";
import DescriptionIcon from "@mui/icons-material/Description";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "85%", sm: "60%", md: "50%" },
  borderRadius: "20px",
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
  //themes
  const {
    typography,
    border,
    textLink,
    cardBackground,
    transitionDurationComplex,
    textPrimary,
    borderHover,
    backgroundRedSoft,
  } = useThemeConstants();

  //Mutations
  const { mutateAsync: addSheetExcel, isLoading } = useAddDrugExcel();

  //Functions
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      startRow: "",
      endRow: "",
      file: null,
      category: "",
    },
    validationSchema: validationSchemaSheetExcel,
    onSubmit: async (values) => {
      //Form Data
      const formData = new FormData();
      formData.append("startRow", values.startRow);
      formData.append("endRow", values.endRow);
      formData.append("file", values.file);
      formData.append("category", values.category);

      //Mutation
      await addSheetExcel({ token, formData });

      //Close Modal
      handleClose();
    },
  });

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          ml: "auto",
          display: "block",
          py: 1.5,
          fontSize: typography.button.fontSize,
          fontWeight: typography.button.fontWeight,
          lineHeight: typography.button.lineHeight,
          boxShadow: 1,
        }}
      >
        Add Drug From Excel
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            boxShadow: 8,
            background: cardBackground,
            transition: transitionDurationComplex,
            color: textPrimary,
            ":hover": {
              boxShadow: 6,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              p: 2,
              mb: 5,
              border: border,
              background: cardBackground,
              boxShadow: 8,
              ":hover": {
                boxShadow: 7,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <DescriptionIcon sx={{ fontSize: "40px", color: textLink }} />
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
            <CategorySelect
              touched={formik.touched}
              setFieldValue={formik.setFieldValue}
              errors={formik.errors}
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
                color="error"
                sx={{
                  borderRadius: "8px",
                  boxShadow: 2,
                  px: 5,
                  "&:hover": {
                    borderColor: borderHover,
                    background: backgroundRedSoft,
                  },
                }}
              >
                Close
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
