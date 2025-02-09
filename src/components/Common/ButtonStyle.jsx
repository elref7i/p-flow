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
    border,
  }) => ({
    backgroundColor: theme.palette.primary.main, // اللون الأساسي من الثيم
    color: theme.palette.text.primary,
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
      backgroundColor: hoverbgColor || theme.palette.background.main, // خلفية عند التحويل
      color: hoverColor || theme.palette.text.secondary,
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
    color: c || theme.palette.text.secondary,
    textDecoration: textDecoration || 'none',
    display: 'block',
    cursor: 'pointer',
    transition: transition || 'all 0.4s ease-in-out',
    padding: p || '0px',
    backgroundColor: bg || 'transparent',

    '&:hover': {
      backgroundColor: hoverbg || 'transparent',
      color: hoverColor || theme.palette.primary.main,
    },
  })
);

export default CustomButton;
