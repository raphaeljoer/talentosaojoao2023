import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

const keyframes = {
  '@keyframes confetti': {
    '0%': {
      transform: 'rotateZ(15deg) rotateY(0deg) translate(0, 0)'
    },
    '25%': {
      transform: 'rotateZ(5deg) rotateY(360deg) translate(-5vw, 20vh)'
    },
    '50%': {
      transform: 'rotateZ(15deg) rotateY(720deg) translate(5vw, 60vh)'
    },
    '75%': {
      transform: 'rotateZ(5deg) rotateY(1080deg) translate(-10vw, 80vh)'
    },
    '100%': {
      transform: 'rotateZ(15deg) rotateY(1440deg) translate(10vw, 110vh)'
    }
  }
};

const confettiShare = {
  left: '50%',
  width: '1.6rem',
  height: '1.6rem',
  position: 'absolute',
  transformOrigin: 'left top',
  animation: 'confetti 5s ease-in-out -2s infinite'
};

export const confetti1 = {
  ...confettiShare,
  left: '10%',
  animationDelay: 0,
  backgroundColor: 'primary.dark'
};

export const confetti2 = {
  ...confettiShare,
  left: '20%',
  animationDelay: '-5s',
  backgroundColor: 'primary.dark'
};

export const confetti3 = {
  ...confettiShare,
  left: '30%',
  animationDelay: '-3s',
  backgroundColor: 'primary.light'
};

export const confetti4 = {
  ...confettiShare,
  left: '40%',
  animationDelay: '-2.5s',
  backgroundColor: 'primary.dark'
};

export const confetti5 = {
  ...confettiShare,
  left: '50%',
  animationDelay: '-4s',
  backgroundColor: 'primary.dark'
};

export const confetti6 = {
  ...confettiShare,
  left: '60%',
  animationDelay: '-6s',
  backgroundColor: 'primary.dark'
};

export const confetti7 = {
  ...confettiShare,
  left: '70%',
  animationDelay: '-1.5s',
  backgroundColor: 'primary.dark'
};

export const confetti8 = {
  ...confettiShare,
  left: '80%',
  animationDelay: '-2s',
  backgroundColor: 'primary.dark'
};

export const confetti9 = {
  ...confettiShare,
  left: '90%',
  animationDelay: '-3.5s',
  backgroundColor: 'primary.dark'
};

export const confetti10 = {
  ...confettiShare,
  left: '100%',
  animationDelay: '-2.5s',
  backgroundColor: 'primary.dark'
};

export const container: SxProps<Theme> = {
  position: 'fixed',
  overflow: 'hidden',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  height: '100%',
  width: '100%',
  mt: -4,
  pointerEvents: 'none',
  zIndex: (theme) => theme.zIndex.drawer,
  ...keyframes
};
