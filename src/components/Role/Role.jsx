/* eslint-disable react/prop-types */
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  useTheme,
} from '@mui/material';

export default function Role({ errors, touched, setFieldValue, values }) {
  const theme = useTheme();

  return (
    <FormControl sx={{ my: 1, ml: 1 }}>
      <FormLabel
        sx={{ fontSize: '20px', fontWeight: 'bold' }}
        id="demo-row-radio-buttons-group-label"
      >
        Role
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="pharmacy"
          control={<Radio />}
          label="pharmacy"
          checked={values.role === 'pharmacy'}
          onChange={() => setFieldValue('role', 'pharmacy')}
          sx={{ color: theme.palette.text.primary }}
        />
        <FormControlLabel
          value="inventory"
          control={<Radio />}
          label="Inventory"
          checked={values.role === 'inventory'}
          onChange={() => setFieldValue('role', 'inventory')}
          sx={{ color: theme.palette.text.primary }}
        />
      </RadioGroup>
      {errors.role && touched.role && (
        <Typography variant="p" marginLeft={2} color={'error'}>
          {errors.role}
        </Typography>
      )}
    </FormControl>
  );
}
