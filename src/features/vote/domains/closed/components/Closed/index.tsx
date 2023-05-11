//material-ui
import { Box, Typography } from '@mui/material';
//styles
import * as styles from './styles';

export const Closed = () => {
  return (
    <Box sx={styles.container}>
      <Typography
        variant="h1"
        color="primary.main"
        align="center"
        sx={styles.title}
      >
        Votação encerrada
      </Typography>
      <Typography variant="h6" color="primary.contrastText" align="center">
        Em breve divulgaremos o vencedor!
      </Typography>
    </Box>
  );
};
