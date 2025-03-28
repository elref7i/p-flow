/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import darkLogo from '../../assets/Frame 1.svg';
import lighLogo from '../../assets/Light 1.svg';
// Styled container for the logo
const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
  flexGrow: 1,
  transition: 'transform 0.3s ease',
}));

const Logo = ({ width = 40, height = 40, alt = 'P-floW', children }) => {
  const theme = useTheme();

  return (
    <LogoContainer>
      <Box
        component="img"
        src={theme.palette.mode === 'dark' ? darkLogo : lighLogo}
        alt={alt}
        sx={{
          width: width,
          height: height,
          borderRadius: '50%',
          objectFit: 'contain',
          transition: 'all 0.3s ease',
        }}
      />
      {children && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {children}
        </Box>
      )}
    </LogoContainer>
  );
};

// Example usage with gradient text as children
export const GradientLogo = ({
  logoSrc,
  width,
  height,
  alt,
  text = 'P-FLOW',
  onClick,
}) => {
  return (
    <Logo
      logoSrc={logoSrc}
      width={width}
      height={height}
      alt={alt}
      onClick={onClick}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #1976d2 30%, #00bcd4 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {text}
      </Typography>
    </Logo>
  );
};

export default Logo;
