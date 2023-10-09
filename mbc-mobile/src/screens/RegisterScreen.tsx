import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native'; // Import useTheme from React Navigation
import PasswordInput from '../components/PasswordInput/PasswordInput';
import ThemeSwitcher from '../components/ThemeSwitcher/ThemeSwitcher';
import { Button } from '../components/Button/Button';
import HealthCheck from '../components/HealthCheck/HealthCheck';
const RegisterScreen = () => {
  const { colors, typography, spacing, borderRadius }: any = useTheme(); // Destructure the theme object
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: spacing.medium,
      backgroundColor: colors.background,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: spacing.medium,
      color:colors.text
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: colors.primary,
      borderRadius: borderRadius.small,
      paddingLeft: spacing.small,
      marginBottom: spacing.small,
      fontSize: typography.fontSize,
      color: colors.text,
    },
    registerButton: {
      width: '100%',
      height: 40,
      backgroundColor: colors.secondary, // Use the secondary color for the "Register" button
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: borderRadius.small,
      marginTop: spacing.small, // Add margin to separate the button from inputs
    },
    registerButtonText: {
      width: '100%',
      height: 40,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: borderRadius.small,
      marginBottom: spacing.small,
    },
  });

  const handleRegister = () => {
    // Implement your registration logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
        placeholderTextColor={colors.text}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholderTextColor={colors.text}
      />
      <PasswordInput placeholder='Password' onChangeText={(text) => setPassword(text)} value={password} />
      <Button color='secondary' shadowSize='medium' label='Register' onClick={handleRegister} variant='filled' />
      <HealthCheck/>
    </View>
  );
};

export default RegisterScreen;
