import { DefaultTheme } from '@react-navigation/native';

const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#207ad2', // A shade of blue for primary
    secondary: '#5ca365', // A shade of orange for secondary
    background: '#232932', // Dark gray background
    backgroundLighter:"#343541",
    text: '#c0d6df', // White text
    buttonText: {
      primary: '#FFFFFF', // White text for primary buttons
      secondary: '#FFFFFF', // Dark gray text for secondary buttons
    },
    footerSelected:"#343541",
    border: '#42A5F5', // A shade of blue for borders
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

export default darkTheme;
