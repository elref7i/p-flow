// import {
//   Box,
//   Typography,
//   Grid,
//   Button,
//   Card,
//   CardContent,
//   Avatar,
//   Stack,
// } from "@mui/material";
// import { Warehouse } from "@mui/icons-material";
// import SearchBar from "../../SearchBar/SearchBar";
// import DistanceIndicator from "../../../pages/Inventory/InventoryProfile/components/DistanceIndicator";
// import RoomIcon from "@mui/icons-material/FmdGood";
// import { useThemeConstants } from "../../../lib/constants/theme.constant";
// // Sample data based on the provided structure
// const inventories = [
//   {
//     _id: "67fadef5e815995dde619546",
//     name: "Youssef Ramadan",
//     role: "inventory",
//     location: {
//       type: "Point",
//       coordinates: [29.1, 25.1167],
//     },
//     DistanceInKm: 0,
//     bio: "Inventory specialist with 5 years of experience in warehouse management and logistics coordination.",
//   },
//   {
//     _id: "67fc5523701e6187750fc720",
//     name: "Aya Alaa",
//     role: "inventory",
//     location: {
//       type: "Point",
//       coordinates: [29.1, 25.1167],
//     },
//     DistanceInKm: 0,
//     bio: "Logistics coordinator focused on optimizing inventory flow and maintaining accurate stock records.",
//   },
//   {
//     _id: "67fc5523701e6187750fc721",
//     name: "Mohamed Hassan",
//     role: "inventory",
//     location: {
//       type: "Point",
//       coordinates: [30.0444, 31.2357],
//     },
//     DistanceInKm: 120,
//     bio: "Warehouse manager specializing in inventory control and team leadership for efficient operations.",
//   },
//   {
//     _id: "67fc5523701e6187750fc722",
//     name: "Fatima Ahmed",
//     role: "inventory",
//     location: {
//       type: "Point",
//       coordinates: [31.2001, 29.9187],
//     },
//     DistanceInKm: 215,
//     bio: "Supply chain specialist with expertise in inventory forecasting and demand planning.",
//   },
// ];

// const InventoryCard = () => {
//   const { typography } = useThemeConstants();
//   return (
//     <Box sx={{ p: 3 }}>
//       {/* <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mb: 3,
//           flexWrap: "wrap",
//           gap: 2,
//         }}
//       >
//         <Typography
//           variant="h4"
//           component="h1"
//           sx={{ fontWeight: "bold" }}
//         >
//           Inventory Management
//         </Typography>
//         <Button
//           variant="outlined"
//           startIcon={<FilterList />}
//           sx={{
//             borderColor: theme.palette.primary.main,
//             color: theme.palette.primary.main,
//             "&:hover": {
//               borderColor: theme.palette.primary.dark,
//               bgcolor: "rgba(0, 0, 0, 0.04)",
//             },
//           }}
//         >
//           Filters
//         </Button>
//       </Box> */}

//       {/* <Paper sx={{ mb: 3, p: 2 }}>
//         <TextField
//           placeholder="Search inventories..."
//           variant="outlined"
//           size="small"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           sx={{ width: "100%", maxWidth: "500px" }}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <Search />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Paper> */}
//       <Box mb={3}>
//         <SearchBar />
//       </Box>

//       <Grid
//         container
//         spacing={3}
//       >
//         {inventories.map((inventory) => (
//           <Grid
//             item
//             xs={12}
//             sm={6}
//             md={4}
//             lg={3}
//             key={inventory._id}
//           >
//             <Card
//               sx={{
//                 borderRadius: "16px",
//                 overflow: "hidden",
//                 height: "100%",
//                 transition: "transform 0.2s",
//                 "&:hover": {
//                   transform: "translateY(-8px)",
//                 },
//               }}
//             >
//               <CardContent
//                 sx={{
//                   p: 0,
//                   height: "100%",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     p: 3,
//                     pb: 2,
//                   }}
//                 >
//                   <Avatar
//                     sx={{
//                       width: 80,
//                       height: 80,
//                       bgcolor: "white",
//                       color: "#121212",
//                       mb: 1,
//                     }}
//                   >
//                     <Warehouse sx={{ fontSize: 40 }} />
//                   </Avatar>
//                   <Typography
//                     variant="h6"
//                     align="center"
//                     gutterBottom
//                     sx={{
//                       fontWeight: typography.h4.fontWeight,
//                       fontSize: typography.h4.fontSize,
//                       lineHeight: typography.h4.lineHeight,
//                     }}
//                   >
//                     Ahmed Refai
//                   </Typography>
//                   <Box>
//                     <Stack
//                       direction="row"
//                       alignItems="center"
//                       gap={1}
//                       mb={1}
//                     >
//                       <RoomIcon color="red" />
//                       <Typography
//                         sx={{
//                           fontWeight: typography.h6.fontWeight,
//                           fontSize: typography.h6.fontSize,
//                           lineHeight: typography.h6.lineHeight,
//                         }}
//                       >
//                         governorate,City
//                       </Typography>
//                     </Stack>
//                   </Box>
//                   <Button
//                     variant="contained"
//                     sx={{
//                       bgcolor: "white",
//                       color: "#121212",
//                       borderRadius: "20px",
//                       px: 3,
//                       "&:hover": {
//                         bgcolor: "rgba(255, 255, 255, 0.9)",
//                       },
//                     }}
//                   >
//                     Go Profile
//                   </Button>
//                 </Box>
//                 {/* <DistanceIndicator distance={50} /> */}
//                 <Box
//                   sx={{
//                     mt: "auto",
//                     p: 2,
//                     // display: "flex",
//                     // alignItems: "center",
//                     // justifyContent: "center",
//                     borderTop: "1px solid rgba(255, 255, 255, 0.1)",
//                   }}
//                 >
//                   {/* <LocationOn
//                     fontSize="small"
//                     sx={{ mr: 0.5 }}
//                   />
//                   <Typography variant="caption">
//                     {`${inventory.location.coordinates[0].toFixed(
//                       2
//                     )}, ${inventory.location.coordinates[1].toFixed(2)} (${
//                       inventory.DistanceInKm
//                     } km)`}
//                   </Typography> */}
//                   <DistanceIndicator distance={50} />
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default InventoryCard;

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
  useTheme,
} from "@mui/material";
import {
  Warehouse,
  Phone,
  LocalShipping,
  ArrowForward,
} from "@mui/icons-material";
import SearchBar from "../../SearchBar/SearchBar";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import RoomIcon from "@mui/icons-material/Room";
import DistanceIndicator from "../../../pages/Inventory/InventoryProfile/components/DistanceIndicator";
// Sample data based on the provided structure
const inventories = [
  {
    _id: "67fc5523701e6187750fc720",
    name: "Aya Alaa",
    ownerName: "Owner",
    phone: "01234567890",
    identificationNumber: "98716154321",
    registrationNumber: "12345167189",
    city: "Cairo",
    governorate: "Cairo",
    shippingPrice: 0,
    location: {
      type: "Point",
      coordinates: [29.1, 25.1167],
    },
    DistanceInKm: 0,
  },
  {
    _id: "67fc5523701e6187750fc721",
    name: "Mohamed Hassan",
    ownerName: "Ahmed Mahmoud",
    phone: "01098765432",
    identificationNumber: "12345678901",
    registrationNumber: "98765432109",
    city: "Alexandria",
    governorate: "Alexandria",
    shippingPrice: 25,
    location: {
      type: "Point",
      coordinates: [31.2001, 29.9187],
    },
    DistanceInKm: 215,
  },
  {
    _id: "67fc5523701e6187750fc722",
    name: "Fatima Ahmed",
    ownerName: "Khaled Ibrahim",
    phone: "01112345678",
    identificationNumber: "45678901234",
    registrationNumber: "56789012345",
    city: "Giza",
    governorate: "Giza",
    shippingPrice: 15,
    location: {
      type: "Point",
      coordinates: [30.0131, 31.2089],
    },
    DistanceInKm: 125,
  },
  {
    _id: "67fc5523701e6187750fc723",
    name: "Omar Khaled",
    ownerName: "Laila Mostafa",
    phone: "01023456789",
    identificationNumber: "78901234567",
    registrationNumber: "89012345678",
    city: "Luxor",
    governorate: "Luxor",
    shippingPrice: 40,
    location: {
      type: "Point",
      coordinates: [25.6872, 32.6396],
    },
    DistanceInKm: 650,
  },
];

const EnhancedInventoryCard = () => {
  const theme = useTheme();
  const {
    typography,
    cardBackground,
    textPrimary,
    buttonBackground,
    buttonHover,
    navbarBackground,
    buttonText,
    navbarInventoryBackground,
    navbarPharmacyBackground,
    navbarAdminBackground,
    sidebarBackground,
    tableHeader,
    cardDetailsBackground,
    paperBackground,
    background,
    authBackground,
    inventoryBackground,
    pharmacyBackground,
    adminBackground,
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
        {inventories.map((inventory) => (
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
                    sx={{
                      width: 50,
                      height: 50,
                      color: theme.palette.primary.main,
                    }}
                  >
                    <Warehouse />
                  </Avatar>
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
                    {/* <Typography
                      variant="caption"
                      sx={{ opacity: 0.9 }}
                    >
                      ID: {inventory._id.substring(inventory._id.length - 8)}
                    </Typography> */}
                  </Box>
                </Box>

                {/* Content */}
                <Box sx={{ p: 2, flexGrow: 1 }}>
                  <Stack spacing={1.5}>
                    {/* <Stack
                      direction={"row"}
                      alignItems="center"
                      gap={1}
                    >
                      <Typography
                        variant="h6"
                        pl={1}
                        sx={{ color: textPrimary }}
                      >
                        Owner :
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight={500}
                      >
                        {inventory.ownerName}
                      </Typography>
                    </Stack> */}

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
