import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100%',
  mt: 32,
  mb: 24,
  px: 2
};

export const title: SxProps<Theme> = {
  fontSize: 32,
  fontWeight: 700
};

export const description: SxProps<Theme> = {
  mt: 2,
  maxWidth: 320,
  fontWeight: 400
};

export const imageContainer: SxProps<Theme> = {
  position: 'relative',
  border: '4px solid',
  overflow: 'hidden',
  borderColor: 'primary.main',
  borderRadius: 6,
  width: 320,
  height: 320,
  mt: 4
};

export const actions: SxProps<Theme> = {
  width: '100%',
  maxWidth: 320
};
