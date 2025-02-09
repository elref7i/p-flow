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
    backgroundColor: bgcolor || theme.palette.primary.main,
    color: color || theme.palette.text.primary,
    padding: pad || '10px 20px',
    borderRadius: '5px',
    border: border || `1px solid ${theme.palette.primary.main}`,
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
      backgroundColor: hoverbgColor || theme.palette.action.hover, // لون مخصص للـ hover
      color: hoverColor || theme.palette.primary.dark, // لون يكون واضح في الحالتين
    },
  })
);

export const CustomLink = styled(Link)(
  ({
    theme,
    fs,
    fw,
    br,
    c,
    textDecoration,
    transition,
    p,
    bg,
    hoverbg,
    hoverColor,
  }) => ({
    fontStyle: fs || 'normal',
    fontWeight: fw || 'normal',
    borderRadius: br || '0px',
    color: c || theme.palette.text.primary,
    textDecoration: textDecoration || 'none',
    display: 'block',
    cursor: 'pointer',
    transition: transition || 'all 0.4s ease-in-out',
    padding: p || '0px',
    backgroundColor: bg || theme.palette.background.default,

    '&:hover': {
      backgroundColor: hoverbg || theme.palette.action.hover,
      color: hoverColor || theme.palette.primary.dark,
    },
  })
);

export default CustomButton;
