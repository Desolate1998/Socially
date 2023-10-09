import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { useThemeContext } from '../../store/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeContext(); // Get the current theme and toggleTheme function

  return (
    <View style={styles.container}>
      <Switch
        value={theme === 'dark'} // Set the Switch value based on the current theme
        onValueChange={toggleTheme} // Call toggleTheme when the Switch is toggled
        trackColor={{ false: '#CCCCCC', true: '#007AFF' }} // Customize the Switch track colors
        thumbColor={theme === 'dark' ? '#FFFFFF' : '#FFFFFF'} // Customize the Switch thumb color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default ThemeSwitcher;
