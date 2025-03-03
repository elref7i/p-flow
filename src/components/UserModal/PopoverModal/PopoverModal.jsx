import * as React from 'react';
import Popover from '@mui/material/Popover';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import { Box, styled, useTheme } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CustomButton from '../../Common/ButtonStyle';
import AlertModal from '../../AdminComonents/MessageAlert/MessageAlert';
export default function PopoverModal() {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <Box>
      <ModeEditOutlineRoundedIcon
        onClick={handleClick}
        sx={{
          color: theme.palette.text.button,
          cursor: 'pointer',
          ':hover': { color: theme.palette.action.active },
        }}
      />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        // disableScrollLock
      >
        <CustomButton
          sx={{ mb: 1 }}
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          d={'flex'}
          hoverbgColor={theme.palette.action.active}
          fs={{ xs: '10px', md: '15px' }}
          startIcon={<CloudUploadIcon />}
        >
          Upload Image
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
          />
        </CustomButton>
        <AlertModal />
      </Popover>
    </Box>
  );
}
