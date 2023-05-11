import { HitType } from 'features/vote';
import { useAppSelector } from 'shared/hooks';
import { ShareStatus } from '../../constants/share-status';
import { Share } from '../Share';
import { SocialShare } from '../SocialShare';

type Props = {
  hit: HitType;
};

type Display = {
  [key in ShareStatus]: JSX.Element;
};

export const ShareStateSwitcher = ({ hit }: Props) => {
  const status = useAppSelector((state) => state.vote.share.status);
  const { share, artist } = hit;
  const display: Display = {
    [ShareStatus.INIT]: <Share hit={hit} />,
    [ShareStatus.FEED]: <SocialShare artist={artist} url={share.feed} />,
    [ShareStatus.STORIES]: (
      <SocialShare
        artist={artist}
        url={share.stories}
        width={320}
        height={520}
      />
    )
  };
  return display[status];
};
