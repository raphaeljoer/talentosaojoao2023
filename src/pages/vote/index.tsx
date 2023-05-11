//SEO
import { pollSEO } from 'app/seo/poll';
import { NextSeo } from 'next-seo';
//types
import type { GetStaticProps, NextPage } from 'next/types';
import { hits, HitType, PollView } from 'features/vote';

type Props = {
  hits: HitType[];
};

const VotePage: NextPage<Props> = ({ hits }) => {
  return (
    <>
      <NextSeo {...pollSEO} />
      <PollView hits={hits} />
    </>
  );
};

export default VotePage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      hits
    }
  };
};
