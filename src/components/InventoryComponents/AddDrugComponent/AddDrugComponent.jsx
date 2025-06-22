import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useFormik } from "formik";
import { useTypeContext } from "../../../context/UserType.context";
import { useAddDrug } from "../../../lib/hooks/useDrugAction";
import { DrugSchema } from "../../../lib/schemas/DrugSchema";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import CategorySelect from "../../category_select/category_select";
import { MedicalInformation } from "@mui/icons-material";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", // تغيير العرض ليكون نسبة من الشاشة
  maxWidth: "1200px", // وضع حد أقصى للعرض
  maxHeight: "90vh",
  bgcolor: "background.paper",
  borderRadius: "16px",
  overflow: "auto",
};

export default function AddDrugComponent() {
  //States
  const [open, setOpen] = React.useState(false);

  //Context
  const { token } = useTypeContext();

  //Mutation
  const { mutate, isLoading, isError } = useAddDrug();

  //themes
  const {
    typography,
    border,
    textPrimary,
    textLink,
    cardHoverBackground,
    cardBackground,
    transitionDurationComplex,
    buttonText,
    backgroundRedSoft,
    borderHover,
  } = useThemeConstants();

  //Function
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Formik
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    setFieldValue,
    dirty,
  } = useFormik({
    initialValues: {
      name: "",
      manufacturer: "",
      description: "",
      originType: "",
      productionDate: "",
      expirationDate: "",
      price: "",
      discount: "",
      stock: "",
      sold: "",
      isVisible: "",
    },
    validationSchema: DrugSchema,
    onSubmit: (values) => {
      console.log("Submitting values:", values);
      mutate({ token, values });
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
          boxShadow: 9,
        }}
      >
        Add Drug Data
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{
            ...style,
            boxShadow: 9,
            background: cardBackground,
            transition: transitionDurationComplex,
            ":hover": {
              boxShadow: 8,
              background: cardHoverBackground,
            },
          }}
          component="form"
          onSubmit={handleSubmit}
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
            <MedicalInformation sx={{ fontSize: "40px", color: textLink }} />
            <Typography
              component="h2"
              sx={{
                fontSize: typography.h1.fontSize,
                fontWeight: typography.h1.fontWeight,
                lineHeight: typography.h1.lineHeight,
                color: textPrimary,
                mb: 0,
                pb: 0,
              }}
            >
              Add Drug
            </Typography>
          </Box>

          <Stack
            spacing={2}
            px={2}
            pb={4}
          >
            <Stack
              direction="row"
              gap={2}
              sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
            >
              <TextField
                fullWidth
                label="Name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name && touched.name}
                helperText={touched.name && errors.name}
              />
              <TextField
                fullWidth
                label="Manufacturer"
                name="manufacturer"
                type="text"
                value={values.manufacturer}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.manufacturer && touched.manufacturer}
                helperText={touched.manufacturer && errors.manufacturer}
              />
            </Stack>

            <Stack
              direction="row"
              gap={2}
              sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
            >
              <TextField
                fullWidth
                label="Origin Type"
                name="originType"
                value={values.originType}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.originType && touched.originType}
                helperText={touched.originType && errors.originType}
                select
              >
                <MenuItem value="Imported">Imported</MenuItem>
                <MenuItem value="Local">Local</MenuItem>
              </TextField>
              <TextField
                fullWidth
                label="Visibility"
                name="isVisible"
                value={values.isVisible}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.isVisible && touched.isVisible}
                helperText={touched.isVisible && errors.isVisible}
                select
              >
                <MenuItem value={true}>True</MenuItem>
                <MenuItem value={false}>False</MenuItem>
              </TextField>
            </Stack>

            <Stack
              direction="row"
              gap={2}
              sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
            >
              <TextField
                fullWidth
                label="Production Date"
                name="productionDate"
                type="date"
                value={values.productionDate}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.productionDate && touched.productionDate}
                helperText={touched.productionDate && errors.productionDate}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                fullWidth
                label="Expiration Date"
                name="expirationDate"
                type="date"
                value={values.expirationDate}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.expirationDate && touched.expirationDate}
                helperText={touched.expirationDate && errors.expirationDate}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>

            <Stack
              direction="row"
              gap={2}
              sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
            >
              <TextField
                fullWidth
                label="Price"
                name="price"
                type="number"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.price && touched.price}
                helperText={touched.price && errors.price}
              />
              <TextField
                fullWidth
                label="Discount"
                name="discount"
                type="number"
                value={values.discount}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.discount && touched.discount}
                helperText={touched.discount && errors.discount}
              />
            </Stack>
            <Stack
              direction="row"
              gap={2}
              sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
            >
              <TextField
                fullWidth
                label="Stock"
                name="stock"
                type="number"
                value={values.stock}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.stock && touched.stock}
                helperText={touched.stock && errors.stock}
              />
              <TextField
                fullWidth
                label="Sold"
                name="sold"
                type="number"
                value={values.sold}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.sold && touched.sold}
                helperText={touched.sold && errors.sold}
              />
            </Stack>

            <Stack
              direction="row"
              gap={2}
              sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
            >
              <TextField
                fullWidth
                label="Description"
                name="description"
                type="text"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.description && touched.description}
                helperText={touched.description && errors.description}
              />
              <CategorySelect
                touched={touched}
                setFieldValue={setFieldValue}
                errors={errors}
              />
            </Stack>

            <Box
              sx={{
                pt: 2,
                display: "flex",
                justifyContent: "end",
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
                    color: "white",
                    borderColor: borderHover,
                    background: backgroundRedSoft,
                  },
                }}
              >
                Close
              </Button>
              <Button
                variant="contained"
                type="submit"
                disabled={!dirty}
                sx={{
                  px: 5,
                  py: 1,
                  color: buttonText,
                  fontSize: typography.button.fontSize,
                  fontWeight: typography.button.fontWeight,
                }}
                startIcon={
                  isLoading ? (
                    <CircularProgress
                      color="inherit"
                      size={20}
                    />
                  ) : isError ? (
                    <WarningAmberIcon
                      color="error"
                      size={20}
                    />
                  ) : (
                    ""
                  )
                }
              >
                Add Drug
              </Button>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
