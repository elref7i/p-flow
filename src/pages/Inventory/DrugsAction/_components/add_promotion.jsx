/* eslint-disable react/prop-types */
import { Button, Paper, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import { AddPromotionSchema } from "../../../../lib/schemas/order_schema";

export default function AddPromotaion({ dataInfo }) {
  //Themes
  const {
    cardBackground,
    buttonText,
    buttonBackground,
    buttonHoverBackground,
  } = useThemeConstants();
  const { _id, name, price, stock } = dataInfo;

  // Formik
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
      originalDrugId: _id,
      name,
      price,
      stock,
      promotion: {
        quantity: 1,
        freeItems: 1,
      },
    },

    validationSchema: AddPromotionSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(dirty);

  return (
    <Paper
      component={"form"}
      elevation={2}
      onSubmit={handleSubmit}
      sx={{
        py: 1,
        px: 3,
        mb: 3,
        borderRadius: "8px",
        position: "relative",
        background: cardBackground,
        boxShadow: 9,
      }}
    >
      <TextField
        fullWidth
        label="Buy Quantity"
        margin="normal"
        type="number"
        name="price"
        value={values.price}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.price && touched.price}
        helperText={touched.price && errors.price}
        InputProps={{
          sx: { borderRadius: "10px" },
        }}
      />
      <TextField
        fullWidth
        sx={{ mb: 1 }}
        label="Stock"
        margin="normal"
        type="number"
        name="stock"
        value={values.stock}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.stock && touched.stock}
        helperText={touched.stock && errors.stock}
        InputProps={{
          sx: { borderRadius: "10px" },
        }}
      />
      <TextField
        fullWidth
        sx={{ mb: 1 }}
        label="Quantity"
        margin="normal"
        type="number"
        name="promotion.quantity"
        value={values.promotion.quantity}
        onChange={(e) => setFieldValue("promotion.quantity", e.target.value)}
        onBlur={(e) => setFieldValue("promotion.quantity", e.target.value)}
        error={
          touched?.promotion?.quantity && Boolean(errors?.promotion?.quantity)
        }
        helperText={touched?.promotion?.quantity && errors?.promotion?.quantity}
        InputProps={{
          sx: { borderRadius: "10px" },
        }}
      />
      <TextField
        fullWidth
        sx={{ mb: 1 }}
        label="freeItems"
        margin="normal"
        type="number"
        name="promotion.freeItems"
        value={values.promotion.freeItems}
        onChange={(e) => setFieldValue("promotion.freeItems", e.target.value)}
        onBlur={(e) => setFieldValue("promotion.freeItems", e.target.value)}
        error={
          touched?.promotion?.freeItems && Boolean(errors?.promotion?.freeItems)
        }
        helperText={
          touched?.promotion?.freeItems && errors?.promotion?.freeItems
        }
        InputProps={{
          sx: { borderRadius: "10px" },
        }}
      />

      <Button
        // onClick={handleEdit}
        variant="contained"
        color="primary"
        type="submit"
        disabled={!dirty}
        sx={{
          mx: "auto",
          color: buttonText,
          background: buttonBackground,
          display: "block",
          px: 4,
          mt: 1,
          ":hover": {
            background: buttonHoverBackground,
          },
        }}
        // startIcon={
        //   isLoading ? (
        //     <CircularProgress
        //       color="inherit"
        //       size={16}
        //     />
        //   ) : (
        //     <EditIcon />
        //   )
        // }
      >
        Add
      </Button>
    </Paper>
  );
}
