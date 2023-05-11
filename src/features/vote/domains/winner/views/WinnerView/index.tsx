//shared
import { Box, Typography } from '@mui/material';
import { HitType } from 'features/vote/types';
import { Layout } from 'shared/components/Layout';
import { Confetti } from '../../components/Confetti';
import { Winner } from '../../components/Winner';
import * as styles from './styles';

type Props = {
  hit: HitType;
};

export const WinnerView = ({ hit }: Props) => {
  return (
    <>
      <Confetti />
      <Layout>
        <Box sx={styles.container}>
          <Typography color="white" variant="h5">
            Vencedor
          </Typography>
          <Winner hit={hit} />
        </Box>
      </Layout>
    </>
  );
};
