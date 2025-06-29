/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useTypeContext } from "../../../context/UserType.context";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Modal,
  Stack,
  styled,
  TextareaAutosize,
  TextField,
  Typography,
  CircularProgress,
  IconButton,
} from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { CategorySchema } from "../../../lib/schemas/AdminSchema";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useUpdateCategory } from "../../../lib/hooks/use-admin";

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

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", // تغيير العرض ليكون نسبة من الشاشة
  maxWidth: "600px", // وضع حد أقصى للعرض
  maxHeight: "90vh",
  borderRadius: "16px",
  p: 0,
  overflow: "hidden",
};
const urlToFile = async (url, fileName, mimeType) => {
  const response = await fetch(url);
  const blob = await response.blob();
  return new File([blob], fileName, { type: mimeType });
};

export default function UpdatedCategory({ id, description, imageCover, name }) {
  //States
  const [open, setOpen] = useState(false);

  //Context
  const { token } = useTypeContext();

  //Theme
  const {
    shadow2,
    typography,
    pharmacyBackground,
    textPrimary,
    cardDetailsBackground,
    borderHover,
    cardBackground,
  } = useThemeConstants();

  //Mutations

  const { mutate, isLoading, isSuccess, isError } = useUpdateCategory();

  //Functions
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchImageAsFile = async () => {
      if (imageCover && typeof imageCover === "string") {
        const file = await urlToFile(
          imageCover,
          "image/jpeg",
          "image/png",
          "image/jpg"
        );

        setValues({
          name,
          description,
          imageCover: file,
        });
      }
    };

    fetchImageAsFile();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, open]);

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    setFieldValue,
    errors,
    touched,
    setValues,
    resetForm,
  } = useFormik({
    initialValues: {
      name,
      description,
      imageCover: null,
    },
    validationSchema: CategorySchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("imageCover", values.imageCover); // صورة جديدة

      mutate(
        { token, formData, id },
        {
          onSuccess: (data) => {
            console.log("data", data);
            handleClose();
            resetForm();
          },
        }
      );
    },
  });

  return (
    <Box>
      <IconButton
        onClick={handleOpen}
        color="warning"
        size="medium"
        aria-label="updated"
      >
        <ModeEditIcon />
      </IconButton>
      <Modal
        sx={{ bgcolor: "#000000aa" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, background: cardBackground, boxShadow: 8 }}>
          <Box
            sx={{
              bgcolor: pharmacyBackground,
              boxShadow: shadow2, // Green header for Add modal
              color: textPrimary,
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <CategoryIcon />
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
                Update Categorey
              </Box>
            </Box>
          </Box>
          <Stack
            component={"form"}
            direction={"column"}
            gap={1}
            onSubmit={handleSubmit}
            sx={{
              p: 3,
              overflow: "auto",
              maxHeight: "calc(90vh - 60px)",
            }}
          >
            <TextField
              label="Name Category"
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

            <FormControl
              error={Boolean(errors.description && touched.description)}
              fullWidth
            >
              <TextareaAutosize
                aria-label="Description"
                name="description"
                placeholder="Description"
                minRows={6}
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  color: textPrimary,
                  padding: "16px",
                  fontSize: "16px",
                  borderColor: cardDetailsBackground,
                  borderRadius: "4px",
                  border: `1px solid ${borderHover}`,
                  background: cardBackground,
                  width: "100%",
                  resize: "vertical",
                }}
              />
              {touched.description && errors.description && (
                <FormHelperText>{errors.description}</FormHelperText>
              )}
            </FormControl>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload Image
              <VisuallyHiddenInput
                name="imageCover"
                type="file"
                onChange={(e) => {
                  const imageCover = e.currentTarget.files?.[0];
                  setFieldValue("imageCover", imageCover);
                }}
                multiple
              />
            </Button>
            {touched.imageCover && errors.imageCover && (
              <Typography
                variant="body1"
                sx={{ mb: 2 }}
                color="error"
                textAlign={"center"}
              >
                {errors.imageCover}
              </Typography>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              startIcon={
                isLoading ? (
                  <CircularProgress
                    color="inherit"
                    size={25}
                  />
                ) : isError ? (
                  <WarningAmberIcon
                    color="warning"
                    size={25}
                  />
                ) : isSuccess ? (
                  <CheckCircleIcon
                    color="success"
                    size={25}
                  />
                ) : (
                  <BorderColorIcon size={30} />
                )
              }
              variant="contained"
              sx={{
                py: 1,
                mt: 3,
                px: 9,
                width: "fit-content",
                ml: "auto",
              }}
            >
              Update Now
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
}
