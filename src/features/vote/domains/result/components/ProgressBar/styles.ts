import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center'
};

export const progress: SxProps<Theme> = {
  display: 'flex',
  bgcolor: 'primary.main',
  borderRadius: 8,
  height: 24,
  overflow: 'hidden',
  border: '2px solid',
  borderColor: 'primary.main',
  width: '100%'
};

export const bar: SxProps<Theme> = {
  bgcolor: 'secondary.main',
  borderRadius: 8,
  height: '100%',
  background: `repeating-linear-gradient(
      -45deg,
      #606dbc,
      #606dbc
      10px,
      #465298
      10px,
      #465298
      20px
      )`
};

export const percent: SxProps<Theme> = {
  fontWeight: 'bold',
  color: 'primary.main',
  lineHeight: 2,
  ml: 2
};
