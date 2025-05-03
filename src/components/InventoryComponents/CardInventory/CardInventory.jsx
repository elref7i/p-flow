/* eslint-disable react/prop-types */
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
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import RoomIcon from "@mui/icons-material/Room";
import DistanceIndicator from "../../../pages/Inventory/InventoryProfile/components/DistanceIndicator";
import { useNavigate } from "react-router-dom";
import ButtonWhishlist from "../../Common/Loading/button_whishlist";

const EnhancedInventoryCard = ({ inventory }) => {
  //Navigation
  const navigate = useNavigate();

  //Themes
  const {
    typography,
    cardBackground,
    textPrimary,
    buttonBackground,
    buttonHover,
    buttonText,
    cardDetailsBackground,
    success,
    border,
  } = useThemeConstants();

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
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
        {/* Wishlist Button */}
        <ButtonWhishlist check={false} />
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
              py: 2,
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
                  fontWeight: typography.h5.fontWeight,
                  fontSize: typography.h5.fontSize,
                  lineHeight: typography.h5.lineHeight,
                  textTransform: "capitalize",
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
                    <DistanceIndicator distance={inventory.DistanceInKm} />
                  </Box>
                </Stack>
              </Stack>
              <Stack
                alignItems={"center"}
                direction={"row"}
                justifyContent={"center"}
                gap={2}
                sx={{
                  p: 1.5,
                  borderRadius: "8px",
                  background: cardDetailsBackground,
                  boxShadow: 2,
                  border: border,
                  backdropFilter: "blur(10px)",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: textPrimary,
                    fontWeight: 500,
                    textTransform: "capitalize",
                    letterSpacing: "0.5px",
                  }}
                >
                  minimum Order
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    background: cardDetailsBackground,
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    color: success,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    fontWeight: typography.h6.fontWeight,
                    fontSize: typography.h6.fontSize,
                    lineHeight: typography.h6.lineHeight,
                    boxShadow: 1,
                  }}
                >
                  {inventory.minimumOrderValue.toLocaleString()}{" "}
                  <Box
                    component={"span"}
                    sx={{ fontSize: "13px" }}
                  >
                    EGP
                  </Box>
                </Typography>
              </Stack>
            </Stack>
          </Box>

          <Divider />

          {/* Footer */}
          <Box
            sx={{
              pt: 2,
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
  );
};

export default EnhancedInventoryCard;
