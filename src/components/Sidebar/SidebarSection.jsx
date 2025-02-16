/* eslint-disable react/prop-types */
import { Divider, List } from '@mui/material';
import Sidebaritem from './Sidebaritem';

export default function SidebarSection({ items }) {
  return (
    <>
      {' '}
      <List>
        {items.map((item) => (
          <Sidebaritem key={item.text} item={item} open={open} />
        ))}
      </List>
      <Divider />
    </>
  );
}
