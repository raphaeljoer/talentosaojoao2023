//components
import { HitType } from 'features/vote';
//shared
import { Layout } from 'shared/components/Layout';
import { Confetti } from '../../components/Confetti';
import { ShareStateSwitcher } from '../../components/Switcher';

type Props = {
  hit: HitType;
};

export const ShareView = ({ hit }: Props) => {
  return (
    <>
      <Confetti />
      <Layout>
        <ShareStateSwitcher hit={hit} />
      </Layout>
    </>
  );
};
