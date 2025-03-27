'use client';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  TextField,
  Button,
  Divider,
  useTheme,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  const backgroundAuth = theme.palette.background.auth;
  return (
    <Box
      component="footer"
      sx={{
        background: backgroundAuth,
        color: 'white',
        pt: 8,
        pb: 6,
        mb: 0,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                background: 'linear-gradient(45deg, #ffffff 30%, #b3e5fc 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              P-FLOW
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.7)' }}
            >
              P-FLOW is the complete inventory management system designed
              specifically for pharmacies. Track medications, manage orders, and
              optimize your supply chain.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                size="small"
                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 'bold', mb: 2 }}
                >
                  Product
                </Typography>
                <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Link
                      href="#features"
                      color="inherit"
                      underline="hover"
                      sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                      Features
                    </Link>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Link
                      href="#"
                      color="inherit"
                      underline="hover"
                      sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                      Pricing
                    </Link>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Link
                      href="#"
                      color="inherit"
                      underline="hover"
                      sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                      Case Studies
                    </Link>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={6} sm={4}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 'bold', mb: 2 }}
                >
                  Company
                </Typography>
                <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Link
                      href="#"
                      color="inherit"
                      underline="hover"
                      sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                      About
                    </Link>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Link
                      href="#"
                      color="inherit"
                      underline="hover"
                      sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                      Blog
                    </Link>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Link
                      href="#"
                      color="inherit"
                      underline="hover"
                      sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                      Careers
                    </Link>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Link
                      href="#contact"
                      color="inherit"
                      underline="hover"
                      sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                      Contact
                    </Link>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={6} sm={4}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 'bold', mb: 2 }}
                >
                  Resources
                </Typography>
                <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Link
                      href="#"
                      color="inherit"
                      underline="hover"
                      sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                      Documentation
                    </Link>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Link
                      href="#"
                      color="inherit"
                      underline="hover"
                      sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                      Support
                    </Link>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Link
                      href="#"
                      color="inherit"
                      underline="hover"
                      sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                      Privacy Policy
                    </Link>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Link
                      href="#"
                      color="inherit"
                      underline="hover"
                      sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                      Terms of Service
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="body2"
              sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              © {currentYear} P-FLOW. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { sm: 'center' },
                justifyContent: { md: 'flex-end' },
                gap: 2,
              }}
            >
              <Typography variant="body2" sx={{ color: 'white' }}>
                Subscribe to our newsletter
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  placeholder="Enter your email"
                  size="small"
                  variant="outlined"
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                    },
                  }}
                />
                <Button variant="contained" color="secondary" size="small">
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
