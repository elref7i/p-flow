/* eslint-disable react/prop-types */
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormHelperText,
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
    <FormControl
      fullWidth
      sx={{
        '&:focus-within label': {
          color: 'text.secondary',
        },
        '&:focus-within .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'text.secondary',
          },
        },
      }}
      variant="outlined"
      error={error && touched}
    >
      <InputLabel
        color={error && touched ? 'error' : 'primary'}
        htmlFor="outlined-adornment-password"
      >
        {text}
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error && touched}
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
        label={text}
      />
      {error && touched && (
        <FormHelperText error={error && touched}>{error}</FormHelperText>
      )}
    </FormControl>
  );
}
