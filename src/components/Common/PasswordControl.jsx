/* eslint-disable react/prop-types */
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useState } from 'react';

export default function PasswordControl({
  error,
  touched,
  handleChange,
  handleBlur,
  value,
  text,
  name,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <FormControl fullWidth sx={{ mb: 8 }} variant="outlined">
      <InputLabel
        color={error && touched ? 'error' : 'primary'}
        htmlFor="outlined-adornment-password"
      >
        {text}
      </InputLabel>
      <OutlinedInput
        sx={{ mb: 2 }}
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error && touched}
        helperText={touched && error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? 'hide the password' : 'display the password'
              }
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}
