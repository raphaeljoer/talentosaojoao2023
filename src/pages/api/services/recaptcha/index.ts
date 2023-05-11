//types
import type { NextApiRequest, NextApiResponse } from 'next';
import type { RecaptchaType } from 'features/vote/domains/poll/types/RecaptchaType';
//configs
import { recaptcha } from 'app/config/recaptcha';
//resources
import axios from 'axios';
import { EvaluationApiResponse } from 'features/vote/domains/poll/types/EvaluationApiResponse';

type Handler = (
  req: NextApiRequest,
  res: NextApiResponse<EvaluationApiResponse>
) => void;

type BodyRequest = {
  token: string;
};

export type RecaptchaResponse = {
  data?: RecaptchaType;
};

export const validation: Handler = async (req, res) => {
  const { token }: BodyRequest = req.body;
  if (!token) {
    res.status(400).json({
      data: undefined,
      isSuspicious: false,
      isSuccess: false,
      message: 'Token is required'
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
      data: undefined,
      error: undefined,
      isSuspicious: false,
      isSuccess: false,
      message: 'Não foi possível validar o token'
    });
    return;
  }
  if (!data.success) {
    res.status(200).json({
      data,
      error: data['error-codes'],
      isSuspicious: false,
      isSuccess: data.success,
      message: 'Token inválido'
    });
    return;
  }
  const { score }: RecaptchaType = data;

  if (score < recaptcha.MINIMUM_SCORE) {
    res.status(200).json({
      data,
      isSuspicious: true,
      isSuccess: data.success,
      message: 'Comportamento Suspeito'
    });
    return;
  }
  res.status(200).json({
    data,
    isSuspicious: false,
    isSuccess: data.success,
    message: 'OK'
  });
};

export default validation;

// Next.js API route support:
// https://nextjs.org/docs/api-routes/introduction
