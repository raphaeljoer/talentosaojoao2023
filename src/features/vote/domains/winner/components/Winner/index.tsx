//material-ui
import { Box, Typography } from '@mui/material';
//styles
import * as styles from './styles';
//resources
import { HitType } from 'features/vote';
import { Cover } from 'features/vote/components';

type Props = {
  hit: HitType;
};

export const Winner = ({ hit }: Props) => {
  return (
    <Box sx={styles.container}>
      <Box sx={{ position: 'relative' }}>
        <Cover cover={hit.cover} title={hit.title} />
      </Box>
      <Box sx={styles.info}>
        <Typography
          variant="h2"
          color="primary.main"
          align="center"
          sx={styles.artist}
        >
          {hit.artist}
        </Typography>
        <Typography variant="h6" color="white" align="center" sx={styles.title}>
          {hit.title}
        </Typography>
        <Typography color="white" align="center" sx={styles.desc}>
          Com 50.1% dos votos Thiago Aquino é o vencedor do Prêmio Sua Música de
          Verão 2022 com o hit Plano B
        </Typography>
      </Box>
    </Box>
  );
};
