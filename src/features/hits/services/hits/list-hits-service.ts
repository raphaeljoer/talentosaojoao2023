import { apiPath } from 'features/hits/constants/endpoint';
import { HitType } from 'features/vote';
import { axiosHttpGetClient } from 'shared/services/httpClient/axios/axios-http-get-client';
import { HttpGetClient } from 'shared/services/httpClient/protocols/http-get-client';

class ListHitsService {
  httpGetClient: HttpGetClient;
  length: number;

  constructor(httpGetClient: HttpGetClient) {
    this.httpGetClient = httpGetClient;
    this.length = 50;
  }

  async list(path: string = apiPath.LIST) {
    return this.httpGetClient
      .get<HitType[]>(path)
      .then((response) => response.slice(0, this.length));
  }
}

export const listHitsService = new ListHitsService(axiosHttpGetClient);
