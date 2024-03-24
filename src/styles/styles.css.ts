import { style } from '@vanilla-extract/css';

const mobileFontSize = '39px';
const desktopFontSize = '100px';
const mobileButtonSize = '45px';

//______________________NAVBAR

  export const logo = style({
    justifyContent: 'flex-start',
    marginRight: '3vmin',
    marginBottom: '.5rem',
  });

  export const navLinks = style({
    display: 'flex',
    flexDirection: 'column',
  });

  export const navLink = style({
    cursor: 'pointer', 
    transition: 'font-style 0.2s', 
    textTransform: 'uppercase',

    ':hover': {
      textDecoration: 'underline', 
    },

    ':active': {
      fontWeight: 'bold',
      textDecoration: 'underline', 
    },

    ':focus': {  
      fontWeight: 'bold',
      textDecoration: 'underline', 
    },
  });

//______________________HERO


export const hero = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end', 
  alignItems: 'right', 
  marginLeft: 'auto',
  paddingRight: '18px',
  marginTop: '8rem',

  '@media': {
    '(min-width: 768px)': {
      paddingRight: '25vmin'
    },
  },

});

export const button = style({
  width: mobileButtonSize,
  height: mobileButtonSize,
  borderRadius: '50%',
  border: '3px solid brown',
  background: `radial-gradient(circle, #CE1A10, #7A1414)`,
  boxShadow: '#565856 3px 3px 0 0',
  cursor: 'pointer',
  touchAction: 'manipulation',
  transition: 'box-shadow 0.1s, transform 0.1s, background-color 0.3s',
  textDecoration: 'none',
  userSelect: 'none',

  ':active': {
    boxShadow: '#422800 2px 2px 0 0',
    transform: 'translate(2px, 2px)',
  },
  ':hover': {
    background: `radial-gradient(circle, #CE1A10, #7A1414), linear-gradient(45deg, rgba(255,255,255,0.5), rgba(255,255,255,0))`,
  },
  '@media': {
    '(min-width: 768px)': {
      width: '55px',
      height: '55px',
    },
  },
});

export const buttonText = style({
  marginRight: '10px',
  marginTop: '15px',
  fontSize: '13px',
  fontStyle: 'italic',

  '@media': {
    '(min-width: 768px)': {
        marginTop: '17px',
    },
  },
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

//______________________IMAGES

export const workImage = style({
  float: 'left',
  marginRight: '1rem',
});

export const image = style({
  width: '73px',
  height: 'auto',
});

//______________________CONTENT

export const content = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  rowGap: '1rem',
  padding: '8vmin 4vmin',

});

export const section = style({
  padding: '1rem',
});

export const heading = style({
  fontSize: '1.2rem',
  marginBottom: '0.5rem',
});

export const paragraph = style({
  fontSize: '1rem',
});

export const animatedNotification = style({
  marginLeft: 'auto', 
});

export const link = style({
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
  fontSize: '1rem',
  marginLeft: '5.6rem',
});

export const working = style({
  textDecoration: 'none',
  fontSize: '1rem',
  marginLeft: '5.6rem',

});

export const textContainer = style({
  overflow: 'hidden',
  marginBottom: '1rem',

});


//______________________FOOTER
export const footer = style({
  textAlign: 'center',
  padding: '20px',
  color: '#201E1B',
  paddingTop: '20.6rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
});

export const footerContainer = style({
  gap: '.75rem',
  justifyContent: 'space-between',
  display: 'flex',
  width: '100%',

  '@media': {
    '(min-width: 950px)': {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '900px',
    },
},
});

export const footerMenu = style({
  fontSize: '.6875rem',
  lineHeight: '1.05rem',
  columnGap: '1.25rem',
  display: 'flex',
  flexDirection: 'column',
  textTransform: 'uppercase',
  textAlign: 'left',
});

export const footerIcons = style({

  fontSize: '1rem',

});

export const footerLinks = style({
  marginTop: '.50rem',
  columnGap: '1rem',
  display: 'flex',
  marginBottom: '1rem',

  '@media': {
    '(min-width: 640px)': {
      flexDirection: 'row',
    },

    '(min-width: 768px)': {
      marginLeft: '7rem',
    },
},
});
  
export const footerText = style({
  fontSize: '11px',
  fontFamily: 'Poppins, sans-serif',
  fontStyle: 'italic',
  textAlign: 'left',
  
  '@media': {
  '(min-width: 768px)': {
    marginLeft: '7rem',
    margin: 'auto',
  },
},

});


export const footerRights = style({
    width: '100%',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingBottom: '.625rem',
    fontSize: '.6875rem',
    lineHeight: '1.05rem',
    color: '#807f7b',
    justifyContent: 'center',
    display: 'flex',
});

