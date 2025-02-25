/* eslint-disable react/prop-types */
import { Divider, List } from '@mui/material';
import Sidebaritem from './Sidebaritem';

export default function SidebarSection({ items, open }) {
  return (
    <>
      <List>
        {items.map((item) => (
          <Sidebaritem key={item.text} item={item} open={open} />
        ))}
        {items.length !== 0 && <Divider />}
      </List>
    </>
  );
}
