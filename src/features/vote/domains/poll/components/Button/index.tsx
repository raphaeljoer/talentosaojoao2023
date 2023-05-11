import { Typography } from '@mui/material';
import { MouseEventHandler } from 'react';
import { Button as SharedButton } from 'shared/components/Button';
import { useAppSelector } from 'shared/hooks';
import { Countdown } from '../Countdown';

type HandleVote = MouseEventHandler<HTMLButtonElement>;

type Props = {
  onVote: HandleVote;
};

export const Button = ({ onVote }: Props) => {
  const status = useAppSelector((state) => state.vote.poll.status);
  const isIdle = status === 'IDLE';
  const isVoting = status === 'PENDING';
  const isAvailable = status === 'AVAILABLE';
  const isUnavailable = status === 'UNAVAILABLE';

  return (
    <>
      <SharedButton disabled={!isAvailable || isIdle} onClick={onVote}>
        {isAvailable && 'Votar'}
        {isVoting && 'Votando ...'}
        {isUnavailable && <Countdown />}
      </SharedButton>
      {isUnavailable && (
        <Typography color="white" variant="body2" sx={{ mt: 2 }}>
          Aguarde para votar novamente
        </Typography>
      )}
    </>
  );
};
