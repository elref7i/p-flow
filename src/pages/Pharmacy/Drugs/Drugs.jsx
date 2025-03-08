import { Stack } from '@mui/material';
import DrugCard from '../../../components/PharmacyComonents/DrugCard/DrugCard';
import test from '../../../assets/Alto ángulo del carrito de compras con espacio de copia y láminas de pastillas _ Foto Premium.jpg';

export default function Drugs() {
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
