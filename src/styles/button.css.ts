// button.css.ts
import { style } from '@vanilla-extract/css';
import { workContainer, workSquare } from './work.css';

export const buttonStyle = style({
  color: '#E0E2E5',
  fontSize: '16px',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  position: 'relative',
  transition: 'color 0.3s',
  backgroundColor: 'transparent',
});

export const floatKeyframes = {
  '0%, 100%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
};

export const floatAnimation = style({
  animation: `${floatKeyframes} 2s ease-in-out infinite`,
});

export const buttonWithFloat = [buttonStyle, floatAnimation].join(' ');

export const buttonContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
});

export const activeLine = style({
  borderBottom: '2px solid #F48245',
});

export const buttonWithFloatActive = [buttonWithFloat, activeLine].join(' ');

export const emptySquare = style({
  width: '100px',
  height: '100px',
  borderRadius: '33px',
  border: '2px dashed #393939',
  backgroundColor: 'transparent',
  margin: '10px',
});
