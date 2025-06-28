/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  CircularProgress,
  IconButton,
  MenuItem,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useTypeContext } from "@/context/UserType.context";
import EditIcon from "@mui/icons-material/Edit";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { getSpecificDrug } from "../../../lib/api/drugApi";
import { useUpdateDrug } from "../../../lib/hooks/useDrugAction";
import { updateDrugSchema } from "../../../lib/schemas/DrugSchema";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  maxHeight: "85vh",
  bgcolor: "background.paper",
  boxShadow: " 0px 1px 4px 0px rgba(245, 158, 11, 0.75)",
  borderRadius: "16px",
  p: 0, // Remove padding here to apply it differently
  overflow: "hidden", // Hide overflow initially
};

export default function UpdateModal({ drugId }) {
  const { token } = useTypeContext();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const {
    typography,
    textPrimary,
    cardBackground,
    cardDetailsBackground,
    backgroundRedSoft,
    borderHover,
  } = useThemeConstants();
  const [specificDrug, setspecificDrug] = useState(null);

  //* Function GET SPECIFIC Drug
  const fetchSpecificDrug = async () => {
    try {
      const drugs = await getSpecificDrug({ token, drugId });
      setspecificDrug(drugs);
    } catch (error) {
      console.error(error);
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
      isVisible: "",
    },
    validationSchema: updateDrugSchema,
    onSubmit: async (values) => {
      mutate(
        { drugId, token, values },
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
      const { name, manufacturer, price, discount, stock, sold, isVisible } =
        specificDrug;
      setValues({
        name: name || "",
        manufacturer: manufacturer || "",
        price: price || "",
        discount: discount || "",
        stock: stock || "",
        sold: sold || "",
        isVisible: isVisible || "",
      });
    }
  }, [specificDrug]);

  return (
    <>
      <IconButton
        onClick={async () => {
          await fetchSpecificDrug();
          handleOpen();
        }}
        color="warning"
        sx={{
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <EditIcon fontSize="medium" />
      </IconButton>
      <Modal
        open={open}
        sx={{ bgcolor: "#000000aa" }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, background: cardBackground, boxShadow: 12 }}>
          <Box
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: cardDetailsBackground,
              boxShadow: 8,
              color: textPrimary,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {/* <EditIcon /> */}
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
                Update Drug
              </Box>
            </Box>
          </Box>
          <Box
            component={"form"}
            onSubmit={handleSubmit}
            sx={{
              p: 3,
              overflow: "auto",
              maxHeight: "calc(85vh - 60px)", // Adjust for header
              display: "grid",
              gap: 1,
              gridTemplateColumns: "1fr 1fr",
              "& .MuiTextField-root": {
                gridColumn: { xs: "span 2", sm: "span 1" },
              },
              "& .MuiTextField-root:nth-of-type(odd)": {
                pr: { sm: 1 },
              },
              "& .MuiTextField-root:nth-of-type(even)": {
                pl: { sm: 1 },
              },
              "& .MuiTextField-root.fullWidth": {
                gridColumn: "span 2",
                px: 0,
              },
            }}
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
            <TextField
              fullWidth
              label="Visibility"
              name="isVisible"
              value={values.isVisible}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.isVisible && touched.isVisible}
              helperText={touched.isVisible && errors.isVisible}
              margin="normal"
              select
            >
              <MenuItem value={true}>True</MenuItem>
              <MenuItem value={false}>False</MenuItem>
            </TextField>
            <Box
              sx={{
                gridColumn: "span 2",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                mt: 3,
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
                type="submit"
                variant="contained"
                color={isError ? "error" : "warning"}
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  px: 2,
                  py: 1.5,
                  fontWeight: "bold",
                  borderRadius: "10px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
                startIcon={
                  isLoading ? (
                    <CircularProgress
                      color="inherit"
                      size={20}
                    />
                  ) : isError ? (
                    <WarningAmberIcon
                      color="warning"
                      size={20}
                    />
                  ) : isSuccess ? (
                    <CheckCircleIcon
                      color="success"
                      size={20}
                    />
                  ) : (
                    <EditIcon size={20} />
                  )
                }
              >
                Update Drug Info
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
