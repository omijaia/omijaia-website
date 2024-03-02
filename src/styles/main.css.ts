import { style } from '@vanilla-extract/css';

export const mainContainer = style({
  position: 'relative',
  minHeight: '80vh',
});

export const main = style({
  padding: '2rem',
  textAlign: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '80vh',
  borderRadius: '33px',
  backgroundColor: '#242724',
  color: '#E0E2E5',
  marginBottom: '5%',
  marginTop: '5%',
  marginLeft: '23%',
  marginRight: '23%',
});

export const mobileStyles = style({
  marginLeft: '5%',
  marginRight: '5%',
});
