import { styled } from '@mui/material/styles';

const LogoImage = styled('img')(({ width, height, borderRadius }) => ({
  width: width || '100px', // العرض الافتراضي
  height: height || 'auto', // الارتفاع الافتراضي
  borderRadius: borderRadius || '0', // شكل الحواف الافتراضي
}));

export default LogoImage;
