export type HitType = {
  id: string;
  slug: string;
  cover: string;
  artist: string;
  title: string;
  link: string;
  plays: string;
  share: {
    feed: string;
    stories: string;
  };
  votes: number;
  percentage: number;
  position: number;
  progress: number;
};
