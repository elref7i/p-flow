/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { CircularProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useTypeContext } from "@/context/UserType.context";
import EditIcon from "@mui/icons-material/Edit";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { getSpecificDrug } from "../../../lib/api/drugApi";
import { useUpdateDrug } from "../../../lib/hooks/useDrugAction";
import { updateDrugSchema } from "../../../lib/schemas/DrugSchema";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
  overflow: "auto",
};

export default function UpdateModal({ DrugId }) {
  const { token } = useTypeContext();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };
  const [specificDrug, setspecificDrug] = useState(null);

  //* Function GET SPECIFIC Drug
  const fetchSpecificDrug = async () => {
    try {
      const drugs = await getSpecificDrug({ token, DrugId });
      setspecificDrug(drugs);
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, isError, mutate, reset, isSuccess } = useUpdateDrug();

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    setValues,
  } = useFormik({
    initialValues: {
      name: "",
      manufacturer: "",
      price: "",
      discount: "",
      stock: "",
      sold: "",
    },
    validationSchema: updateDrugSchema,
    onSubmit: async (values) => {
      mutate(
        { DrugId, token, values },
        {
          onSuccess: () => {
            //* لما يتم تفعيل socket in backend
            // await fetchUserData(userId, token);
            handleClose();
          },
        }
      );
    },
  });

  useEffect(() => {
    if (specificDrug) {
      const { name, manufacturer, price, discount, stock, sold } = specificDrug;
      setValues({
        name: name || "",
        manufacturer: manufacturer || "",
        price: price || "",
        discount: discount || "",
        stock: stock || "",
        sold: sold || "",
      });
    }
  }, [specificDrug]);

  return (
    <Box>
      <Button
        onClick={async () => {
          await fetchSpecificDrug();
          handleOpen();
        }}
        variant="contained"
        color="warning"
        sx={{
          fontSize: { xs: "10px", md: "15px", textTransform: "capitalize" },
        }}
        startIcon={<EditIcon />}
      >
        Update
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component={"form"}
            onSubmit={handleSubmit}
            sx={{ overflow: "auto" }}
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
              margin="normal"
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
              margin="normal"
            />
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
              margin="normal"
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
              margin="normal"
            />
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
              margin="normal"
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
              margin="normal"
            />

            <Box sx={{ mx: "auto", mt: 3, width: "fit-content" }}>
              <Button
                type="submit"
                variant="contained"
                color={isError ? "error" : "warning"}
                sx={{
                  fontSize: { xs: "10px", md: "18px", mx: "auto" },
                  px: 5,
                  fontWeight: "bold",
                }}
                startIcon={
                  isLoading ? (
                    <CircularProgress color="inherit" size={16} />
                  ) : isError ? (
                    <WarningAmberIcon color="warning" size={16} />
                  ) : isSuccess ? (
                    <CheckCircleIcon color="success" size={16} />
                  ) : (
                    ""
                  )
                }
              >
                Update
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
