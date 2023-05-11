import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const list: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  mt: { xs: 27, sm: 26 },
  mb: 12,
  width: '100%',
  overflow: 'auto'
};
