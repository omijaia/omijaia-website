import { style } from '@vanilla-extract/css';

export const workContainer = style({
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '20px',
});

export const workSquare = style({
  width: '100px',
  height: '100px',
  borderRadius: '33px',
  border: '2px dashed #393939',
  backgroundColor: 'transparent',
  margin: '10px',
});
