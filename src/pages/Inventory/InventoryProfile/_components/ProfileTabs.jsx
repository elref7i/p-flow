/* eslint-disable react/prop-types */

import MedicationIcon from "@mui/icons-material/Medication";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InventoryIcon from "@mui/icons-material/Inventory";
import { alpha, Tabs, Tab, useTheme } from "@mui/material";

export default function ProfileTabs({ activeTab, handleTabChange }) {
  const theme = useTheme();
  return (
    <Tabs
      onChange={handleTabChange}
      variant="fullWidth"
      indicatorColor="secondary"
      textColor="secondary"
      sx={{
        bgcolor: "transparent",
        mb: 2,
        "& .MuiTabs-indicator": {
          height: 1,
        },
        "& .MuiTab-root": {
          minWidth: 0,
          py: 1.5,
        },
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
      }}
    >
      <Tab
        icon={<MedicationIcon />}
        aria-label="medications"
        sx={{
          borderRadius: "5px",
          bgcolor:
            activeTab === 0 ? theme.palette.background.paper : "transparent",
          color:
            activeTab === 0
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
        }}
      />
      <Tab
        icon={<LocalOfferIcon />}
        aria-label="offers"
        sx={{
          borderRadius: "5px",
          bgcolor:
            activeTab === 1 ? theme.palette.background.paper : "transparent",
          color:
            activeTab === 1
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
        }}
      />
      <Tab
        icon={<InventoryIcon />}
        aria-label="inventory"
        sx={{
          borderRadius: "5px",
          bgcolor:
            activeTab === 2 ? theme.palette.background.paper : "transparent",
          color:
            activeTab === 2
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
        }}
        // K
      />
    </Tabs>
  );
}
