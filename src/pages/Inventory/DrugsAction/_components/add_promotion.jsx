/* eslint-disable react/prop-types */
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
  Paper,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

export default function AddPromotaion() {
  //Themes
  const { cardBackground, buttonText } = useThemeConstants();

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
      originalDrugId: "",
      name: "",
      price: 0,
      stock: 0,
      promotion: {
        quantity: 0,
        freeItems: 0,
      },
    },

    // validationSchema: AdminAddUser,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Paper
      component={"form"}
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
        label="Buy Quantity"
        margin="normal"
        type="number"
        name="buyQuantity"
        value={values.buyQuantity}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.buyQuantity && touched.buyQuantity}
        helperText={touched.buyQuantity && errors.buyQuantity}
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

      <FormControl
        fullWidth
        sx={{ mb: 3 }}
        error={errors.isActive && touched.isActive}
      >
        <InputLabel
          variant="standard"
          htmlFor="uncontrolled-native"
        >
          Age
        </InputLabel>
        <NativeSelect
          // defaultValue={active}
          name="isActive"
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
          onChange={(e) => {
            setFieldValue("isActive", e.target.value);
          }}
        >
          <option value={"true"}>Active</option>
          <option value={"false"}>NotActive</option>
        </NativeSelect>
        {errors.status && touched.status && (
          <FormHelperText>Error</FormHelperText>
        )}
      </FormControl>

      <Button
        // onClick={handleEdit}
        variant="contained"
        color="primary"
        type="submit"
        sx={{
          mx: "auto",
          color: buttonText,
          display: "block",
          px: 4,
          mt: 2,
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
        add
        {/* {!showEdit ? "Edit Promotion" : "Show Details"} */}
      </Button>
    </Paper>
  );
}
