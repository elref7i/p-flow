import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

// CustomButton
const CustomButton = styled(Button)(
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
    backgroundColor: bgcolor || theme.palette.background.button, // لون الخلفية الأساسي
    color: color || theme.palette.text.button, // لون النص الأساسي
    padding: pad || '10px 20px',
    borderRadius: '5px',
    border: border || `1px solid ${theme.palette.border.default}`,
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
    fontSize: fs || '18px',
    fontWeight: fontWeight || 'bold',
    marginInline: marginInline || 'auto',
    marginBottom: mb || 'auto',

    '&:hover': {
      backgroundColor: hoverbgColor || theme.palette.action.hover, // لون الخلفية عند الـ hover
      color: hoverColor || theme.palette.text.primary, // لون النص عند الـ hover
    },
  })
);

// CustomLink
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
    bghover,
    display,
    chover,
    alignItems,
    justifyContent,
    justifySelf,
    mx,
    ml,
    textWrap,
  }) => ({
    fontSize: fs || 'normal',
    fontWeight: fw || 'normal',
    borderRadius: br || '0px',
    color: c || theme.palette.text.primary, // لون النص الأساسي
    textDecoration: textDecoration || 'none',
    display: display || 'block',
    alignItems: alignItems,
    justifyContent: justifyContent,
    marginInline: mx,
    textWrap: textWrap,
    marginLeft: ml,
    justifySelf: justifySelf || 'flex-start',
    cursor: 'pointer',
    transition: transition || 'all 0.4s ease-in-out',
    padding: p || '0px',
    backgroundColor: bg || theme.palette.background.default, // لون الخلفية الأساسي

    // تأثيرات hover
    '&:hover': {
      backgroundColor: bghover || theme.palette.action.hover, // لون الخلفية عند الـ hover
      color: chover || theme.palette.text.primary, // لون النص عند الـ hover
    },
  })
);

export default CustomButton;
