import { style } from '@vanilla-extract/css';

export const blogEntryContainer = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '20px',
  marginBottom: '20px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '8px',
});

export const blogThumbnail = style({
  width: '100%', 
  height: 'auto', 
  overflow: 'hidden',
  marginBottom: '10px', 
});

export const blogContent = style({
  flex: 1,
});

export const blogDate = style({
  fontSize: '14px',
  color: '#888',
  marginBottom: '5px',
});

