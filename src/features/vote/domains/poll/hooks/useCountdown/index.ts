import { useEffect, useState } from 'react';
import { intervalToDuration, isAfter } from 'date-fns';
import { StorageKey } from 'features/vote/domains/poll/constants/storage-key';
import { setPollStatus } from 'features/vote/domains/poll/store/slices/poll';
import { useAppDispatch } from 'shared/hooks';
import { PollStatus } from 'features/vote/domains/poll/constants/poll-status';

export const useCountdown = () => {
  const [now, setNow] = useState(new Date());
  const dispatch = useAppDispatch();

  const getDateToAvailable = () => {
    const storageDate = localStorage.getItem(StorageKey.EXPIRES_DATE);
    return new Date(storageDate || '');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAfter(now, getDateToAvailable())) {
        clearInterval(interval);
        return;
      }
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [now]);

  const { days, hours, minutes, seconds } = intervalToDuration({
    start: now,
    end: getDateToAvailable()
  });

  if (isAfter(now, getDateToAvailable())) {
    dispatch(setPollStatus(PollStatus.AVAILABLE));
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return { days, hours, minutes, seconds };
};
