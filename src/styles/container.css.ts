import { style } from '@vanilla-extract/css';

export const mainContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '20px',
  boxSizing: 'border-box',
});

export const leftContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100px',
});

export const rightContainer = style({
  flex: 1,
  marginLeft: '20px',
  display: 'flex',
  flexDirection: 'column',
});

export const logo = style({
  width: '100%',
  height: 'auto',
  marginBottom: '10px',
});

export const roundedButton = style({
  backgroundColor: '#3498db',
  borderRadius: '10px',
  padding: '10px',
  margin: '5px 0',
  color: '#fff',
  width: '100%',
  boxSizing: 'border-box',
});

export const copyright = style({
  marginTop: 'auto',
  color: '#000',
});
