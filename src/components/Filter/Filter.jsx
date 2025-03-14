/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CustomButton from '../Common/ButtonStyle';
import {
  TextField,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Stack,
} from '@mui/material';

const style = {
  position: 'fixed',
  top: '50%',
  right: 0,
  transform: 'translateY(-50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  transition: 'all 0.3s',
  p: 3,
  borderTopLeftRadius: 20,
  borderBottomLeftRadius: 20,
};

export default function Filter({ setParams }) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // State للفلتر
  const [filters, setFilters] = React.useState({
    'productionDate[gte]': null,
    'expirationDate[lte]': null,
    'price[gte]': 0,
    'price[lte]': 1000,
    page: 1,
    limit: 0,
    sort: 'distanceInKm',
  });

  // دالة لتحديث الفلتر
  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  // دالة لتطبيق الفلتر
  const applyFilters = () => {
    setParams(filters);
    handleClose();
  };

  return (
    <div>
      <CustomButton
        marginInline={'auto 0'}
        pad={'2px 35px'}
        onClick={handleOpen}
        mx={'0 auto'}
      >
        Filter
      </CustomButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2 }}
          >
            Filter Options
          </Typography>

          <TextField
            label="Production Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={filters['productionDate[gte]'] || ''}
            onChange={(e) =>
              handleFilterChange('productionDate[gte]', e.target.value)
            }
            sx={{ mb: 2 }}
          />

          <TextField
            label="Expiration Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={filters['expirationDate[lte]'] || ''}
            onChange={(e) =>
              handleFilterChange('expirationDate[lte]', e.target.value)
            }
            sx={{ mb: 2 }}
          />

          <Typography gutterBottom>Price Range</Typography>
          <Slider
            value={[filters['price[gte]'], filters['price[lte]']]}
            onChange={(e, newValue) => {
              handleFilterChange('price[gte]', newValue[0]);
              handleFilterChange('price[lte]', newValue[1]);
            }}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Page"
            type="number"
            fullWidth
            value={filters.page}
            onChange={(e) =>
              handleFilterChange('page', parseInt(e.target.value))
            }
            sx={{ mb: 2 }}
          />

          <TextField
            label="Limit"
            type="number"
            fullWidth
            value={filters.limit}
            onChange={(e) =>
              handleFilterChange('limit', parseInt(e.target.value))
            }
            sx={{ mb: 2 }}
          />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Sort By</InputLabel>
            <Select
              value={filters.sort}
              label="Sort By"
              onChange={(e) => handleFilterChange('sort', e.target.value)}
            >
              <MenuItem value="distanceInKm">Distance</MenuItem>
              <MenuItem value="priceAsc">Price: Low to High</MenuItem>
              <MenuItem value="priceDesc">Price: High to Low</MenuItem>
            </Select>
          </FormControl>

          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button
              variant="contained"
              onClick={applyFilters}
              sx={{ flex: 1, bgcolor: 'primary.main' }}
            >
              Apply
            </Button>
            <Button
              variant="outlined"
              onClick={() => setFilters({})}
              sx={{ flex: 1 }}
            >
              Reset
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
