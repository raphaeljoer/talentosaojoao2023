//types
import type { NextPage } from 'next';
//config
import { NextSeo } from 'next-seo';
import { hitsSEO } from 'app/seo/hits';
import { ClosedView } from 'features/vote';

const ClosedPage: NextPage = () => {
  return (
    <>
      <NextSeo {...hitsSEO} />
      <ClosedView />
    </>
  );
};
export default ClosedPage;
