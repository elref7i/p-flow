/* eslint-disable react/prop-types */
import {
  Box,
  CardActions,
  Paper,
  Stack,
  useTheme,
  Avatar,
  Divider,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../Common/ButtonStyle";
import LocationComponent from "../../Flow-Loaction/Flow-Loaction";
import { useContext } from "react";
import { cartContext } from "../../../context/Cart.context";
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength).trim() + "..."; // إزالة المسافات الزائدة وإضافة نقاط
  }
  return text;
};
export default function DrugCard({ dataInfo }) {
  const theme = useTheme();
  const navigate = useNavigate();
  let { addDrugToCart } = useContext(cartContext);
  const {
    _id,
    name,
    inventory,
    // description,
    price,
    discount,
    discountedPrice,
    // productionDate,
    // expirationDate,
    distanceInKm,
  } = dataInfo;

  return (
    <Paper
      elevation={3}
      sx={{
        width: 250,
        maxHeight: 500,
        borderRadius: 2,
        ":hover": {
          boxShadow: `inset 7px -3px 0px 0px ${theme.palette.action.active}`,
          transition: "all 0.3s",
          "& .box-icon": { opacity: 1, transition: "opacity 0.3s" },
        },
        transition: "all 0.3s",
        // pb: 1,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Paper
        className="box-image"
        sx={{
          bgcolor: "#fff",
          borderRadius: 0,
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          sx={{ objectFit: "contain" }}
          width={"100%"}
          image={
            "https://www.netmeds.com/images/product-v1/600x600/397251/nasomist_saline_nasal_spray_20ml_149351_0_2.jpg"
          }
          alt={name}
          aria-label={`Image of ${name}`}
        />
        {discountedPrice && (
          <Box
            component={"discount"}
            sx={{
              bgcolor: "red",
              p: 1,
              zIndex: 99,
              borderRadius: "20px",
              position: "absolute",
              top: 5,
              right: 5,
              color: "#FAFAFA",
              fontWeight: "bold",
              fontSize: "12px",
            }}
            aria-label={`Discount of ${discount}%`}
          >
            {discount}% OFF
          </Box>
        )}
        <Stack
          className="box-icon"
          direction={"column"}
          justifyContent={"center"}
          alignItems={"start"}
          gap={1}
          component={"IconsAction"}
          sx={{
            bgcolor: "#000000aa",
            position: "absolute",
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            top: 0,
            left: 0,
            pl: 1,
            color: "#FAFAFA",
            height: "100%",
            width: "100%",
            fontWeight: "bold",
            transition: "opacity 0.3s",
            opacity: 0,
            cursor: "pointer",
          }}
        >
          <FavoriteBorderIcon
            zIndex={99}
            color="#FAFAFA"
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
              transition: "color 0.3s",
              ":hover": { color: "red" },
            }}
            aria-label="Add to favorites"
          />
          <RemoveRedEyeIcon
            color="#FAFAFA"
            onClick={() => {
              navigate(`/pharmacy/drugdetails/${_id}`);
            }}
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
              transition: "color 0.3s",
              ":hover": { color: "red" },
            }}
            aria-label="View drug details"
          />
        </Stack>
      </Paper>
      <CardContent elevation={2}>
        {/* Inventory Avatar */}
        <Stack
          direction="row"
          alignItems="center"
          gap={1}
          sx={{ cursor: "pointer" }}
          onClick={() => {
            navigate(`/inventoryprofile`);
          }}
        >
          <Avatar
            src={inventory?.profileImage} // صورة الـ Inventory
            alt={inventory?.name}
            sx={{ width: 30, height: 30 }}
          >
            {inventory?.name?.charAt(0)}{" "}
          </Avatar>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: "bold",
              fontSize: "14px", // زيادة حجم الخط
            }}
            aria-label={`Inventory: ${inventory?.name || "N/A"}`}
          >
            {inventory?.name || "N/A"}
          </Typography>
        </Stack>
        <Divider sx={{ my: 1 }} /> {/* زيادة المسافة حول الـ Divider */}
        {/* Drug Name and Description */}
        <Stack alignItems={"start"} spacing={1} pt={1}>
          <Typography
            gutterBottom
            variant="h2"
            onClick={() => {
              navigate(`/pharmacy/drugdetails/${_id}`);
            }}
            sx={{
              fontSize: { xs: "15px", md: "20px" },
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontWeight: "bold",
              cursor: "pointer",
              color: theme.palette.text.primary,
            }}
            component="div"
            aria-label={`Drug name: ${name}`}
          >
            {truncateText(name, 30)}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "15px", md: "17px" },
              fontWeight: "bold",
            }}
          >
            Consumer:
            <Box
              component={"span"}
              sx={{
                ml: 1,
                fontWeight: "bold",
                color: theme.palette.success.main,
              }}
            >
              {discountedPrice.toFixed(2)} EGP
            </Box>{" "}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "15px", md: "17px" },
              fontWeight: "bold",
            }}
          >
            Pharmacy:{" "}
            <Box
              component={"span"}
              sx={{ ml: 1, color: theme.palette.error.main }}
            >
              {price.toFixed(2)} EGP
            </Box>
          </Typography>

          {/* Production and Expiration Dates */}
          {/* <Typography
            component={'Date'}
            variant="body2"
            aria-label={`Production Date: ${formatDate(
              productionDate
            )}, Expiration Date: ${formatDate(expirationDate)}`}
          >
            <Stack
              direction={'row'}
              justifyItems={'center'}
              alignItems={'center'}
            >
              <strong>Date: </strong>
              <Box
                component={'span'}
                sx={{ color: '#F9A825', fontWeight: 'bold' }} // لون تاريخ الإنتاج
              >
                {formatDate(productionDate)}
              </Box>
              <ArrowRightRoundedIcon color="secondary" />
              <Box
                component={'span'}
                sx={{ color: '#ff0000', fontWeight: 'bold' }} // لون تاريخ انتهاء الصلاحية
              >
                {formatDate(expirationDate)}
              </Box>
            </Stack>
          </Typography> */}

          {/* Distance and Location */}
          {/* <Stack
            component={'loaction'}
            direction={'row'}
            gap={1}
            alignItems={'center'}
            justifyContent={'start'}
          >
            <Stack direction={'row'} alignItems={'center'} sx={{ pr: 1 }}>
              <PlaceIcon color={'success'} />
              <Typography
                variant="body2"
                aria-label={`Distance: ${
                  distanceInKm ? `${distanceInKm.toFixed(2)} km` : 'N/A'
                }`}
                sx={{ fontWeight: 'bold' }}
              >
                {distanceInKm ? `${distanceInKm.toFixed(2)} km` : 'N/A'}{' '}
              </Typography>
            </Stack>
          </Stack> */}
          <LocationComponent distanceInKm={distanceInKm} />
        </Stack>
        <CardActions>
          <CustomButton
            variant={"contained"}
            p={"4px 40px"}
            fs={"15px"}
            width={"100%"}
            aria-label="Add to cart"
            sx={{ fontWeight: "bold" }}
            onClick={() => {
              addDrugToCart({
                drugId: _id,
                quantity: 1,
              });
            }}
          >
            Add to Cart
          </CustomButton>
        </CardActions>
      </CardContent>
    </Paper>
  );
}
