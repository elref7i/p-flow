import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useFormik } from 'formik';
import { useTypeContext } from '../../../context/UserType.context';
import { useAddDrug } from '../../../lib/hooks/useDrugAction';
import { DrugSchema } from '../../../lib/schemas/DrugSchema';
import CustomButton from '../../Common/ButtonStyle';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '85%', sm: '60%', md: '50%' },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

export default function AddDrugComponent() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { token } = useTypeContext();
  const { mutate, isLoading, isError } = useAddDrug();
  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
      initialValues: {
        name: '',
        manufacturer: '',
        description: '',
        originType: '',
        productionDate: '',
        expirationDate: '',
        price: '',
        discount: '',
        stock: '',
        sold: '',
        isVisible: '',
      },
      validationSchema: DrugSchema,
      onSubmit: (values) => {
        console.log('Submitting values:', values);
        mutate({ token, values });
      },
    });

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ ml: 'auto', display: 'block', mb: 2 }}
      >
        Add Drug
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Add a New Drug
          </Typography>

          <Stack spacing={2}>
            <Stack direction="row" gap={2}>
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

            <Stack direction="row" gap={2}>
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

            <Stack direction="row" gap={2}>
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

            <Stack direction="row" gap={2}>
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

            <CustomButton
              type="submit"
              mx={'auto 0'}
              sx={{ display: 'flex' }}
              startIcon={
                isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : isError ? (
                  <WarningAmberIcon color="error" size={20} />
                ) : (
                  ''
                )
              }
            >
              Add Drug
            </CustomButton>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
