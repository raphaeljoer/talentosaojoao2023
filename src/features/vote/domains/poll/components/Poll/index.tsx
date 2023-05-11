import { Grid } from '@mui/material';
import { HitType } from 'features/vote';
import { Hit } from '../Hit';
import * as styles from './styles';

type Props = {
  hits: HitType[];
};

export const Poll = ({ hits }: Props) => {
  return (
    <Grid sx={styles.container}>
      {hits.map((hit) => (
        <Hit key={hit.id} hit={hit} />
      ))}
    </Grid>
  );
};
