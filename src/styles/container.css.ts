/* container.css.ts */

import { style } from '@vanilla-extract/css';

export const mainContainer = style({
  display: 'flex',
  flexDirection: 'row',
  padding: '23px',
  height: '100%',
});

export const leftContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '100%', 
  textAlign: 'center',
});

export const rightContainer = style({
  marginLeft: '15px',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const logo = style({
  width: '100px',
  height: 'auto',
  marginBottom: '10px',
});

export const roundedLeftButton = style({
  backgroundColor: '#2D302F',
  borderRadius: '13px',
  padding: '10px',
  margin: '5px 0',
  color: '#DFE1E5',
  width: '100%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Centra verticalmente
  justifyContent: 'center', // Centra horizontalmente
  fontWeight: 'bold',
  fontSize: '1.1rem',
});

export const roundedRightButton = style({
  backgroundColor: '#2D302F',
  borderRadius: '13px',
  padding: '10px',
  margin: '5px 0',
  color: '#DFE1E5',
  width: '100%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  fontWeight: 'bold',
  fontSize: '1rem',
});

export const copyright = style({
  marginTop: 'auto',
  fontSize: '0.8rem',
  color: '#DFE1E5',
});
