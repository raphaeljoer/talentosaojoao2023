import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const button: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  color: 'secondary.contrastText',
  '&:hover': {
    cursor: 'pointer',
    color: 'primary.main',
    transform: 'scale(0.97)',
    transition: 'all 0.3s ease-out'
  }
};

export const icon: SxProps<Theme> = {
  color: 'primary.main'
};
