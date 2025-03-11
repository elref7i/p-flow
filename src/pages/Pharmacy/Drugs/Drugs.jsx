import { Box, Stack } from '@mui/material';
import DrugCard from '../../../components/PharmacyComonents/DrugCard/DrugCard';
import LoadingSpinner from '../../../components/Common/Loading/LoadingSpinner';
import { useTypeContext } from '../../../context/UserType.context';
import Filter from '../../../components/Filter/Filter';
import { useState } from 'react';
import { useDrugs } from '../../../lib/hooks/useDrugAction';

export default function Drugs() {
  const { token } = useTypeContext();
  const [params, setParams] = useState({});

  const { data, isError, isFetching } = useDrugs(token, params);

  if (isFetching) return <LoadingSpinner />;

  console.log(data?.data);

  return (
    <>
      <Box mb={2}>
        <Filter setParams={setParams} />
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
        {data.data.map((drug) => (
          <DrugCard key={drug._id} dataInfo={drug} />
        ))}
      </Stack>
    </>
  );
}
