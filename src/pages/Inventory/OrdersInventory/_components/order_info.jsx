/* eslint-disable react/prop-types */
import {
  CalendarToday,
  Person,
  Receipt,
  ShoppingBag,
} from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { formatDate } from "../../../../lib/utils/formDate";
import List, { ListItem } from "./common/list";

export default function OrderInformation({ order }) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        border: "1px solid #e0e0e0",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          bgcolor: "#f8f9fa",
          px: 3,
          py: 2,
          borderBottom: "1px solid #e0e0e0",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Receipt
          fontSize="small"
          color="primary"
        />
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold" }}
        >
          Order Information
        </Typography>
      </Box>
      <CardContent sx={{ p: 0 }}>
        <List>
          <ListItem
            icon={<CalendarToday fontSize="small" />}
            label="Created Date"
            value={formatDate(order.createdAt)}
          />
          <ListItem
            icon={<Person fontSize="small" />}
            label="Inventory"
            value={order.inventory.name}
          />
          <ListItem
            icon={<ShoppingBag fontSize="small" />}
            label="Number of Products"
            value={order.drugs.length}
          />
        </List>
      </CardContent>
    </Card>
  );
}
