/* eslint-disable react/prop-types */
import { useCategories } from "../../lib/hooks/useAdminAction";
import { Autocomplete, TextField } from "@mui/material";

export default function CategorySelect({ touched, setFieldValue, errors }) {
  // Quieries
  const { data, isLoading: loadingCategories } = useCategories();

  return (
    <Autocomplete
      fullWidth
      options={data && data.data}
      getOptionLabel={(option) => option.name}
      loading={loadingCategories}
      onChange={(event, value) => {
        setFieldValue("category", value._id);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Category"
          name="category"
          margin="normal"
          error={touched.category && Boolean(errors.category)}
          helperText={touched.category && errors.category}
        />
      )}
    />
  );
}
