import { styled } from '@mui/material/styles';

const CustomButton = styled('button')(
  ({
    theme,
    pad,
    bgcolor,
    marginInline,
    fontWeight,
    hoverColor,
    w,
    sm,
    md,
  }) => ({
    backgroundColor: bgcolor || '#2B273A', // اللون الافتراضي
    color: '#F5F6F6',
    padding: pad || '10px 20px', // القيم الافتراضية
    borderRadius: '5px',
    border: '1px solid #2B273A',
    cursor: 'pointer',
    transition: '0.3s',
    display: 'block',
    width: w || 'auto',
    [theme.breakpoints.up('md')]: {
      width: md || 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      width: sm || 'auto',
    },
    fontSize: '20px',
    fontWeight: fontWeight || 'bold',
    marginInline: marginInline || 'auto',
    '&:hover': {
      backgroundColor: hoverColor || '#DDDDDD',
      color: hoverColor || '#2B273A',
    },
  })
);

export default CustomButton;
