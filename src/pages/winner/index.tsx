//types
import type { GetStaticProps, NextPage } from 'next';
//config
import { NextSeo } from 'next-seo';
import { hitsSEO } from 'app/seo/hits';
import { WinnerView, HitType, hits } from 'features/vote';

type Props = {
  hit: HitType;
};

const WinnerPage: NextPage<Props> = ({ hit }) => {
  return (
    <>
      <NextSeo {...hitsSEO} />
      <WinnerView hit={hit} />
    </>
  );
};
export default WinnerPage;

export const getStaticProps: GetStaticProps = async () => {
  const hit = hits.find((hit) => hit.id === 'thiago_aquino_plano_b');
  return {
    props: {
      hit
    }
  };
};
