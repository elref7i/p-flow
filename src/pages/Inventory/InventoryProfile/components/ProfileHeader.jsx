/* eslint-disable react/prop-types */
import {
  Box,
  Typography,
  Button,
  Avatar,
  useTheme,
  alpha,
  Chip,
  Divider,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import VerifiedIcon from "@mui/icons-material/Verified";
import MessageIcon from "@mui/icons-material/Message";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { motion } from "framer-motion";
import { useTypeContext } from "../../../../context/UserType.context";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import ButtonWhishlist from "../../../../components/Common/Loading/button_whishlist";
import { useAddnventoryWishlist } from "../../../../lib/hooks/usewishlist.action";

const ProfileHeader = ({
  inventory,
  containerVariants,
  itemVariants,
  totalProducts,
}) => {
  //Context
  const { role } = useTypeContext();

  console.log(inventory);

  //Theme
  const theme = useTheme();
  const {
    primary,
    textPrimary,
    textSecondary,
    buttonText,
    buttonBackground,
    buttonHover,
    shadow1,
    shadow2,
    shadow3,
    typography,
    background,
    inventoryBackground,
  } = useThemeConstants();

  //Mutations

  return (
    <Box
      sx={{
        mb: 4,
        background: inventoryBackground,
        borderRadius: 2,
        p: 3,
        boxShadow: shadow3,
        position: "relative",
      }}
    >
      {/* Wishlist Button */}
      {role === "inventory" || (
        <ButtonWhishlist
          check={true}
          id={inventory.id}
        />
      )}
      {/* Profile Info Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "flex-start", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          mb: 3,
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Image */}
        <Box
          sx={{
            mr: { xs: 0, sm: 4 },
            mb: { xs: 2, sm: 0 },
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-start" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Avatar
              src={inventory.profileImage}
              alt={inventory.name}
              sx={{
                width: 100,
                height: 100,
                border: `3px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                boxShadow: shadow2,
              }}
            />

            {/* Verify icon */}
            <Box
              component={motion.div}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 25,
                height: 25,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: background,
                borderRadius: "50%",
                border: `2px solid ${theme.palette.background.paper}`,
              }}
            >
              <VerifiedIcon
                color="primary"
                sx={{ fontSize: 20 }}
              />
            </Box>
          </Box>
        </Box>

        {/* Profile Info */}
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Typography
              variant="h5"
              sx={{
                mr: 1,
                fontSize: typography.h1.fontSize,
                fontWeight: typography.h1.fontWeight,
                lineHeight: typography.h1.lineHeight,
                color: textPrimary,
              }}
            >
              {inventory.name}
            </Typography>
            <Chip
              size="medium"
              label="Verified"
              color="primary"
              variant="outlined"
              sx={{
                height: 22,
                fontSize: typography.body1.fontSize,
                lineHeight: typography.body1.lineHeight,
                ml: 1,
              }}
            />
          </Box>

          {/* !Tsting */}
          {/* <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 2,
              maxWidth: "600px",
              lineHeight: 1.6,
            }}
          >
            inventory.description
          </Typography> */}

          {role === "pharmacy" && (
            <Box
              sx={{
                display: "flex",
                mb: 2,
              }}
            >
              <Button
                variant="contained"
                size="medium"
                startIcon={<MessageIcon />}
                sx={{
                  color: buttonText,
                  borderRadius: 2,
                  textTransform: "none",
                  px: 3,
                  py: 1,
                  fontWeight: "bold",
                  background: buttonBackground,
                  boxShadow: shadow1,
                  "&:hover": {
                    background: buttonHover,
                  },
                }}
              >
                Message
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      {/* Products Count & Status */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
          py: 2,
          mb: 3,
        }}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box
          sx={{ display: "flex", alignItems: "center" }}
          component={motion.div}
          variants={itemVariants}
        >
          <Box
            sx={{
              bgcolor: alpha(theme.palette.success.main, 0.1),
              color: theme.palette.success.main,
              width: 40,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              mr: 1.5,
            }}
          >
            <AccessTimeIcon fontSize="medium" />
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                color: textSecondary,
                fontWeight: typography.h5.fontWeight,
                fontSize: typography.h5.fontSize,
                lineHeight: typography.h5.lineHeight,
              }}
            >
              Open Now
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              9:00 AM - 10:00 PM
            </Typography>
          </Box>
        </Box>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 2 }}
        />

        <Box
          sx={{ textAlign: "center" }}
          component={motion.div}
          variants={itemVariants}
        >
          <Typography
            variant="h6"
            sx={{
              color: primary,
              fontWeight: typography.h3.fontWeight,
              fontSize: typography.h3.fontSize,
              lineHeight: typography.h3.lineHeight,
            }}
          >
            {totalProducts}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              color: textSecondary,
              fontWeight: typography.body2.fontWeight,
              fontSize: typography.body2.fontSize,
              lineHeight: typography.body2.lineHeight,
            }}
          >
            Available Products
          </Typography>
        </Box>
      </Box>

      {/* Contact Info Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
          gap: 2,
          mb: 2,
        }}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: alpha(theme.palette.primary.light, 0.1),
            borderRadius: 2,
            p: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: alpha(theme.palette.primary.light, 0.15),
              transform: "translateY(-2px)",
            },
          }}
        >
          <Box
            sx={{
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.main,
              p: 1,
              borderRadius: "50%",
              mr: 2,
            }}
          >
            <LocationOnIcon />
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="text.primary"
            >
              {inventory.governorate}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {inventory.city}
            </Typography>
          </Box>
        </Box>

        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: alpha(theme.palette.primary.light, 0.1),
            borderRadius: 2,
            p: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: alpha(theme.palette.primary.light, 0.15),
              transform: "translateY(-2px)",
            },
          }}
        >
          <Box
            sx={{
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.main,
              p: 1,
              borderRadius: "50%",
              mr: 2,
            }}
          >
            <LocalPhoneIcon />
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="text.primary"
            >
              Phone
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {inventory.phone}
            </Typography>
          </Box>
        </Box>

        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: alpha(theme.palette.primary.light, 0.1),
            borderRadius: 2,
            p: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: alpha(theme.palette.primary.light, 0.15),
              transform: "translateY(-2px)",
            },
          }}
        >
          <Box
            sx={{
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.main,
              p: 1,
              borderRadius: "50%",
              mr: 2,
            }}
          >
            <EmailIcon />
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="text.primary"
            >
              Email
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {inventory.email}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileHeader;
