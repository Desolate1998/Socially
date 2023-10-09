import React from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import darkTheme from './src/themes/DarkTheme';
import lightTheme from './src/themes/LightTheme';
import { ThemeProvider, useThemeContext } from './src/store/ThemeContext';
import RegisterScreen from './src/screens/RegisterScreen';
import { Router } from './src/navigation/Router';



const Application = () => {
  const { theme } = useThemeContext();


  return (
    <NavigationContainer theme={theme === 'dark' ? darkTheme : lightTheme}>
        <Router/>
    </NavigationContainer>

  )
}


const App = () => {

  return (
    <ThemeProvider>
      <Application />
    </ThemeProvider>
  );
};

export default App;