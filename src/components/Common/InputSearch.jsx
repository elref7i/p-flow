import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor:
    theme.palette.mode === 'light'
      ? alpha(theme.palette.common.black, 0.05) // خلفية فاتحة في الوضع الفاتح
      : alpha(theme.palette.common.white, 0.15), // خلفية داكنة في الوضع الداكن
  '&:hover': {
    backgroundColor:
      theme.palette.mode === 'light'
        ? alpha(theme.palette.common.black, 0.1) // خلفية فاتحة عند الـ hover في الوضع الفاتح
        : alpha(theme.palette.common.white, 0.25), // خلفية داكنة عند الـ hover في الوضع الداكن
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:
    theme.palette.mode === 'light'
      ? theme.palette.text.secondary // لون أيقونة البحث في الوضع الفاتح
      : theme.palette.text.primary, // لون أيقونة البحث في الوضع الداكن
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    color:
      theme.palette.mode === 'light'
        ? theme.palette.text.primary // لون النص في الوضع الفاتح
        : theme.palette.text.primary, // لون النص في الوضع الداكن
    '&::placeholder': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.text.secondary // لون النص المؤقت في الوضع الفاتح
          : theme.palette.text.secondary, // لون النص المؤقت في الوضع الداكن
    },
  },
}));

export default function InputSearch() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}
