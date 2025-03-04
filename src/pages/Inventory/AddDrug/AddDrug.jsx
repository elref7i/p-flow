import { CircularProgress, MenuItem, Stack, TextField } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CustomButton from "@/components/Common/ButtonStyle";
import { useFormik } from "formik";
import { DrugSchema } from "../../../lib/schemas/DrugSchema";
import { useTypeContext } from "../../../context/UserType.context";
import { useAddDrug } from "../../../lib/hooks/useDrugAction";

export default function AddDrug() {
  const { token } = useTypeContext();
  const { mutate, isLoading, isError } = useAddDrug();
  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
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
    <Stack
      component={"form"}
      onSubmit={handleSubmit}
      maxWidth={"lg"}
      marginInline={"auto"}
      gap={0}
    >
      <Stack direction={"row"} gap={1}>
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          type="text"
          name="name"
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
          margin="normal"
          type="text"
          value={values.manufacturer}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.manufacturer && touched.manufacturer}
          helperText={touched.manufacturer && errors.manufacturer}
        />
      </Stack>

      <Stack direction={"row"} gap={1}>
        <TextField
          fullWidth
          label="Origin Type"
          name="originType"
          margin="normal"
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
          label="isVisible"
          name="isVisible"
          margin="normal"
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
      <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
        <TextField
          fullWidth
          label="Production Date"
          name="productionDate"
          margin="normal"
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
          margin="normal"
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

      <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
        <TextField
          fullWidth
          label="Price"
          name="price"
          margin="normal"
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
          margin="normal"
          type="number"
          value={values.discount}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.discount && touched.discount}
          helperText={touched.discount && errors.discount}
        />
      </Stack>
      <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
        <TextField
          fullWidth
          label="Stock"
          name="stock"
          margin="normal"
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
          margin="normal"
          type="number"
          value={values.sold}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.sold && touched.sold}
          helperText={touched.sold && errors.sold}
        />
      </Stack>
      <TextField
        fullWidth
        label="Description"
        name="description"
        margin="normal"
        type="text"
        value={values.description}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.description && touched.description}
        helperText={touched.description && errors.description}
      />

      <CustomButton
        type="submit"
        marginInline={"auto 0"}
        sx={{ display: "flex" }}
        startIcon={
          isLoading ? (
            <CircularProgress color="inherit" size={20} />
          ) : isError ? (
            <WarningAmberIcon color="error" size={20} />
          ) : (
            ""
          )
        }
      >
        Add Drug
      </CustomButton>
    </Stack>
  );
}
