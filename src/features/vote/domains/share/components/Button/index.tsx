import { Box, BoxProps, IconButton, Typography } from '@mui/material';
import { ReactNode } from 'react';
import * as styles from './styles';

type Props = BoxProps & {
  children: ReactNode;
  label: string;
};

export const Button = ({ children, label, ...props }: Partial<Props>) => {
  return (
    <Box sx={styles.button} {...props}>
      <IconButton aria-label="feed" size="large" sx={styles.icon}>
        {children}
      </IconButton>
      <Typography>{label}</Typography>
    </Box>
  );
};
