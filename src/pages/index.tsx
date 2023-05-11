import { hits, HitType } from 'features/vote';
import { GetStaticProps, NextPage } from 'next';

import WinnerPage from './winner';

type Props = {
  hit: HitType;
};

const HomePage: NextPage<Props> = ({ hit }) => <WinnerPage hit={hit} />;
export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const hit = hits.find((hit) => hit.id === 'thiago_aquino_plano_b');
  return {
    props: {
      hit
    }
  };
};
