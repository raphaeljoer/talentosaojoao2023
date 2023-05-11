//types
import type { NextPage } from 'next';
//resources
import { HitsView } from 'features/hits';
//config
import { NextSeo } from 'next-seo';
import { hitsSEO } from 'app/seo/hits';

const HitsPage: NextPage = () => {
  return (
    <>
      <NextSeo {...hitsSEO} />
      <HitsView />
    </>
  );
};
export default HitsPage;
