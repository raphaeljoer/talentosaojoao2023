import { Box, Typography } from '@mui/material';
import { recaptcha } from 'app/config/recaptcha';
import axios from 'axios';
import { useRecaptchaV3 } from 'features/vote/domains/poll/hooks/useRecaptchaV3';
import { setPollStatus } from 'features/vote/domains/poll/store/slices/poll';
import { VoteApiResponse } from 'features/vote/domains/poll/types/vote';
import { MouseEventHandler, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks';
import { Button } from '../Button';
import { Cover } from 'features/vote/components';
import { useRouter } from 'next/router';
import * as styles from './styles';
import { useSnackbar } from 'notistack';
import { PollStatus } from 'features/vote/domains/poll/constants/poll-status';
import { StorageKey } from 'features/vote/domains/poll/constants/storage-key';
import { isAfter, isBefore } from 'date-fns';
import { HitType } from 'features/vote';
import { path } from 'shared/routes/path';

type HandleVote = MouseEventHandler<HTMLButtonElement>;

type Props = {
  hit: HitType;
};

type VoteParams = {
  id: string;
  token: string;
};

export const Hit = ({ hit }: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { getRecaptchaToken } = useRecaptchaV3({ siteKey: recaptcha.SITE_KEY });

  //TODO: Must use service to vote
  const vote = async ({ id, token }: VoteParams) => {
    return axios({
      method: 'POST',
      url: '/api/poll/vote',
      timeout: 5000,
      data: { id, token }
    });
  };

  useEffect(() => {
    const storageDate = localStorage.getItem(StorageKey.EXPIRES_DATE);
    if (!storageDate) dispatch(setPollStatus(PollStatus.AVAILABLE));
    const now = new Date();
    const expiresDate = new Date(storageDate || '');
    if (!expiresDate) {
      dispatch(setPollStatus(PollStatus.AVAILABLE));
    }
    if (isBefore(now, expiresDate)) {
      dispatch(setPollStatus(PollStatus.UNAVAILABLE));
    }
    if (isAfter(now, expiresDate)) {
      dispatch(setPollStatus(PollStatus.AVAILABLE));
    }
  }, [dispatch]);

  //TODO: wrapper this logic in a hook
  const handleVote: HandleVote = useCallback(async () => {
    dispatch(setPollStatus(PollStatus.PENDING));
    enqueueSnackbar('Validando seu voto', { variant: 'info' });
    const { id, slug } = hit;
    const { token, message } = await getRecaptchaToken({ action: id });
    if (!token) {
      dispatch(setPollStatus(PollStatus.REJECTED));
      enqueueSnackbar(message, { variant: 'error' });
      return;
    }
    const { isSuccess, message: voteMsg }: VoteApiResponse = await vote({
      id,
      token
    })
      .then(({ data }) => data)
      .catch(({ data }) => data);
    if (!isSuccess) {
      enqueueSnackbar(voteMsg, { variant: 'error' });
      dispatch(setPollStatus(PollStatus.REJECTED));
    }
    localStorage.setItem(
      StorageKey.EXPIRES_DATE,
      new Date(Date.now() + 120_000).toISOString()
    );
    dispatch(setPollStatus(PollStatus.UNAVAILABLE));
    enqueueSnackbar(voteMsg, { variant: 'success' });
    await router.push(`${path.SHARE}/${slug}`);
  }, [dispatch, enqueueSnackbar, getRecaptchaToken, hit, router]);

  return (
    <Box sx={styles.hit}>
      <Cover cover={hit.cover} title={hit.title} />
      <Box sx={styles.info}>
        <Typography
          variant="h2"
          color="secondary.main"
          align="center"
          sx={styles.artist}
        >
          {hit.artist}
        </Typography>
        <Typography
          variant="body2"
          color="white"
          align="center"
          sx={styles.title}
        >
          {hit.title}
        </Typography>
      </Box>
      <Button onVote={handleVote} />
    </Box>
  );
};
