//material-ui
import { Box, Typography } from '@mui/material';
//styles
import * as styles from './styles';
//resources
import Link from 'next/link';
import { Button } from 'shared/components/Button';
import { HitType } from 'features/vote';
import { Cover } from 'features/vote/components';
import { path } from 'shared/routes/path';

type Props = {
  hit: HitType;
};

export const Hit = ({ hit }: Props) => {
  return (
    <Box sx={styles.hit}>
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
      </Box>
      <Link href={path.RESULT} passHref>
        <Button>Ver resultado parcial</Button>
      </Link>
      <Link href={path.VOTE} passHref>
        <Button>Votar novamente</Button>
      </Link>
    </Box>
  );
};
