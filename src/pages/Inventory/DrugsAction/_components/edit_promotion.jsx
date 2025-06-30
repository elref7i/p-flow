/* eslint-disable react/prop-types */
import { Button, CircularProgress, Paper, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useThemeConstants } from "@/lib/constants/theme.constant";
import { UpdatePromotionSchema } from "@/lib/schemas/DrugSchema";
import { useTypeContext } from "@/context/UserType.context";
import { useUpdatePromotion } from "@/lib/hooks/usepromotion";

export default function EditPromotion({ id, setShowOptions, dataInfo }) {
  const { token } = useTypeContext();
  const { mutateAsync, isLoading } = useUpdatePromotion();
  const { cardBackground, buttonText } = useThemeConstants();

  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
      initialValues: {
        name: dataInfo?.name,
        promotion: {
          freeItems: dataInfo?.promotion?.freeQuantity,
        },
      },

      validationSchema: UpdatePromotionSchema,
      onSubmit: async (values) => {
        await mutateAsync({ token, values, drugId: id });
        setShowOptions("default");
      },
    });

  return (
    <Paper
      component="form"
      elevation={2}
      onSubmit={handleSubmit}
      sx={{
        p: 3,
        mb: 3,
        borderRadius: "8px",
        position: "relative",
        background: cardBackground,
        boxShadow: 12,
      }}
    >
      <TextField
        fullWidth
        label="Drug Name"
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
        fullWidth
        sx={{ mb: 3 }}
        label="Free Quantity"
        margin="normal"
        type="number"
        name="freeQuantity"
        value={values.freeQuantity}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.freeQuantity && touched.freeQuantity}
        helperText={touched.freeQuantity && errors.freeQuantity}
        InputProps={{
          sx: { borderRadius: "10px" },
        }}
      />

      <Button
        variant="contained"
        color="warning"
        type="submit"
        sx={{
          display: "flex",
          justifyContent: "center",
          mx: "auto",
          color: buttonText,
          px: 6,
          mt: 2,
        }}
        startIcon={
          isLoading && (
            <CircularProgress
              color="inherit"
              size={16}
            />
          )
        }
      >
        Edit
      </Button>
    </Paper>
  );
}
