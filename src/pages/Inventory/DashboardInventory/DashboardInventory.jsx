import { Stack } from "@mui/material";
import AddDrugComponent from "../../../components/InventoryComponents/AddDrugComponent/AddDrugComponent";
import AddDrugFromExcel from "../../../components/InventoryComponents/AddDrugFromExcel/AddDrugFromExcel";


export default function DashboardInventory() {
  return (
    <Stack direction="row" spacing={2} justifyContent="flex-end">
      <AddDrugComponent />
      <AddDrugFromExcel />
    </Stack>
  )
}
