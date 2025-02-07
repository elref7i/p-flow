import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const CustomButton = styled('button')(
  ({
    theme,
    pad,
    bgcolor,
    marginInline,
    fontWeight,
    hoverColor,
    hoverbgColor,
    w,
    sm,
    md,
    mb,
    fs,
    color,
    border,
  }) => ({
    backgroundColor: bgcolor || '#2B273A', // اللون الافتراضي
    color: color || '#F5F6F6',
    padding: pad || '10px 20px', // القيم الافتراضية
    borderRadius: '5px',
    border: border || '1px solid #2B273A',
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
    fontSize: fs || '20px',
    fontWeight: fontWeight || 'bold',
    marginInline: marginInline || 'auto',
    marginBottom: mb || 'auto',
    '&:hover': {
      backgroundColor: hoverbgColor || '#DDDDDD',
      color: hoverColor || '#2B273A',
    },
  })
);

export const CustomLink = styled(Link)`
  font-style: ${(props) => props.fs || 'normal'};
  color: ${(props) => props.fs || '#2b273a99'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  display: 'block';
  cursor: 'pointer';
  &:hover {
    background-color: ${(props) => props.bg || 'transparent'};
    color: ${(props) => props.hoverColor || '#2B273A'};
  }
`;

export default CustomButton;
