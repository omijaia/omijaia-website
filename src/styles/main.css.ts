import { style } from '@vanilla-extract/css';

export const mainContainer = style({
  position: 'relative',
  minHeight: '100vh',
});

export const main = style({
  padding: '2rem',
  textAlign: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '100vh',
  borderRadius: '33px',
  backgroundImage: 'linear-gradient(rgba(28, 31, 34, 0.95), rgba(28, 31, 34, 0.95), rgba(28, 31, 34, 0.95), rgba(28, 31, 34, 0.95), rgba(62, 64, 66, 0.95))',
  color: '#E0E2E5',
  marginBottom: '10%',
  marginTop: '3%',
  marginLeft: '23%',
  marginRight: '23%',
});

export const mobileStyles = style({
  marginLeft: '5%',
  marginRight: '5%',
});
