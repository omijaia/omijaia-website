import { style } from '@vanilla-extract/css';

export const footer = style({
  position: 'absolute',
  bottom: '10px',
  left: '50%',
  transform: 'translateX(-50%)',
  textAlign: 'center',
});

export const footerLink = style({
    color: '#E0E2E5',
    textDecoration: 'none',
    transition: 'border-bottom 0.3s ease', 
    borderBottom: '2px solid transparent', // Línea inicialmente transparente
    ':hover': {
      borderBottom: '2px solid #F48245',
    },
  });

export const footerText = style({
  color: '#E0E2E5',
  fontSize: '14px',
  margin: '0',
});
