import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

// CustomButton
// const CustomButton = styled(Button)(
//   ({
//     theme,
//     p,
//     bgcolor,
//     mx,
//     fontWeight,
//     hoverColor,
//     hoverbgColor,
//     w,
//     sm,
//     md,
//     mb,
//     fs,
//     color,
//     border,
//     d,
//   }) => ({
//     backgroundColor: bgcolor || theme.palette.background.button, // لون الخلفية الأساسي
//     color: color || theme.palette.text.button, // لون النص الأساسي
//     padding: p || '10px 20px',
//     borderRadius: '5px',
//     border: border || `1px solid ${theme.palette.border.default}`,
//     cursor: 'pointer',
//     textTransform: 'capitalize',
//     transition: '0.5s',
//     display: d || 'block',
//     width: w || 'auto',
//     [theme.breakpoints.up('md')]: {
//       width: md || 'auto',
//     },
//     [theme.breakpoints.up('sm')]: {
//       width: sm || 'auto',
//     },
//     fontSize: fs || '18px',
//     fontWeight: fontWeight || 'bold',
//     marginInline: mx || 'auto',
//     marginBottom: mb || 'auto',

//     '&:hover': {
//       backgroundColor: hoverbgColor || theme.palette.action.hover, // لون الخلفية عند الـ hover
//       color: hoverColor || theme.palette.text.primary, // لون النص عند الـ hover
//     },
//   })
// );

const CustomButton = styled(Button)(
  ({
    theme,
    p,
    mx,
    fontWeight,
    w,
    sm,
    md,
    mb,
    fs,
    d,
    variant = 'contained',
    buttonStyle = 'default',
    // component,
  }) => {
    // الألوان حسب النوع
    const colors = {
      default: {
        bgcolor: theme.palette.background.button,
        color: theme.palette.text.button,
        border: `1px solid ${theme.palette.border.default}`,
        hoverbgColor: theme.palette.action.hover,
        hoverColor: theme.palette.text.primary,
      },
      update: {
        bgcolor: theme.palette.info.main,
        color: '#fff',
        border: `1px solid ${theme.palette.info.dark}`,
        hoverbgColor: theme.palette.info.dark,
        hoverColor: '#fff',
      },
      delete: {
        bgcolor: theme.palette.error.main,
        color: '#fff',
        border: `1px solid ${theme.palette.error.dark}`,
        hoverbgColor: theme.palette.error.dark,
        hoverColor: '#fff',
      },
      info: {
        bgcolor: theme.palette.primary.main,
        color: '#fff',
        border: `1px solid ${theme.palette.primary.dark}`,
        hoverbgColor: theme.palette.primary.dark,
        hoverColor: '#fff',
      },
      warning: {
        bgcolor: theme.palette.warning.main,
        color: '#fff',
        border: `1px solid ${theme.palette.warning.dark}`,
        hoverbgColor: theme.palette.warning.dark,
        hoverColor: '#fff',
      },
    };

    // تحديد القيم بناءً على النوع
    const selected = colors[buttonStyle] || colors.default;

    return {
      backgroundColor:
        variant === 'contained' ? selected.bgcolor : 'transparent',
      color: variant === 'contained' ? selected.color : selected.bgcolor,
      border: variant === 'outlined' ? selected.border : 'none',
      padding: p || '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      textTransform: 'capitalize',
      transition: '0.5s',
      display: d || 'block',
      width: w || 'auto',
      fontSize: fs || '18px',
      fontWeight: fontWeight || 'bold',
      marginInline: mx || 'auto',
      marginBottom: mb || 'auto',
      [theme.breakpoints.up('md')]: {
        width: md || 'auto',
      },
      [theme.breakpoints.up('sm')]: {
        width: sm || 'auto',
      },
      '&:hover': {
        backgroundColor:
          variant === 'contained' ? selected.hoverbgColor : 'transparent',
        color:
          variant === 'contained' ? selected.hoverColor : selected.hoverbgColor,
        border:
          variant === 'outlined'
            ? `1px solid ${selected.hoverbgColor}`
            : 'none',
      },
    };
  }
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
    textTransform: 'capitalize',
    borderRadius: br || '0px',
    color: c || theme.palette.text.button, // لون النص الأساسي
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
    backgroundColor: bg || theme.palette.background.button, // لون الخلفية الأساسي

    // تأثيرات hover
    '&:hover': {
      backgroundColor: bghover || theme.palette.action.hover, // لون الخلفية عند الـ hover
      color: chover || theme.palette.text.primary, // لون النص عند الـ hover
    },
  })
);

export const LogoLink = styled(Link)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 'bold',
  color: theme.palette.text.primary, // لون النص الأساسي
  textDecoration: 'none',
  display: 'block',
  cursor: 'pointer',
}));
export default CustomButton;
