import { RiInstagramLine, RiWhatsappLine } from 'react-icons/ri';
import { Box } from '@mui/material';
import { Button } from '../Button';
import * as styles from './styles';
import { useAppDispatch } from 'shared/hooks';
import { setShareStatus } from '../../store/slices/share';
import { ShareStatus } from '../../constants/share-status';
import { HitType } from 'features/vote';
import Link from 'next/link';

type Props = {
  hit: HitType;
};

export const ShareMenu = ({ hit }: Props) => {
  const ICON_SIZE = 48;
  const whatsappMessage = `Ajude ${hit.artist} a ser escolhido como o o hit do verão 2022 https://suamusicadeverao.com.br/vote`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  const dispatch = useAppDispatch();
  const handleSetShareStatus = (status: ShareStatus) => {
    dispatch(setShareStatus(ShareStatus[status]));
  };

  return (
    <Box sx={styles.container}>
      <Button
        label="Feed"
        onClick={() => handleSetShareStatus(ShareStatus.FEED)}
      >
        <RiInstagramLine size={ICON_SIZE} />
      </Button>
      <Button
        label="Stories"
        onClick={() => handleSetShareStatus(ShareStatus.STORIES)}
      >
        <RiInstagramLine size={ICON_SIZE} />
      </Button>
      <Link href={whatsappUrl} data-action="share/whatsapp/share" passHref>
        <Button label="Whatsapp">
          <RiWhatsappLine size={ICON_SIZE} />
        </Button>
      </Link>
    </Box>
  );
};
