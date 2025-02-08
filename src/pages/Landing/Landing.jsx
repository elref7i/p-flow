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
// import  // تأكد من وضع الصورة في المسار الصحيح
import logo from '../../assets/pflow-high-resolution-logo-transparent.png';
import { CustomHead } from '../../components/Common/CustomTypography';
import { CustomLink } from '../../components/Common/ButtonStyle';

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
          background: '#333',
          padding: '10px',
          borderRadius: '0 5px 5px 0',
        }}
      >
        {sections.map((section) => (
          <Box
            key={section}
            sx={{
              width: '20px',
              height: '5px',
              background: selected === section ? '#fff' : '#666',
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
          bgcolor: '#DDDDDD',
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
        <CustomHead variant="h2">Welcome to DrugStore</CustomHead>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Your trusted online pharmacy
        </Typography>
        <CustomLink
          to={'/login'}
          variant="contained"
          color="primary"
          bg={'#2B273A'}
          c={'#DDDDDD'}
          hoverColor={'#2B273A'}
          hoverbg={'#DDDDDD'}
          fw={'bold'}
          p={'15px'}
          br={'10px'}
          sx={{ mt: 3 }}
        >
          Shop Now
        </CustomLink>
      </Box>

      {/* About Us */}
      <Container id="about" sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          We provide high-quality medicines with fast delivery and expert
          consultation.
        </Typography>
      </Container>

      {/* Services */}
      <Container id="services" sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Grid2 container spacing={3}>
          {['Fast Delivery', 'Expert Consultation', 'Affordable Prices'].map(
            (service) => (
              <Grid2 item xs={12} md={4} key={service}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{service}</Typography>
                  </CardContent>
                </Card>
              </Grid2>
            )
          )}
        </Grid2>
      </Container>

      {/* Contact Us */}
      <Container id="contact" sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom>
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

      <Box id="footer" sx={{ textAlign: 'center', py: 3, bgcolor: 'grey.200' }}>
        <Typography variant="body2">
          &copy; 2025 DrugStore. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default LandingPage;
