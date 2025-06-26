/* eslint-disable react/prop-types */
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from "@mui/material";

export default function MinimumOrderControl({
  error,
  touched,
  handleChange,
  handleBlur,
  value,
  text,
  name,
  endAdornment = null,
}) {
  return (
    <FormControl
      fullWidth
      sx={{
        mb: 2,
        "&:focus-within label": {
          color: "text.secondary",
        },
        "&:focus-within .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "text.secondary",
          },
        },
      }}
      variant="outlined"
      error={error && touched}
    >
      <InputLabel
        color={error && touched ? "error" : "primary"}
        htmlFor={`outlined-adornment-${name}`}
      >
        {text}
      </InputLabel>
      <OutlinedInput
        id={`outlined-adornment-${name}`}
        type="number"
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        endAdornment={
          endAdornment && (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          )
        }
        label={text}
      />
      {error && touched && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
