import { Box } from '@mui/material';
import { HitType } from 'features/hits/types/hit';
import { Hit } from '../Hit';
import * as styles from './styles';

type Props = {
  hits: HitType[];
};

export const List = ({ hits }: Props) => {
  return (
    <Box component="section" sx={styles.list}>
      {hits.map((hit, index) => (
        <Hit key={hit.link} hit={hit} index={index} />
      ))}
    </Box>
  );
};
