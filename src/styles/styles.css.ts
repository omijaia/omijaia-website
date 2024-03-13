import { style } from '@vanilla-extract/css';


const mobileFontSize = '39px';
const desktopFontSize = '100px';
const mobileButtonSize = '45px';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
});


export const header = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    width: '100%',
    position: 'relative',
    top: 0,

    '@media': {
        '(min-width: 768px)': {
            position: 'relative', 
        },
    },
});

export const logo = style({
    margin: '20px',
  });
  
  
export const slogan = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: '13px',
    flexGrow: 1,
    fontFamily: 'Poppins, sans-serif',
    fontStyle: 'italic',
    color: '#F4F4ED',
});

export const hero = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const title = style({
    textAlign: 'center', 
    marginBottom: '20px',
    fontFamily: 'Inter, sans-serif',
    letterSpacing: '-3px',
    fontSize: mobileFontSize, 

    '@media': {
        '(min-width: 768px)': {
            letterSpacing: '-8px',
            fontSize: desktopFontSize, 
        },
    },
});

  
export const imagesContainer = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '20px',
});
  
export const smartphone = style({
    maxWidth: '30%', 
    height: 'auto', 
    margin: '10px',
});

export const notebook = style({
    maxWidth: '50%', 
    height: 'auto', 
    margin: '10px',
});

export const button = style({
    width: mobileButtonSize,
    height: mobileButtonSize,
    borderRadius: '50%',
    border: '3px solid brown',
    background: `radial-gradient(circle, #CE1A10, #7A1414)`,
    boxShadow: '#565856 3px 3px 0 0',
    marginRight: '10px',
    marginTop: '-10px',
    cursor: 'pointer',
    touchAction: 'manipulation',
    transition: 'box-shadow 0.1s, transform 0.1s',
    textDecoration: 'none',
    userSelect: 'none',
  
    ':active': {
        boxShadow: '#422800 2px 2px 0 0',
        transform: 'translate(2px, 2px)',
    },

    '@media': {
        '(min-width: 768px)': {
            width: '100px',
            height: '100px',
        },
    },
    
});

export const main = style({
    flex: '1',
    padding: '20px',
    width: '100%',
    overflowY: 'auto',
  });

  export const doit = style({
    flex: '1',
    padding: '20px',
    width: '90%',

    '@media': {
        '(min-width: 768px)': {
            width: '73%',
        },
    },
  });