import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100vh'
};

export const title: SxProps<Theme> = {
  fontSize: 32,
  fontWeight: 700
};
