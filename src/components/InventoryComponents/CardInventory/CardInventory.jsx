import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Avatar,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import { Phone, LocalShipping, ArrowForward } from "@mui/icons-material";
import SearchBar from "../../SearchBar/SearchBar";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import RoomIcon from "@mui/icons-material/Room";
import DistanceIndicator from "../../../pages/Inventory/InventoryProfile/components/DistanceIndicator";
import { useGetAllInventoriesQuery } from "../../../lib/hooks/pharmacy.action";
import { useTypeContext } from "../../../context/UserType.context";
import { useNavigate } from "react-router-dom";
// Sample data based on the provided structure
// const inventories = [
//   {
//     _id: "67fc5523701e6187750fc720",
//     name: "Aya Alaa",
//     ownerName: "Owner",
//     phone: "01234567890",
//     identificationNumber: "98716154321",
//     registrationNumber: "12345167189",
//     city: "Cairo",
//     governorate: "Cairo",
//     shippingPrice: 0,
//     location: {
//       type: "Point",
//       coordinates: [29.1, 25.1167],
//     },
//     DistanceInKm: 0,
//   },
//   {
//     _id: "67fc5523701e6187750fc721",
//     name: "Mohamed Hassan",
//     ownerName: "Ahmed Mahmoud",
//     phone: "01098765432",
//     identificationNumber: "12345678901",
//     registrationNumber: "98765432109",
//     city: "Alexandria",
//     governorate: "Alexandria",
//     shippingPrice: 25,
//     location: {
//       type: "Point",
//       coordinates: [31.2001, 29.9187],
//     },
//     DistanceInKm: 215,
//   },
//   {
//     _id: "67fc5523701e6187750fc722",
//     name: "Fatima Ahmed",
//     ownerName: "Khaled Ibrahim",
//     phone: "01112345678",
//     identificationNumber: "45678901234",
//     registrationNumber: "56789012345",
//     city: "Giza",
//     governorate: "Giza",
//     shippingPrice: 15,
//     location: {
//       type: "Point",
//       coordinates: [30.0131, 31.2089],
//     },
//     DistanceInKm: 125,
//   },
//   {
//     _id: "67fc5523701e6187750fc723",
//     name: "Omar Khaled",
//     ownerName: "Laila Mostafa",
//     phone: "01023456789",
//     identificationNumber: "78901234567",
//     registrationNumber: "89012345678",
//     city: "Luxor",
//     governorate: "Luxor",
//     shippingPrice: 40,
//     location: {
//       type: "Point",
//       coordinates: [25.6872, 32.6396],
//     },
//     DistanceInKm: 650,
//   },
// ];

const EnhancedInventoryCard = () => {
  //Navigation
  const navigate = useNavigate();

  //Context
  const { token } = useTypeContext();

  // Quieries
  const { data: payload, isLoading } = useGetAllInventoriesQuery({
    token,
    params: {},
  });

  isLoading && <p>Loading...</p>;

  //Themes
  const {
    typography,
    cardBackground,
    textPrimary,
    buttonBackground,
    buttonHover,
    buttonText,
    cardDetailsBackground,
  } = useThemeConstants();

  return (
    <Box sx={{ p: 3 }}>
      <Box mb={3}>
        <SearchBar />
      </Box>
      <Grid
        container
        spacing={3}
      >
        {payload.inventories.map((inventory) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={inventory._id}
          >
            <Card
              sx={{
                background: cardBackground,
                boxShadow: 2,
                borderRadius: "16px",
                overflow: "hidden",
                height: "100%",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
              }}
            >
              <CardContent
                sx={{
                  p: 0,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Header */}
                <Box
                  sx={{
                    background: cardDetailsBackground,
                    color: textPrimary,
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={inventory.profileImage}
                    sx={{
                      width: 60,
                      height: 60,
                      color: textPrimary,
                    }}
                  ></Avatar>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: typography.h6.fontWeight,
                        fontSize: typography.h6.fontSize,
                        lineHeight: typography.h6.lineHeight,
                      }}
                    >
                      {inventory.name}
                    </Typography>
                  </Box>
                </Box>

                {/* Content */}
                <Box sx={{ p: 2, flexGrow: 1 }}>
                  <Stack spacing={1.5}>
                    <Stack
                      alignItems="start"
                      gap={2}
                      justifyContent={"center"}
                    >
                      <Stack
                        direction={"row"}
                        alignItems="center"
                        gap={2}
                      >
                        <IconButton
                          size="small"
                          sx={{
                            bgcolor: buttonBackground,
                            color: buttonText,
                            "&:hover": {
                              background: buttonHover,
                            },
                          }}
                        >
                          <RoomIcon fontSize="small" />
                        </IconButton>
                        <Typography
                          variant="body1"
                          fontWeight={500}
                        >
                          {inventory.governorate}, {inventory.city}
                        </Typography>
                      </Stack>
                      <Stack
                        alignItems={"center"}
                        direction={"row"}
                        gap={2}
                        title="Phone Number"
                      >
                        <IconButton
                          size="small"
                          sx={{
                            background: buttonBackground,
                            color: buttonText,
                            "&:hover": {
                              background: buttonHover,
                            },
                          }}
                        >
                          <Phone fontSize="small" />
                        </IconButton>
                        <Typography>+201007890938</Typography>
                      </Stack>
                      <Stack
                        alignItems={"center"}
                        direction={"row"}
                        gap={3}
                        width={"100%"}
                        title={`Shipping: ${
                          inventory.shippingPrice > 0
                            ? `${inventory.shippingPrice} EGP`
                            : "Free"
                        }`}
                      >
                        <IconButton
                          size="small"
                          color="primary"
                          sx={{
                            bgcolor: buttonBackground,
                            color: buttonText,
                            "&:hover": {
                              bgcolor: buttonHover,
                            },
                          }}
                        >
                          <LocalShipping fontSize="small" />
                        </IconButton>
                        <Box sx={{ flexGrow: 1 }}>
                          <DistanceIndicator distance={20} />
                        </Box>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>

                <Divider />

                {/* Footer */}
                <Box
                  sx={{
                    py: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                      navigate(`/inventoryprofile/${inventory._id}`);
                    }}
                    endIcon={<ArrowForward />}
                    sx={{
                      fontSize: typography.button.fontSize,
                      fontWeight: typography.button.fontWeight,
                      background: buttonBackground,
                      color: buttonText,
                      "&:hover": {
                        background: buttonHover,
                      },
                      mx: "auto",
                    }}
                  >
                    View Profile
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EnhancedInventoryCard;
