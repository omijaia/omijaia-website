import { keyframes, style } from '@vanilla-extract/css';

const mobileFontSize = '39px';
const desktopFontSize = '100px';
const mobileButtonSize = '45px';

//______________________NAVBAR

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(1070deg)',
  },
});

export const logo = style({
  justifyContent: 'flex-start',
  marginRight: '3vmin',
  marginBottom: '.5rem',
  animation: `${spin} 5s linear infinite`, 
});


  export const navLinks = style({
    display: 'flex',
    flexDirection: 'column',
  });

  export const navLink = style({
    cursor: 'pointer', 
    transition: 'font-style 0.2s', 
    textTransform: 'uppercase',
    padding: '0.1rem',

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
  marginTop: '9rem',

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
  animation: 'changeGradient 5s linear infinite',

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
  marginTop: '15px',
  maxWidth: '50%',
  marginRight: '10px',
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


export const buttonsContainer = style({
  display: 'flex',
  justifyContent: 'center',
});

export const list = style({
  textAlign: 'left',
  marginTop: '1rem',
});

export const imageContainer = style({
  marginBottom: '1rem',
});

export const profile = style({
  width: '150px',
  height: 'auto',
});

export const sharedButton = style({
  width: 'fit-content', 
  backgroundColor: '#201e1b',
  color: '#f4f4ed',
  padding: '.5rem 1rem',
  marginBottom: '.5rem',
  marginLeft: '1rem',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#4f4942',
  },
});


//______________________VISUAL IDENTIY
export const logoContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
});

export const logos = style({
  position: 'relative',
  width: '100px', 
  height: '100px',

});

export const logoImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});


//______________________WORKS

export const link = style({
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
  fontSize: '1rem',
  justifyContent: 'flex-start',
});

export const working = style({
  textDecoration: 'none',
  fontSize: '1rem',
  justifyContent: 'flex-start',
});

export const textContainer = style({
  overflow: 'hidden',
  marginBottom: '.5rem',

});

export const techButtonContainer = style({
  display: 'grid',
  gap: '.5rem',
  marginTop: '.5rem',
  gridTemplateColumns: 'repeat(2, minmax(0, auto))', 

  '@media': {
    '(min-width: 660px)': {
      gridTemplateColumns: 'repeat(5, minmax(0, auto))', 
    },
  },
});

export const techButton = style({
  width: 'fit-content', 
  backgroundColor: '#201e1b',
  color: '#f4f4ed',
  padding: '.5rem 1rem',
  marginBottom: '.5rem',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#4f4942',
  },
});

//______________________POSTS
export const headerPost = style({
  padding: '0 0 11vmin',
});

export const headerPostText = style({
  fontSize: '1.25rem',
  lineHeight: '1.5rem',
  fontWeight: '700',
  marginBottom: '1rem',
  textTransform: 'uppercase',
});

export const metaPost = style({
  fontSize: '.625rem',
  lineHeight: '1rem',
  color: '#807f7b',
  letterSpacing: '.4px',
  textTransform: 'uppercase',
});

//______________________ABOUT
export const profileContainer = style({
  display: 'flex',
  alignItems: 'center',

  '@media': {
    '(max-width: 660px)': {
      flexDirection: 'column', 
    },
  },
});

export const profileImage = style({
  width: '200px', 
  height: 'auto',
  marginBottom: '20px',

  '@media': {
    '(max-width: 660px)': {
      marginRight: '0',  
    },
  },
});

export const textAbout = style({
  marginLeft: '1rem',

  '@media': {
    '(max-width: 660px)': {
      flex: '1', 
    },
  },
});

export const emailLink = style({
  cursor: 'pointer', 
  transition: 'font-style 0.2s', 

  ':hover': {
    textDecoration: 'underline', 
  },

  ':active': {
    fontWeight: 'bold',
    textDecoration: 'underline', 
  },
});

export const aboutButtons = style ({

  textAlign: 'center',

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
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  textTransform: 'uppercase',
  textAlign: 'left',
});

export const footerIcons = style({
  fontSize: '1rem',
  marginTop: '.50rem',

});


export const footerLinks = style({
  columnGap: '1rem',
  display: 'flex',
  marginBottom: '1rem',
  alignItems: 'flex-start',
  
  
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
  justifyContent: 'flex-start',
  
  
  '@media': {
  '(min-width: 768px)': {
    maxWidth: '50%',
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
    color: '#66645e',
    justifyContent: 'flex-start',
    display: 'flex',
    maxWidth: '70%'
});

