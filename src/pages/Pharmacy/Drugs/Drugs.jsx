import { Box, Stack } from '@mui/material';
import DrugCard from '../../../components/PharmacyComonents/DrugCard/DrugCard';
import LoadingSpinner from '../../../components/Common/Loading/LoadingSpinner';
import { useTypeContext } from '../../../context/UserType.context';
import axios from 'axios';
import { API_URL_DRUG } from '../../../lib/api/api_url';
import { useQuery } from '@tanstack/react-query';
import Filter from '../../../components/Filter/Filter';

export default function Drugs() {
  const { token } = useTypeContext();
  async function getAllDrugs() {
    const options = {
      url: API_URL_DRUG,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const data = await axios.request(options);
    return data;
  }

  const { data, isLoading } = useQuery({
    queryKey: ['drugs'],
    queryFn: getAllDrugs,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Box mb={2}>
        <Filter />
      </Box>
      <Stack
        direction={'row'}
        rowGap={4}
        columnGap={2}
        // bgcolor={'red'}
        justifyContent={{ xs: 'center' }}
        alignItems={'center'}
        flexWrap={'wrap'}
      >
        {data.data.data.map((drug) => (
          <DrugCard key={drug._id} dataInfo={drug} />
        ))}
      </Stack>
    </>
  );
}
