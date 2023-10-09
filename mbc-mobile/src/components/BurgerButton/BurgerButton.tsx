import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BurgerButton = ({ onPress }) => {
    const { colors, typography, spacing, borderRadius }: any = useTheme(); // Destructure the theme object
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name="menu" size={30} color={colors.text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});

export default BurgerButton;
