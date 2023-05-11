import { HitType } from 'features/vote';
import { Poll } from 'features/vote/domains/poll/components/Poll';
import { Layout } from 'shared/components/Layout';

type Props = {
  hits: HitType[];
};

export const PollView = ({ hits }: Props) => {
  return (
    <Layout>
      <Poll hits={hits} />
    </Layout>
  );
};
