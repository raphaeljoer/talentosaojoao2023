import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from 'shared/components/Button';
import { useAppDispatch } from 'shared/hooks';
import { ShareStatus } from '../../constants/share-status';
import { setShareStatus } from '../../store/slices/share';
import * as styles from './styles';

type Props = {
  artist: string;
  url: string;
  width?: number;
  height?: number;
};

export const SocialShare = ({
  artist,
  url,
  width = 320,
  height = 460
}: Props) => {
  const dispatch = useAppDispatch();
  const handleBack = () => dispatch(setShareStatus(ShareStatus.INIT));
  const router = useRouter();

  return (
    <Box sx={styles.container}>
      <Typography
        variant="h1"
        color="primary.main"
        align="center"
        sx={styles.title}
      >
        Compartilhe
      </Typography>
      <Typography
        color="secondary.contrastText"
        align="center"
        sx={styles.description}
      >
        {`Ajude ${artist} a ser escolhido como o o hit do verão 2022`}
      </Typography>
      <Box sx={{ ...styles.imageContainer, width, height }}>
        <Image src={url} layout="fill" objectFit="cover" />
      </Box>
      <Box sx={styles.actions}>
        <Button onClick={() => router.push(url)}>Download</Button>
        <Button onClick={handleBack}>Voltar</Button>
      </Box>
    </Box>
  );
};
