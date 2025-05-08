/* eslint-disable react/prop-types */
import { Divider, List } from "@mui/material";
import Sidebaritem from "./Sidebaritem";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

export default function SidebarSection({ items, open }) {
  //Theme
  const { borderFocus } = useThemeConstants();

  return (
    <>
      <List
        sx={{
          px: 2,
          py: 2,
        }}
      >
        {items.map((item) => (
          <Sidebaritem
            key={item.text}
            item={item}
            open={open}
          />
        ))}
        {items.length !== 0 && (
          <Divider
            sx={{
              backgroundColor: borderFocus,
            }}
          />
        )}
      </List>
    </>
  );
}
