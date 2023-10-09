
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { useNavigation, useTheme } from '@react-navigation/native';
import Dashboard  from '../screens/Dashboard';

const Stack = createStackNavigator();


export const Router = () => {
const { colors }: any = useTheme();
  return (
    <Stack.Navigator  screenOptions={{
        headerStyle: {
          backgroundColor: colors.background, // Set your desired header background color
        }
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register" // Add the registration screen here
        component={RegisterScreen}
        options={{ title: 'Register'}}
        
      />
      <Stack.Screen
        name="Dashboard" // Add the registration screen here
        component={Dashboard}
        options={{ headerShown: false }}
        
      />
    </Stack.Navigator>
  )
}
