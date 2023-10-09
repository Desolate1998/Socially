import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ff5722', 
    },
    background: {
      default: '#121212', // Dark background color
      paper: '#1E1E1E',   // Slightly lighter background color
    },
    text: {
      primary: '#ffffff', // White text color
      secondary: '#B0B0B0', // Light gray text color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '3rem', // Large heading font size
      fontWeight: 'bold',
      color: '#03A9F4', // Bright blue heading color
    },
    h2: {
      fontSize: '2.5rem', // Large heading font size
      fontWeight: 'bold',
      color: '#03A9F4', // Bright blue heading color
    },
    h3: {
      fontSize: '2rem', // Large heading font size
      fontWeight: 'bold',
      color: '#03A9F4', // Bright blue heading color
    },
    body1: {
      fontSize: '1.1rem', // Slightly larger body font size
      color: '#E0E0E0', // Light gray text color for body text
    },
    body2: {
      fontSize: '1rem', // Standard body font size
      color: '#B0B0B0', // Slightly darker gray text color for body text
    },
  },
  shape: {
    borderRadius: 8, 
  },
  spacing: 8, 
});

export default darkTheme;
