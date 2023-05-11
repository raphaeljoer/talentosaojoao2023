import { recaptcha } from 'app/config/recaptcha';
import axios from 'axios';
import { RecaptchaType } from 'features/vote/domains/poll/types/RecaptchaType';
import type { NextApiRequest, NextApiResponse } from 'next';
import { mongodb } from 'app/config/mongodb/poll/vote';
import {
  VoteApiRequestBody,
  VoteApiResponse
} from 'features/vote/domains/poll/types/vote';
import { connectToMongoDB } from 'shared/services/mongodb';

type Handler = (
  req: NextApiRequest,
  res: NextApiResponse<VoteApiResponse>
) => void;

export type RecaptchaResponse = {
  data?: RecaptchaType;
};

interface CollectionRequestProps {
  id: string;
  voted_at: Date;
  score: number;
  ip: string | string[] | undefined;
}

export const vote: Handler = async (req, res) => {
  const { id, token }: VoteApiRequestBody = req.body;
  if (!token) {
    res.status(400).json({
      isSuspicious: false,
      isSuccess: false,
      message: 'Token inválido'
    });
    return;
  }
  if (!id) {
    res.status(400).json({
      isSuspicious: false,
      isSuccess: false,
      message: 'id inválido'
    });
    return;
  }
  const { data }: RecaptchaResponse = await axios({
    method: 'POST',
    url: recaptcha.URL + token,
    timeout: 5000
  });
  if (!data) {
    res.status(400).json({
      isSuspicious: false,
      isSuccess: false,
      message: 'Não foi possível validar o token'
    });
    return;
  }
  if (!data.success) {
    res.status(400).json({
      isSuspicious: false,
      isSuccess: data.success,
      message: 'Token inválido'
    });
    return;
  }
  const { score }: RecaptchaType = data;
  if (score < recaptcha.MINIMUM_SCORE) {
    res.status(200).json({
      isSuspicious: true,
      isSuccess: data.success,
      message: 'Comportamento Suspeito'
    });
    return;
  }
  const db = await connectToMongoDB({
    uri: mongodb.URI,
    dbname: mongodb.DB_NAME
  });
  const collection = db.collection('votes');
  const ip = req.headers['x-forwarded-for'];
  const collectionRequest: CollectionRequestProps = {
    id,
    voted_at: new Date(),
    score,
    ip
  };
  await collection
    .insertOne(collectionRequest)
    .then(() => {
      return res.status(200).json({
        isSuspicious: false,
        isSuccess: true,
        message: 'Voto registrado com sucesso'
      });
    })
    .catch(() => {
      return res.status(500).json({
        isSuspicious: false,
        isSuccess: true,
        message: 'Voto não registrado'
      });
    });
};

export default vote;
