/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import { useShowDrugs } from "../../../../context/show-home-drugs";

export default function HomeDrugs() {
  const { showDrugs } = useShowDrugs();
  if (showDrugs) return;
  return (
    <Typography
      variant="h1"
      color="white"
      textAlign={"center"}
    >
      DRUGS
    </Typography>
  );
}
