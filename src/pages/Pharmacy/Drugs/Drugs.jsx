import { Stack } from '@mui/material';
import DrugCard from '../../../components/PharmacyComonents/DrugCard/DrugCard';
import DrugCardTwo from '../../../components/PharmacyComonents/DrugCardTwo/DrugCardTwo';
import test from '../../../assets/Alto ángulo del carrito de compras con espacio de copia y láminas de pastillas _ Foto Premium.jpg';

export default function Drugs() {
  return (
    <Stack
      direction={'row'}
      gap={2}
      justifyContent={'center'}
      alignItems={'center'}
      flexWrap={'wrap'}
    >
      <DrugCardTwo
        drugName="Ibuprofen"
        description="Used to reduce inflammation and pain."
        company="XYZ Pharmaceuticals"
        price={7.99}
        imageUrl={test}
      />
      <DrugCardTwo
        drugName="Ibuprofen"
        description="Used to reduce inflammation and pain."
        company="XYZ Pharmaceuticals"
        price={7.99}
        imageUrl={test}
      />
      <DrugCardTwo
        drugName="Ibuprofen"
        description="Used to reduce inflammation and pain."
        company="XYZ Pharmaceuticals"
        price={7.99}
        imageUrl={test}
      />
      <DrugCardTwo
        drugName="Ibuprofen"
        description="Used to reduce inflammation and pain."
        company="XYZ Pharmaceuticals"
        price={7.99}
        imageUrl={test}
      />
      <DrugCardTwo
        drugName="Ibuprofen"
        description="Used to reduce inflammation and pain."
        company="XYZ Pharmaceuticals"
        price={7.99}
        imageUrl={test}
      />
      <DrugCardTwo
        drugName="Ibuprofen"
        description="Used to reduce inflammation and pain."
        company="XYZ Pharmaceuticals"
        price={7.99}
        imageUrl={test}
      />
    </Stack>
  );
}
