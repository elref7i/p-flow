import { Box, Button, Drawer, Grid2, Stack, Typography } from '@mui/material';
import DrugCard from '../../../components/PharmacyComonents/DrugCard/DrugCard';
import LoadingSpinner from '../../../components/Common/Loading/LoadingSpinner';
import { useTypeContext } from '../../../context/UserType.context';
import Filter from '../../../components/Filter/Filter';
import { useState } from 'react';
import { useDrugs } from '../../../lib/hooks/useDrugAction';
import FilterListIcon from '@mui/icons-material/FilterList';
export default function Drugs() {
  const { token } = useTypeContext();
  const [params, setParams] = useState({});
  const [openFilter, setOpenFilter] = useState(false);
  const { data, isFetching } = useDrugs(token, params);

  if (isFetching) return <LoadingSpinner />;

  console.log(data?.data);

  return (
    <>
      <Box
        sx={{
          display: { xs: 'flex', md: 'flex', lg: 'none' },
          justifyContent: 'center',
          mb: 2,
        }}
      >
        <Button
          variant="contained"
          startIcon={<FilterListIcon />}
          onClick={() => setOpenFilter(true)}
        >
          Open Filter
        </Button>
      </Box>
      <Grid2 py={2} spacing={4} justifyContent={'center'} container>
        <Grid2
          size={{ xs: 12, lg: 3 }}
          sx={{ display: { xs: 'none', lg: 'block' } }}
        >
          <Filter setParams={setParams} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 12, lg: 9 }}>
          <Stack
            direction={'row'}
            rowGap={2}
            columnGap={2}
            justifyContent={{ xs: 'center', md: 'start' }}
            alignItems={'center'}
            flexWrap={'wrap'}
          >
            {data.data.map((drug) => (
              <DrugCard key={drug._id} dataInfo={drug} />
            ))}
          </Stack>
        </Grid2>
      </Grid2>
      <Drawer
        anchor="left"
        open={openFilter}
        onClose={() => setOpenFilter(false)}
      >
        <Box sx={{ width: 300, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Filter Options
          </Typography>
          <Filter setParams={setParams} onClose={() => setOpenFilter(false)} />
        </Box>
      </Drawer>
    </>
  );
}
