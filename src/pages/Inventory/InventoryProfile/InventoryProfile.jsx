import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Button,
  CardMedia,
  Divider,
  Container,
  Grid2,
} from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DrugCard from "../../../components/PharmacyComonents/DrugCard/DrugCard";
import { Helmet } from "react-helmet";

const InventoryProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inventory, setInventory] = useState(null);
  const [drugs, setDrugs] = useState([]);

  const mockInventory = {
    id: 1,
    name: "Main Pharmacy",
    address: "123 Main St, Cairo, Egypt",
    phone: "+20 100 123 4567",
    email: "info@mainpharmacy.com",
    image: "https://via.placeholder.com/400x200",
  };

  const mockDrugs = [
    {
      _id: "67cc0b65c8e06059b6061472",
      name: "Abilify 5 Mg 10 Tabs.",
      manufacturer: "Otsuka",
      description: "psychiatric.antipsychotics",
      price: 134.5,
      discount: 9,
      discountedPrice: 122.395,
      stock: 1,
      productionDate: "2023-05-31T00:00:00.000Z",
      expirationDate: "2026-06-15T00:00:00.000Z",
      imageCover: [],
      distanceInKm: 12.560185895458059,
    },
    {
      _id: "67cc0b65c8e06059b6061472",
      name: "Abilify 5 Mg 10 Tabs.",
      manufacturer: "Otsuka",
      description: "psychiatric.antipsychotics",
      price: 134.5,
      discount: 9,
      discountedPrice: 122.395,
      stock: 1,
      productionDate: "2023-05-31T00:00:00.000Z",
      expirationDate: "2026-06-15T00:00:00.000Z",
      imageCover: [],
      distanceInKm: 12.560185895458059,
    },
    {
      _id: "67cc0b65c8e06059b6061472",
      name: "Abilify 5 Mg 10 Tabs.",
      manufacturer: "Otsuka",
      description: "psychiatric.antipsychotics",
      price: 134.5,
      discount: 9,
      discountedPrice: 122.395,
      stock: 1,
      productionDate: "2023-05-31T00:00:00.000Z",
      expirationDate: "2026-06-15T00:00:00.000Z",
      imageCover: [],
      distanceInKm: 12.560185895458059,
    },
    {
      _id: "67cc0b65c8e06059b6061472",
      name: "Abilify 5 Mg 10 Tabs.",
      manufacturer: "Otsuka",
      description: "psychiatric.antipsychotics",
      price: 134.5,
      discount: 9,
      discountedPrice: 122.395,
      stock: 1,
      productionDate: "2023-05-31T00:00:00.000Z",
      expirationDate: "2026-06-15T00:00:00.000Z",
      imageCover: [],
      distanceInKm: 12.560185895458059,
    },
  ];

  useEffect(() => {
    setInventory(mockInventory);
    setDrugs(mockDrugs);
  }, []);

  if (!inventory) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  return (
    <>
      <Helmet>
        <title>Inventory Profile</title>
        <meta
          name="description"
          content="View and manage detailed inventory profiles, including stock levels, suppliers, and drug details."
        />
        <meta
          name="keywords"
          content="inventory, profile, stock management, pharmacy, drugs, warehouse"
        />
      </Helmet>

      <Container sx={{ py: 4 }}>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 9 }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
              Available Drugs
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid2 container spacing={2}>
              {drugs.map((drug) => (
                <Grid2
                  justifySelf={"center"}
                  size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                  key={drug._id}
                >
                  <DrugCard dataInfo={drug} />
                </Grid2>
              ))}
            </Grid2>
          </Grid2>

          <Grid2 order={{ xs: -1, md: 0 }} pt={5} size={{ xs: 12, md: 3 }}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 2,
                textAlign: "center",
                position: "sticky",
                top: 20,
              }}
            >
              <Paper
                elevation={5}
                sx={{
                  mx: "auto",
                  width: "fit-content",
                  display: "flex",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 150,
                    height: 150,
                    borderRadius: "16px",
                    objectFit: "cover",
                  }}
                  image={
                    "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-1/480147019_4012323662428731_6947705778976585090_n.jpg?stp=c0.374.1536.1536a_dst-jpg_s160x160_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_ohc=cth9geKyc-0Q7kNvgELlq_o&_nc_oc=Adj-0nDpAZ9qMgYvqX8MkysBue1HSDASGIeElSeeY-xdVQ3gULD3M2mQUlsQ96z32E4&_nc_zt=24&_nc_ht=scontent.fcai20-5.fna&_nc_gid=AKLM3iZ3zLRFTv1Sc87ikNG&oh=00_AYHR5h7G6YEwb_eXiS_YawSV9dJ73Na9NM9egF-XW3Ly5g&oe=67D3F6F4"
                  }
                  alt={inventory.name}
                />
              </Paper>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{ wordBreak: "break-word" }}
              >
                <StorefrontIcon
                  fontSize="large"
                  sx={{ verticalAlign: "middle", mr: 1 }}
                />
                {inventory.name}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                gutterBottom
                sx={{ wordBreak: "break-word" }}
              >
                📍 <strong>Address:</strong> {inventory.address}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                gutterBottom
                sx={{ wordBreak: "break-word" }}
              >
                📞 <strong>Phone:</strong> {inventory.phone}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ wordBreak: "break-word" }}
              >
                ✉️ <strong>Email:</strong> {inventory.email}
              </Typography>
            </Paper>
          </Grid2>
        </Grid2>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 4, py: 1.5, fontWeight: "bold" }}
          onClick={() => navigate(-1)}
        >
          🔙 Back
        </Button>
      </Container>
    </>
  );
};

export default InventoryProfile;
