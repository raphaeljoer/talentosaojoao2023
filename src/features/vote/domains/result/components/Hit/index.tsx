//material-ui
import { Box, Stack, Typography } from '@mui/material';
//types
import { HitType } from 'features/vote';
//styles
import * as styles from './styles';
//resources
import { ProgressBar } from '../ProgressBar';
import { Position } from 'features/vote/components';
import { Cover } from '../Cover';

type Props = {
  hit: HitType;
  index: number;
};

export const Hit = ({ hit, index }: Props) => {
  return (
    <Box component="article" sx={styles.item}>
      <Box sx={{ position: 'relative' }}>
        <Position position={index + 1} />
        <Cover cover={hit.cover} title={hit.title} />
      </Box>
      <Stack id="content" spacing={1} sx={styles.content}>
        <Typography variant="h2" color="primary.main" sx={styles.artist}>
          {hit.artist}
        </Typography>
        <Typography variant="body2" color="white" sx={styles.title}>
          {hit.title}
        </Typography>
        <ProgressBar progress={hit.progress} percentage={hit.percentage} />
      </Stack>
    </Box>
  );
};
