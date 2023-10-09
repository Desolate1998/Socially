import { DefaultTheme } from '@react-navigation/native';

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#007AFF', // Updated primary color
    secondary: '#FF4500', // Updated secondary color
    background: '#F5F5F5', // Light background color
    backgroundLighter:"#e9ecef",
    text: '#22333b', // Dark text color
    buttonText: {
      primary: '#FFFFFF', // White text for buttons
      secondary: '#FFFFFF', // White text for buttons
    },
    footerSelected:"#343541",
    border: '#007AFF', // Border color
  },
  typography: {
    fontFamily: 'Segoe UI, sans-serif',
    fontSize: 16,
    fontWeight: {
      regular: '400',
      bold: '700',
    },
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 12,
  },
  shadows: {
    none: {},
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.35,
      shadowRadius: 5.84,
      elevation: 10,
    },
  },
};

export default lightTheme;
