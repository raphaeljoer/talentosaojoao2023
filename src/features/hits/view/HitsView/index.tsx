import { HitList } from '../../components';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { Layout } from 'shared/components/Layout';
import { useQuery } from 'react-query';
import { Preloader } from 'shared/components/Preloader';
import { listHitsService } from 'features/hits/services/hits/list-hits-service';
import { queryConfig, queryKey } from 'features/hits/constants/query';

const msg = 'Dados coletados na plataforma Sua Música de 20/12 à 10/02';

export const HitsView = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { data, isLoading } = useQuery(
    queryKey.LIST,
    () => listHitsService.list(),
    {
      staleTime: queryConfig.STALE_TIME
    }
  );

  useEffect(() => {
    enqueueSnackbar(msg, {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      }
    });
  }, [enqueueSnackbar]);

  return (
    <Layout>
      <Preloader isLoading={isLoading}>
        {data && <HitList hits={data} />}
      </Preloader>
    </Layout>
  );
};
