//material-ui
import { Box, Typography } from '@mui/material';
//types
import { HitType } from 'features/vote';
import { useRouter } from 'next/router';
import { Hit } from '../Hit';
//styles
import * as styles from './styles';
//resources
import { Button } from 'shared/components/Button';

type Props = {
  hits: HitType[];
};

export const HitList = ({ hits }: Props) => {
  const router = useRouter();
  return (
    <Box sx={styles.container}>
      <Typography
        variant="h1"
        color="primary.main"
        align="center"
        sx={styles.title}
      >
        Resultado Parcial
      </Typography>
      <Box sx={styles.hits}>
        {hits.map((hit, index) => (
          <Hit key={hit.id} hit={hit} index={index} />
        ))}
      </Box>
      <Button onClick={() => router.back()}>Voltar</Button>
    </Box>
  );
};
