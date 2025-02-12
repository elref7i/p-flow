import { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Grid2,
  Card,
  CardContent,
  TextField,
  Box,
} from '@mui/material';
import logo from '@/assets/pflow-high-resolution-logo-transparent.png';
import { CustomHead } from '@/components/Common/CustomTypography';
import { CustomLink } from '@/components/Common/ButtonStyle';

const sections = ['Home', 'About', 'Services', 'Contact', 'footer'];

const LandingPage = () => {
  const [selected, setSelected] = useState('Home');

  const handleScroll = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setSelected(section);
    }
  };

  return (
    <>
      {/* Sidebar */}
      <Box
        sx={{
          position: 'fixed',
          right: '2px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          padding: '10px',
          borderRadius: '0 5px 5px 0',
          backgroundColor: 'background.paper', // استخدام لون من الـ theme
        }}
      >
        {sections.map((section) => (
          <Box
            key={section}
            sx={{
              width: '20px',
              height: '5px',
              background: selected === section ? 'primary.main' : 'grey.500', // استخدام ألوان من الـ theme
              cursor: 'pointer',
              transition: '0.3s',
            }}
            onClick={() => handleScroll(section)}
          />
        ))}
      </Box>

      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          textAlign: 'center',
          py: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={logo}
          alt="DrugStore Logo"
          style={{ width: '150px', marginBottom: '20px' }}
        />
        <CustomHead variant="h2">Welcome to P-Flow</CustomHead>
        <Typography variant="h6" sx={{ mt: 2 }} color="text.secondary">
          Your trusted online pharmacy
        </Typography>
        <CustomLink
          to={'/login'}
          variant="contained"
          fw={'bold'}
          p={'15px'}
          br={'10px'}
          sx={{ mt: 3, backgroundColor: 'primary.main' }} // استخدام لون من الـ theme
        >
          Shop Now
        </CustomLink>
      </Box>

      {/* About Us */}
      <Container id="about" sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom color="text.primary">
          About Us
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We provide high-quality medicines with fast delivery and expert
          consultation.
        </Typography>
      </Container>

      {/* Services */}
      <Container id="services" sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom color="text.primary">
          Our Services
        </Typography>
        <Grid2 container spacing={3}>
          {['Fast Delivery', 'Expert Consultation', 'Affordable Prices'].map(
            (service) => (
              <Grid2 item xs={12} md={4} key={service}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="text.primary">
                      {service}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            )
          )}
        </Grid2>
      </Container>

      {/* Contact Us */}
      <Container id="contact" sx={{ py: 5 }}>
        <Typography variant="h4" gutterBottom color="text.primary">
          Contact Us
        </Typography>
        <TextField fullWidth label="Your Name" margin="normal" />
        <TextField fullWidth label="Your Email" margin="normal" />
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          margin="normal"
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </Container>
    </>
  );
};

export default LandingPage;
