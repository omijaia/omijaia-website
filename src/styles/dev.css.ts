// dev.css.ts

import { style } from '@vanilla-extract/css';

export const container = style({
  margin: '20px 5%',
  textAlign: 'center',

  '@media': {
    '(min-width: 768px)': {
      margin: '20px 23%',
    },
},
});


export const processContainer = style({
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column', 
  justifyContent: 'space-between', 
  gap: '20px',
});

export const processItem = style({
  flex: '1',
});

export const textContainer = style({
  border: '1px solid #F4F4ED',
  borderRadius: '10px',
  padding: '10px',
  textAlign: 'left',
});
