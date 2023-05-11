//material-ui
import { Box, Typography } from '@mui/material';
import { HitType } from 'features/vote';
//components
import { Hit } from '../Hit';
import { ShareMenu } from '../ShareMenu';
//styles
import * as styles from './styles';

type Props = {
  hit: HitType;
};

export const Share = ({ hit }: Props) => {
  return (
    <Box sx={styles.container}>
      <Typography
        variant="h1"
        color="primary.main"
        align="center"
        sx={styles.title}
      >
        Eu votei em:
      </Typography>
      <Hit hit={hit} />
      <ShareMenu hit={hit} />
    </Box>
  );
};
