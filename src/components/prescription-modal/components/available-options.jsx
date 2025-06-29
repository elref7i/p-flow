/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { formatPrice } from "../../../lib/utils/price-formate";
import { useAddToCart } from "../../../lib/hooks/use-cart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { buttonText } from "../../../lib/utils/status-stock";
import { useNavigate } from "react-router-dom";

export default function AvailableOptions({ medication }) {
  //Mutation
  const { mutate, isLoading } = useAddToCart();

  const navigate = useNavigate();

  return (
    <Box>
      <Divider sx={{ my: 2 }} />
      <Typography
        variant="subtitle2"
        fontWeight={600}
        color="success.main"
        gutterBottom
      >
        Available Options:
      </Typography>
      {medication.matchedDrugs.map((drug, drugIndex) => (
        <Paper
          key={drugIndex}
          sx={{
            p: 2,
            mt: 1,
            borderRadius: 2,
            background: "rgba(76, 175, 80, 0.1)",
            border: "1px solid rgba(76, 175, 80, 0.2)",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            mb={1}
          >
            <Avatar
              src={drug.inventory?.profileImage}
              sx={{
                width: 32,
                height: 32,
              }}
            />
            <Box flex={1}>
              <Typography
                onClick={() => {
                  return navigate(`/pharmacy/drugdetails/${drug._id}`);
                }}
                sx={{ cursor: "pointer" }}
                variant="body2"
                fontWeight={600}
              >
                {drug.name}
              </Typography>
              <Typography
                onClick={() =>
                  navigate(`/pharmacy/inventoryprofile/${drug.inventory._id}`)
                }
                sx={{ cursor: "pointer" }}
                variant="caption"
                color="text.secondary"
              >
                {drug.inventory?.name}
              </Typography>
            </Box>
            <Box textAlign="right">
              <Typography
                variant="body2"
                fontWeight={700}
                color="success.main"
              >
                {formatPrice(drug.discountedPrice || drug.price)}
              </Typography>
              {drug.discountedPrice && drug.discountedPrice < drug.price && (
                <Typography
                  variant="caption"
                  sx={{
                    textDecoration: "line-through",
                  }}
                >
                  {formatPrice(drug.price)}
                </Typography>
              )}
            </Box>
          </Stack>
          <Button
            disabled={isLoading || drug.stock <= 0}
            onClick={() => {
              mutate({
                drugId: drug._id,
                quantity: 1,
              });
            }}
            variant="contained"
            color="primary"
            fullWidth
            startIcon={
              isLoading ? (
                <CircularProgress
                  size={16}
                  color="inherit"
                />
              ) : (
                <ShoppingCartIcon />
              )
            }
            sx={{
              borderRadius: 2,
              textTransform: "none",
              py: 1,
              fontWeight: 600,
              boxShadow: 2,
              "&:hover": {
                boxShadow: 3,
              },
            }}
          >
            {buttonText(drug.stock)}
          </Button>
        </Paper>
      ))}
    </Box>
  );
}
