import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image  } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native'; // Import useTheme from React Navigation
import { Button } from '../components/Button/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PasswordInput from '../components/PasswordInput/PasswordInput';
import ThemeSwitcher from '../components/ThemeSwitcher/ThemeSwitcher';

const LoginScreen = () => {
  const { colors, typography, spacing, borderRadius }: any = useTheme(); // Destructure the theme object

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); 
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: spacing.medium,
      backgroundColor: colors.background,
    },
    logo: {
      width: 320, // Adjust the width and height as needed
      height: 220,
      marginBottom: spacing.medium,
    },    
    companyName: {
      width: 120, // Adjust the width and height as needed
      height: 220,
      marginBottom: spacing.medium,
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
    loginButton: {
      width: '100%',
      height: 40,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: borderRadius.small,
      marginBottom: spacing.small, // Add margin to separate buttons
    },
    loginButtonText: {
      color: colors.buttonText,
      fontSize: typography.fontSize,
    },
    registerButton: {
      width: '100%',
      height: 40,
      backgroundColor: colors.secondary, // Use the secondary color for the "Register" button
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: borderRadius.small,
    },
    registerButtonText: {
      color: colors.buttonText,
      fontSize: typography.fontSize,
    },
    forgotPasswordButton: {
      marginTop: spacing.small,
    },
    forgotPasswordButtonText: {
      color: colors.primary,
      fontSize: typography.fontSize,
      borderColor:'none',
      backgroundColor:'none',
      shadowColor:'none'
    },
    buttonContainer: {
        flexDirection: 'row', // Display buttons vertically
        justifyContent: 'center', // Center buttons vertically
        width: '100%', // 
    },

  });

  const handleLogin = () => {
      //@ts-ignore
      navigation.navigate('Dashboard');
  };

  const handleRegister = () => {
    //@ts-ignore
    navigation.navigate('Register');
  };

  const handlePasswordChange = (value:string) => {
    setPassword(value)
  };

  return (
    <View style={styles.container}>
      <Image style={styles.companyName} source={require('../../assets/Critex.png')} resizeMode="contain" />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholderTextColor={colors.text}
      />
     <PasswordInput placeholder='password' onChangeText={handlePasswordChange} value={password}/>
      <Button color='primary' shadowSize='medium' label='Login' onClick={handleLogin} variant='filled' />
      <View style={styles.buttonContainer}>
        <Button color='primary' label='Forgot Password?' onClick={handleLogin} variant='text'  width='50%'/>
        <Button color='secondary' label='Need an account?' onClick={handleRegister} variant='filled' width='50%'/>
      </View>
    </View>
  );
};

export default LoginScreen;
