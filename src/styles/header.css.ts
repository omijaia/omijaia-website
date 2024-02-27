import { style, keyframes } from '@vanilla-extract/css';

const spinFast = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(2555deg)',  // Ajusta la cantidad de grados para cambiar la velocidad
  },
});

const spinSlow = keyframes({
  '0%': {
    transform: 'rotate(2555deg)',
  },
  '100%': {
    transform: 'rotate(0deg)',
  },
});

export const logo = style({
  width: '73px',
  height: 'auto',
  animation: `${spinFast} 0.5s linear, ${spinSlow} 5s ease-out forwards`,
});