// /* eslint-disable react/prop-types */
// import { Button, CircularProgress } from "@mui/material";
// import DoneAllIcon from "@mui/icons-material/DoneAll";
// import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
// import {
//   useDeleteAllNotif,
//   useMarkAllNotif,
// } from "../../../lib/hooks/notifications.actions";
// import { useTypeContext } from "../../../context/UserType.context";
// export default function NotificationAction({ count, result }) {
//   // Context
//   const { token } = useTypeContext();

//   //Mutations
//   const { mutate: markNotif, isLoading: isMarkLoading } = useMarkAllNotif();
//   const { mutate: deletNotif, isLoading: isDeleting } = useDeleteAllNotif();

//   //functions
//   const handleMarkAll = () => {
//     markNotif({ token });
//   };
//   const handleDeleteAll = () => {
//     deletNotif({ token });
//   };

//   console.log(result);

//   return (
//     <>
//       <Button
//         disabled={isDeleting || result === 0}
//         variant="outlined"
//         color="error"
//         onClick={handleDeleteAll}
//         startIcon={
//           isDeleting ? (
//             <CircularProgress
//               size={18}
//               color="error"
//             />
//           ) : (
//             <CleaningServicesIcon />
//           )
//         }
//       >
//         Clear all notification
//       </Button>
//       <Button
//         disabled={isMarkLoading || count === 0}
//         onClick={handleMarkAll}
//         startIcon={
//           isMarkLoading ? (
//             <CircularProgress
//               size={18}
//               color="secondary"
//             />
//           ) : (
//             <DoneAllIcon />
//           )
//         }
//       >
//         Mark All as read
//       </Button>
//     </>
//   );
// }

/* eslint-disable react/prop-types */
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, CircularProgress } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import {
  useDeleteAllNotif,
  useMarkAllNotif,
} from "../../../lib/hooks/notifications.actions";
import { useTypeContext } from "../../../context/UserType.context";

export default function NotificationAction({ count, result }) {
  // States
  const [anchorEl, setAnchorEl] = React.useState(null);

  //Context
  const { token } = useTypeContext();

  // Open state for the menu
  const open = Boolean(anchorEl);

  //Mutations
  const { mutate: markNotif, isLoading: isMarkLoading } = useMarkAllNotif();
  const { mutate: deletNotif, isLoading: isDeleting } = useDeleteAllNotif();

  //functions
  // Functions
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMarkAll = () => {
    markNotif({ token });
  };
  const handleDeleteAll = () => {
    deletNotif({ token });
  };

  return (
    <div>
      {/* Button to open the menu */}
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="red"
      >
        <MoreVertIcon />
      </Button>

      {/* Menu component */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
        sx={{
          "& .MuiMenuItem-root": {
            p: 0,
          },
          "& .MuiMenuItem-root:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        {/* Button Mark Read */}
        <MenuItem onClick={handleClose}>
          <Button
            sx={{ fontSize: 14 }}
            disabled={isMarkLoading || count === 0}
            onClick={handleMarkAll}
            startIcon={
              isMarkLoading ? (
                <CircularProgress
                  size={14}
                  color="secondary"
                />
              ) : (
                <DoneAllIcon />
              )
            }
          >
            Mark All as read
          </Button>
        </MenuItem>

        {/* Button Delete */}
        <MenuItem onClick={handleClose}>
          <Button
            sx={{ fontSize: 14 }}
            disabled={isDeleting || result === 0}
            variant="text"
            color="error"
            onClick={handleDeleteAll}
            startIcon={
              isDeleting ? (
                <CircularProgress
                  size={14}
                  color="error"
                />
              ) : (
                <CleaningServicesIcon />
              )
            }
          >
            Clear all notification
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
}
