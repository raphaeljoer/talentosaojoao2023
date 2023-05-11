//material-ui
import { Box, Grow, Stack, Typography } from '@mui/material';
//types
import { HitType } from 'features/hits/types';
//components
import { Cover, Position } from 'features/hits/components';
//utils
import { numI18n } from 'shared/utils/number/numI18n';
//styles
import * as styles from './styles';
//resources
import Link from 'next/link';

type Props = {
  hit: HitType;
  index: number;
};

export const Hit = ({ hit, index }: Props) => {
  return (
    <div>
      <Link href={hit.link} passHref>
        <Grow in={true} timeout={1600}>
          <Box component="article" key={hit.link} sx={styles.item}>
            <Box sx={{ position: 'relative' }}>
              <Position position={index + 1} />
              <Cover
                cover={hit.cover}
                title={hit.title}
                subTitle={`${numI18n({ value: hit.plays })} plays`}
              />
            </Box>
            <Stack id="content" spacing={1} sx={styles.content}>
              <Typography variant="h2" sx={styles.artist}>
                {hit.artist}
              </Typography>
              <Typography variant="body2" sx={styles.title}>
                {hit.title}
              </Typography>
            </Stack>
          </Box>
        </Grow>
      </Link>
    </div>
  );
};
