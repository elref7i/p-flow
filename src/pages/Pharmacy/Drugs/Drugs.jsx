import { Stack } from '@mui/material';
import DrugCard from '../../../components/PharmacyComonents/DrugCard/DrugCard';
import test from '../../../assets/Alto ángulo del carrito de compras con espacio de copia y láminas de pastillas _ Foto Premium.jpg';
import LoadingSpinner from '../../../components/Common/Loading/LoadingSpinner';
import { useTypeContext } from '../../../context/UserType.context';
import axios from 'axios';
import { API_URL_DRUG } from '../../../lib/api/api_url';
import { useQuery } from '@tanstack/react-query';

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
  console.log(data);

  return (
    <Stack
      direction={'row'}
      gap={4}
      justifyContent={'center'}
      alignItems={'center'}
      flexWrap={'wrap'}
    >
      <DrugCard
        drugName="Abilify 10 Mg 10 Tabs."
        description="Used to reduce infladddddddddddddddddddddddddmmation and pain."
        company="Aya_Abdelsamed"
        price={220.5}
        imageUrl={test}
      />
      <DrugCard
        drugName="Ibuprofen"
        description="Used to reduce inflammation and pain."
        company="XYZ Pharmaceuticals"
        price={7.99}
        imageUrl={test}
      />
      <DrugCard
        drugName="Ibuprofen"
        description="Used to reduce inflammation and pain."
        company="XYZ Pharmaceuticals"
        price={7.99}
        imageUrl={test}
      />
      <DrugCard
        drugName="Ibuprofen"
        description="Used to reduce inflammation and pain."
        company="XYZ Pharmaceuticals"
        price={7.99}
        imageUrl={test}
      />
      <DrugCard
        drugName="Ibuprofen"
        description="Used to reduce inflammation and pain."
        company="XYZ Pharmaceuticals"
        price={7.99}
        imageUrl={test}
      />
      <DrugCard
        drugName="Ibuprofen"
        description="Used to reduce inflammation and pain."
        company="XYZ Pharmaceuticals"
        price={7.99}
        imageUrl={test}
      />
    </Stack>
  );
}
