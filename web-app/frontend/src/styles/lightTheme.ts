import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ff5722', 
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5', 
    },
    text: {
      primary: '#333333', // Dark gray text color
      secondary: '#757575', // Light gray text color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '3rem', // Large heading font size
      fontWeight: 'bold',
      color: '#333333', // Dark gray heading color
    },
    h2: {
      fontSize: '2.5rem', // Large heading font size
      fontWeight: 'bold',
      color: '#333333', // Dark gray heading color
    },
    h3: {
      fontSize: '2rem', // Large heading font size
      fontWeight: 'bold',
      color: '#333333', // Dark gray heading color
    },
    body1: {
      fontSize: '1.1rem', // Slightly larger body font size
      color: '#333333', // Dark gray text color for body text
    },
    body2: {
      fontSize: '1rem', // Standard body font size
      color: '#757575', // Light gray text color for body text
    },
  },
  shape: {
    borderRadius: 8, 
  },
  spacing: 8, 
});

export default lightTheme;
