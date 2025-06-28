/* eslint-disable react/prop-types */

import MedicationIcon from "@mui/icons-material/Medication";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { alpha, Tabs, Tab, useTheme } from "@mui/material";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import { useTypeContext } from "../../../../context/UserType.context";

export default function ProfileTabs({ activeTab, handleTabChange }) {
  const { role } = useTypeContext();
  const theme = useTheme();
  const { background, backgroundBlueSoft, textLink, textError, border } =
    useThemeConstants();

  return (
    <Tabs
      onChange={handleTabChange}
      variant="fullWidth"
      indicatorColor="secondary"
      textColor="secondary"
      sx={{
        bgcolor: background,
        boxShadow: 8,
        mb: 2,
        "& .MuiTabs-indicator": {
          height: 1,
        },
        "& .MuiTab-root": {
          minWidth: 0,
          py: 1.5,
        },
        borderBottom: `1px solid ${alpha(border, 0.5)}`,
      }}
    >
      <Tab
        icon={<MedicationIcon />}
        aria-label="medications"
        sx={{
          borderRadius: "5px",
          boxShadow: activeTab === 0 ? 7 : 8,
          bgcolor: activeTab === 0 ? backgroundBlueSoft : "transparent",
          color: activeTab === 0 ? theme.palette.primary.main : textLink,
        }}
      />
      {role === "pharmacy" && (
        <Tab
          icon={<LocalOfferIcon />}
          aria-label="offers"
          sx={{
            borderRadius: "5px",
            boxShadow: activeTab === 1 ? 7 : 8,
            bgcolor: activeTab === 1 ? backgroundBlueSoft : "transparent",
            color: activeTab === 1 ? theme.palette.primary.main : textError,
          }}
        />
      )}
    </Tabs>
  );
}
