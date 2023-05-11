//SEO
import { NextSeo } from 'next-seo';
import { shareSEO } from 'app/seo/share';
//types
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next/types';
import type { HitType } from 'features/vote';
import { ShareView, hits } from 'features/vote';

type Props = {
  hit: HitType;
  slug: string;
};

const SharePage: NextPage<Props> = ({ hit }) => {
  return (
    <>
      <NextSeo {...shareSEO} />
      <ShareView hit={hit} />
    </>
  );
};

export default SharePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = hits.map((hit) => ({ params: { slug: hit.slug } }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  const hit = hits.find((hit) => hit.slug === slug);
  return {
    props: {
      hit,
      slug
    }
  };
};
