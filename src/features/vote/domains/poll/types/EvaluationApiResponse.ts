import { RecaptchaType } from './RecaptchaType';

export type EvaluationApiResponse = {
  data?: RecaptchaType;
  error?: unknown;
  isSuspicious: boolean;
  isSuccess: boolean;
  message: string;
};
