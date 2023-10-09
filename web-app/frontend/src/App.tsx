// src/App.tsx
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import darkTheme from './styles/darkTheme';
import lightTheme from './styles/lightTheme';
import { useTheme } from './Contexts/ThemeContext';
import Header from './components/Header/Header';
import { AlertProvider } from './Contexts/AlertContext';
import { Notification } from './components/Notification/Notification';
function App() {
  const { theme } = useTheme();
  return (
    <MuiThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AlertProvider>
        <Notification />
        <Header />
        <CssBaseline />
      </AlertProvider>
    </MuiThemeProvider>
  );
}

export default App;
