import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: 344,
  mt: 12,
  p: 3,
  borderRadius: 8,
  boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.3)',
  bgcolor: 'secondary.light'
};

export const artist: SxProps<Theme> = {
  overflowWrap: 'anywhere',
  fontWeight: 700,
  lineHeight: 1,
  fontSize: { xs: 24, md: 28 },
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  mb: 2,
  mt: 2,
  color: 'primary.main'
};

export const info: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  width: '100%',
  mb: 2
};

export const title: SxProps<Theme> = {
  overflowWrap: 'anywhere',
  fontWeight: 500,
  lineHeight: 1.2,
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3
};
export const desc: SxProps<Theme> = {
  mt: 3
};
