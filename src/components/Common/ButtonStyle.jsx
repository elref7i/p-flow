import { styled } from '@mui/material/styles';

const CustomButton = styled('button')(
  ({ pad, bgcolor, marginInline, fontWeight, hover }) => ({
    backgroundColor: bgcolor || 'black', // اللون الافتراضي
    color: 'white',
    padding: pad || '10px 20px', // القيم الافتراضية
    borderRadius: '5px',
    border: '1px solid #000',
    cursor: 'pointer',
    transition: '0.3s',
    display: 'block',
    paddingBlock: '12px',
    paddingInline: '80px',
    fontSize: '20px',
    fontWeight: fontWeight || 'bold',
    marginInline: marginInline || 'auto',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
  })
);

export default CustomButton;
