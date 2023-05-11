import { env } from 'features/hits/constants/env';
import { HitType } from 'features/hits';
import { listHitsService } from 'features/hits/services/hits/list-hits-service';
import { NextApiRequest, NextApiResponse } from 'next';

type Handler = (
  req: NextApiRequest,
  res: NextApiResponse<HitType[] | undefined>
) => void;

export const list: Handler = async (req, res) => {
  const hits = await listHitsService.list(env.HITS_URL);
  if (!hits) res.status(400).json(undefined);
  res.status(200).json(hits);
};
