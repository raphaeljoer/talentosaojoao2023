export type VoteApiResponse = {
  isSuspicious: boolean;
  isSuccess: boolean;
  message: string;
};

export type VoteApiRequestBody = {
  id: string;
  token: string;
};
