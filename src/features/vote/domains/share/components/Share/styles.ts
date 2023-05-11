import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  mt: 32,
  mb: 24,
  px: 2
};

export const title: SxProps<Theme> = {
  fontSize: 32,
  fontWeight: 700
};
