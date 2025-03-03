import { TextField, Button, Grid, MenuItem, Container } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  manufacturer: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  originType: Yup.string().required("Required"),
  productionDate: Yup.date().required("Required"),
  expirationDate: Yup.date().required("Required"),
  price: Yup.number().positive().required("Required"),
  discount: Yup.number().min(0).required("Required"),
  stock: Yup.number().integer().min(0).required("Required"),
  sold: Yup.number().integer().min(0).required("Required"),
  isVisible: Yup.boolean().required("Required"),
  imageCover: Yup.mixed().required("Required"),
});

const AddDrugs = () => {
  const formik = useFormik({
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
      isVisible: false,
      imageCover: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });

      try {
        const options = {
          url: "https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/drugs",
          method: "POST",
          body: formData,
        };
        const { data } = await axios.request(options);
        console.log(data);

        if (data.status === "success") {
          toast.success(data.message);
        }
      } catch (error) {
        toast.error("Failed to add medicine");
        console.log(error);
      }
    },
  });

  return (
    <Container maxWidth="sm">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {Object.keys(formik.initialValues).map((key) =>
            key !== "imageCover" ? (
              <Grid item xs={12} key={key}>
                <TextField
                  fullWidth
                  label={key}
                  name={key}
                  value={formik.values[key]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched[key] && Boolean(formik.errors[key])}
                  helperText={formik.touched[key] && formik.errors[key]}
                  select={key === "originType" || key === "isVisible"}
                >
                  {key === "originType" &&
                    ["Imported", "Local"].map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  {key === "isVisible" &&
                    [true, false].map((option) => (
                      <MenuItem key={option} value={option}>
                        {String(option)}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>
            ) : (
              <Grid item xs={12} key={key}>
                {/* <input
                  type="file"
                  name={key}
                  onChange={(event) =>
                    formik.setFieldValue(
                      "imageCover",
                      event.currentTarget.files[0]
                    )
                  }
                /> */}
              </Grid>
            )
          )}
          <Grid item xs={12} marginBottom={5}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add Medicine
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddDrugs;
