import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const item: SxProps<Theme> = {
  display: 'flex',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  bgcolor: 'secondary.light',
  borderRadius: 4,
  mx: 'auto',
  mb: 2,
  p: 2
};

export const content: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  my: 'auto',
  width: '100%',
  height: '100%',
  ml: { xs: 2, sm: 3 }
};

export const artist: SxProps<Theme> = {
  overflowWrap: 'anywhere',
  fontWeight: 700,
  lineHeight: 1,
  fontSize: { xs: 18, md: 24 },
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2
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
