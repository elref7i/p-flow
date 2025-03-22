/* eslint-disable react/prop-types */
import * as React from 'react';
import {
  TextField,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Stack,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const style = {
  position: 'sticky',
  bgcolor: 'background.paper',
  top: '80px',
  boxShadow: 24,
  transition: 'all 0.3s',
  borderRadius: 2,
  p: 2,
};

export default function Filter({ setParams }) {
  const [filters, setFilters] = React.useState({
    'productionDate[gte]': null,
    'expirationDate[lte]': null,
    'price[gte]': 0,
    'price[lte]': 1000,
    // page: 1,
    // limit: 0,
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
  };

  return (
    <Paper sx={style}>
      <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
        Filter Options
      </Typography>

      {/* قسم التاريخ */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Date</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>

      {/* قسم السعر */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>

      {/* قسم الصفحة والحد */}
      {/* <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Pagination</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion> */}

      {/* قسم الترتيب */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Sort</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>

      {/* أزرار التطبيق والإعادة */}
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
    </Paper>
  );
}
