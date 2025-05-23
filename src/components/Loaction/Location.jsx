/* eslint-disable react/prop-types */
import { CircularProgress, Paper, Typography, useTheme } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useState } from "react";
import toast from "react-hot-toast";
import CustomButton from "../Common/ButtonStyle";
import { useTypeContext } from "../../context/UserType.context";
import { useThemeConstants } from "../../lib/constants/theme.constant";

export default function Location({ setFieldValue, errors }) {
  const { token } = useTypeContext();
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const { cardBackground, border, borderFocus, borderHover } =
    useThemeConstants();

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      setIsLoading(true); //
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            type: "Point",
            coordinates: [position.coords.longitude, position.coords.latitude],
          };
          setFieldValue("location", newLocation);
          setIsLoading(false);
          toast.success("Location fetched successfully!");
          console.log("Updated location:", newLocation);
        },
        (error) => {
          console.error("Error fetching location:", error);
          setIsLoading(false);
          toast.error(`${errors.location}`);
        },
        {
          enableHighAccuracy: true, // 🔥 تحسين الدقة
          timeout: 10000, // ⏳ وقت انتظار 10 ثواني
          maximumAge: 0, // 🚀 عدم استخدام بيانات قديمة
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser.");
    }
  };

  return (
    <Paper
      elevation={9}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        background: cardBackground,
        p: "20px 20px",
        border: `1px solid ${border}`,
        borderRadius: 2,
        maxWidth: 300,
        boxShadow: 8,
        ":focus": {
          borderColor: borderFocus,
        },
        ":hover": {
          borderColor: borderHover,
          boxShadow: 7,
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", textAlign: "center" }}
      >
        {!token ? " Select Your Location" : " Upadate Your Location"}
      </Typography>
      <CustomButton
        variant="contained"
        startIcon={
          isLoading ? (
            <CircularProgress
              size={24}
              sx={{ color: "white" }}
            />
          ) : (
            <MyLocationIcon />
          )
        }
        onClick={handleGetLocation}
        disabled={isLoading}
        sx={{
          boxShadow: theme.shadows[4],
          borderRadius: 2,
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          minWidth: 150,
          display: "flex",
        }}
      >
        {isLoading ? "Fetching..." : "Get Location"}
      </CustomButton>
    </Paper>
  );
}
