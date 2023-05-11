//SEO
import { NextSeo } from 'next-seo';
import { resultSEO } from 'app/seo/result';
//types
import type { GetStaticProps, NextPage } from 'next/types';
//result
import { HitType, ResultView, hits } from 'features/vote';
//resources
import { connectToMongoDB } from 'shared/services/mongodb';
import { mongodb } from 'app/config/mongodb/poll/vote';
import { revalidate } from 'app/config/next/revalidate';

type Props = {
  hits: HitType[];
};

const ResultPage: NextPage<Props> = ({ hits }) => {
  return (
    <>
      <NextSeo {...resultSEO} />
      <ResultView hits={hits} />
    </>
  );
};

export default ResultPage;

export const getStaticProps: GetStaticProps = async () => {
  const db = await connectToMongoDB({
    uri: mongodb.URI,
    dbname: mongodb.DB_NAME
  });
  const collection = db.collection(mongodb.COLLECTION);
  const totalVotes = await collection.estimatedDocumentCount();
  const sort = (results: HitType[]) =>
    results.sort((a, b) => b.votes - a.votes);

  const addProgress = (results: HitType[]) =>
    results.map((result) => ({
      ...result,
      progress: (result.votes * 100) / results[0].votes
    }));

  const addPosition = (results: HitType[]) =>
    results.map((result, index) => ({ ...result, position: index + 1 }));

  const results: HitType[] = await Promise.all(
    hits.map(async (hit: HitType) => {
      const votes = await collection.countDocuments({ id: hit.id });
      const percentage = (votes / totalVotes) * 100;
      return { ...hit, votes, percentage };
    })
  )
    .then(sort)
    .then(addProgress)
    .then(addPosition);

  return {
    props: {
      hits: results
    },
    revalidate
  };
};
