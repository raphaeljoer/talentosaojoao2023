import { HitType } from 'features/vote';
import { Layout } from 'shared/components/Layout';
import { HitList } from '../../components/HitList';

type Props = {
  hits: HitType[];
};

export const ResultView = ({ hits }: Props) => {
  return (
    <Layout>
      <HitList hits={hits} />
    </Layout>
  );
};
