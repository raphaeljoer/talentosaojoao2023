import { useCountdown } from 'features/vote/domains/poll/hooks/useCountdown';

export const Countdown = () => {
  const { minutes, seconds } = useCountdown();
  const m = ('0' + minutes).slice(-2);
  const s = ('0' + seconds).slice(-2);
  return <>{`${m}:${s}`}</>;
};
