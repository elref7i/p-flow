/* eslint-disable react/prop-types */
import { Divider, List } from '@mui/material';
import Sidebaritem from './Sidebaritem';

export default function SidebarSection({ items, open }) {
  return (
    <>
      <List sx={{ px: 0.5 }}>
        {items.map((item) => (
          <Sidebaritem key={item.text} item={item} open={open} />
        ))}
        {items.length !== 0 && <Divider />}
      </List>
    </>
  );
}
