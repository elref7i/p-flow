import { Button, Divider, Stack } from '@mui/material';
import {
  CustomHead,
  CustomParagraph,
} from '@/components/Common/CustomTypography';
import axios from 'axios';
import { API_URL } from '@/lib/api/api_url';
import { useTypeContext } from '@/context/UserType.context';
import toast from 'react-hot-toast';
export default function DeactivateAcount() {
  const { token } = useTypeContext();

  async function deactiveUser() {
    const loading = toast.loading('Deactivating your account...');
    try {
      const options = {
        url: `${API_URL}/deactivate`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while deactivating your account');
    } finally {
      toast.dismiss(loading);
    }
  }
  async function activeUser() {
    const loading = toast.loading('Activating your account...');
    try {
      const options = {
        url: `${API_URL}/deactivate`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.request(options);
      console.log(data);

      toast.success('Your account has been activated');
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while activating your account');
    } finally {
      toast.dismiss(loading);
    }
  }
  return (
    <>
      <CustomHead variant="h1" fontWeight={'bold'} mb={1}>
        This will deactivate your account
      </CustomHead>
      <CustomParagraph mb={1}>
        You can restore your P-Flow account if it was accidentally or wrongfully
        deactivated for up to 30 days after deactivation.
      </CustomParagraph>
      <Divider sx={{ mb: 3 }} />
      <Stack
        component={'form'}
        direction={'row'}
        spacing={2}
        justifyContent={'center'}
      >
        <Button type="submit" color="error" onClick={deactiveUser}>
          Deactive
        </Button>
        <Button type="submit" color="success" onClick={activeUser}>
          Active
        </Button>
      </Stack>
    </>
  );
}
