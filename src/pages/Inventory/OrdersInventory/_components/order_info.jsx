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
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

export default function OrderInformation({ order }) {
  const { cardBackground, headerBackground, border, borderHover } =
    useThemeConstants();

  return (
    <Card
      elevation={8}
      sx={{
        background: cardBackground,
        borderRadius: 3,
        border: `1px solid ${border}`,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          bgcolor: headerBackground,
          px: 3,
          py: 2,
          borderBottom: `1px solid ${borderHover}`,
          display: "flex",
          alignItems: "center",
          gap: 1,
          ":hover": {
            boxShadow: 6,
          },
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
