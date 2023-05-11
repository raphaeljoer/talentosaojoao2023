import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  maxWidth: 480,
  mx: 'auto',
  mt: 32,
  mb: 16,
  px: 2
};

export const title: SxProps<Theme> = {
  fontSize: 32,
  fontWeight: 700
};

export const hits: SxProps<Theme> = {
  width: '100%',
  mt: 4
};
