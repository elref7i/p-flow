/* eslint-disable react/prop-types */
import { Button, CircularProgress, Paper, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useThemeConstants } from "@/lib/constants/theme.constant";
import { useAddPromotion } from "@/lib/hooks/usepromotion";
import { useTypeContext } from "@/context/UserType.context";
import { AddPromotionSchema } from "@/lib/schemas/DrugSchema";

export default function AddPromotaion({ dataInfo, setOpen }) {
  //Context
  const { token } = useTypeContext();

  //Mutation
  const { mutateAsync, isLoading } = useAddPromotion();

  //Themes
  const {
    cardBackground,
    buttonText,
    buttonBackground,
    buttonHoverBackground,
  } = useThemeConstants();
  const { _id, name, price, stock: oldStock } = dataInfo;

  // Formik
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      originalDrugId: _id,
      name,
      price,
      stock: oldStock,
      promotion: {
        quantity: 1,
        freeItems: 1,
      },
    },
    validationSchema: AddPromotionSchema,
    onSubmit: async (values) => {
      await mutateAsync({ token, values });
      setOpen(false);
    },
  });

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

      {/* Actions */}
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={oldStock === 0}
        sx={{
          display: "flex",
          justifyContent: "center",
          mx: "auto",
          color: buttonText,
          background: buttonBackground,
          px: 6,
          mt: 1,
          "&:hover": {
            background: buttonHoverBackground,
          },
        }}
        startIcon={
          isLoading ? (
            <CircularProgress
              color="inherit"
              size={16}
            />
          ) : (
            ""
          )
        }
      >
        Add
      </Button>
    </Paper>
  );
}
