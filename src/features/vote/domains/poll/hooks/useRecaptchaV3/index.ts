import axios from 'axios';
import { EvaluationApiResponse } from 'features/vote/domains/poll/types/EvaluationApiResponse';
import { useCallback, useState } from 'react';
import { load } from 'recaptcha-v3';

type GetRecaptchaTokenParams = {
  action: string;
};

type GetRecaptchaProps = {
  action: string;
};

type UseRecaptchaV3 = {
  siteKey: string;
};

type GetRecaptchaTokenResponse = {
  token?: string;
  message: string;
};

export const useRecaptchaV3 = ({ siteKey }: UseRecaptchaV3) => {
  const [token, setToken] = useState<string | undefined>(undefined);
  const getRecaptchaToken = useCallback(
    async ({
      action
    }: GetRecaptchaTokenParams): Promise<GetRecaptchaTokenResponse> => {
      return await load(siteKey)
        .then((recaptcha) =>
          recaptcha
            .execute(action)
            .then((token) => {
              setToken(token);
              return {
                token,
                message: 'Token gerado com sucesso'
              };
            })
            .catch((error) => {
              console.error(error);
              return {
                token: undefined,
                message: 'Erro ao gerar token'
              };
            })
        )
        .catch((error) => {
          console.error(error);
          return {
            token: undefined,
            message: 'Erro ao carregar recaptcha'
          };
        });
    },
    [siteKey]
  );
  const getRecaptchaEvaluation = useCallback(
    async (token: string): Promise<EvaluationApiResponse> => {
      return axios({
        method: 'POST',
        url: '/api/services/recaptcha',
        timeout: 5000,
        data: { token }
      })
        .then(({ data }) => data)
        .catch((error) => {
          console.error(error);
          return error;
        });
    },
    []
  );
  const getRecaptcha = useCallback(
    async ({ action }: GetRecaptchaProps) => {
      const { token } = await getRecaptchaToken({ action });
      if (!token) return;
      const { data } = await getRecaptchaEvaluation(token);
      if (!data) return;
      if (!data.success) return;
      return data;
    },
    [getRecaptchaToken, getRecaptchaEvaluation]
  );

  return { getRecaptcha, getRecaptchaToken, token };
};
