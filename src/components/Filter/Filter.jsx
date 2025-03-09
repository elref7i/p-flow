// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import CustomButton from '../Common/ButtonStyle';

// const style = {
//   position: 'fixed',
//   top: '50%',
//   right: 0,
//   transform: 'translateY(-50%)',
//   width: 220,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   transition: 'all 8s',
//   p: 4,
// };

// export default function Filter() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <CustomButton
//         marginInline={'auto 0'}
//         pad={'2px 35px'}
//         onClick={handleOpen}
//         mx={'0 auti'}
//       >
//         Filter
//       </CustomButton>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//         disableScrollLock
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

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
  width: 300, // زيادة العرض لاستيعاب العناصر
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  transition: 'all 0.3s',
  p: 3,
};

export default function Filter() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // State للفلتر
  const [filters, setFilters] = React.useState({
    productionDate: '',
    expirationDate: '',
    priceRange: [0, 1000], // Range للسعر
    page: 1,
    limit: 10,
    sort: 'asc', // الترتيب
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
    console.log('Applied Filters:', filters);
    handleClose(); // إغلاق المودال بعد التطبيق
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

          {/* Production Date */}
          <TextField
            label="Production Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={filters.productionDate}
            onChange={(e) =>
              handleFilterChange('productionDate', e.target.value)
            }
            sx={{ mb: 2 }}
          />

          {/* Expiration Date */}
          <TextField
            label="Expiration Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={filters.expirationDate}
            onChange={(e) =>
              handleFilterChange('expirationDate', e.target.value)
            }
            sx={{ mb: 2 }}
          />

          {/* Price Range */}
          <Typography gutterBottom>Price Range</Typography>
          <Slider
            value={filters.priceRange}
            onChange={(e, newValue) =>
              handleFilterChange('priceRange', newValue)
            }
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            sx={{ mb: 2 }}
          />

          {/* Page */}
          <TextField
            label="Page"
            type="number"
            fullWidth
            value={filters.page}
            onChange={(e) => handleFilterChange('page', e.target.value)}
            sx={{ mb: 2 }}
          />

          {/* Limit */}
          <TextField
            label="Limit"
            type="number"
            fullWidth
            value={filters.limit}
            onChange={(e) => handleFilterChange('limit', e.target.value)}
            sx={{ mb: 2 }}
          />

          {/* Sort */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Sort</InputLabel>
            <Select
              value={filters.sort}
              label="Sort"
              onChange={(e) => handleFilterChange('sort', e.target.value)}
            >
              <MenuItem value="asc">Ascending</MenuItem>
              <MenuItem value="desc">Descending</MenuItem>
            </Select>
          </FormControl>

          {/* Apply and Reset Buttons */}
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
              onClick={() =>
                setFilters({
                  productionDate: '',
                  expirationDate: '',
                  priceRange: [0, 1000],
                  page: 1,
                  limit: 10,
                  sort: 'asc',
                })
              }
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
