/* eslint-disable react/prop-types */
import { Box, Divider, List, ListItem, Typography } from '@mui/material';
import {
  CustomHead,
  CustomParagraph,
} from '../../components/Common/CustomTypography';

export default function EmailUser({ userData }) {
  return (
    <>
      <CustomHead variant="h1" fontWeight={'bold'} mb={2}>
        Email
      </CustomHead>
      <Divider sx={{ mb: 3 }} />
      <Box sx={{ border: '1px solid GrayText', borderRadius: 2, p: 2 }}>
        <Typography
          variant="h2"
          fontSize={'18px'}
          color="text.secondary"
          mb={1}
          fontWeight={'bold'}
        >
          {userData.email}{' '}
          <Box component={'span'} fontWeight={''} color={'secondary.main'}>
            {' '}
            - Primary
          </Box>
        </Typography>
        <CustomParagraph mb={1}>
          This email will be used for account-related notifications and can also
          be used for password resets.
        </CustomParagraph>
        <List sx={{ color: 'GrayText', p: 0, py: 2 }}>
          <ListItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              p: 0,
            }}
          >
            Receives notifications:
            <CustomParagraph mb={1}>
              This email will be used for account-related notifications and can
              also be used for password resets.
            </CustomParagraph>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
