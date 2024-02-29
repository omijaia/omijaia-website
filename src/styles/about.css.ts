import { style } from '@vanilla-extract/css';

export const aboutContainer = style({
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
});

export const aboutImage = style({
  width: '150px',
  height: 'auto',
  borderRadius: '50%',
  marginBottom: '20px',
  marginTop: '20px',
});

export const aboutText = style({
  maxWidth: '600px',
  color: '#E0E2E5',
  textAlign: 'left',
});

