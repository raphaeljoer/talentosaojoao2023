import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const list: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: 768,
  mx: 'auto',
  mt: { xs: 27, sm: 24 },
  mb: 12,
  width: '100%',
  overflow: 'auto'
};
