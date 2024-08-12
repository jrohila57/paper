import React from 'react';
import ComponentSignIn from './module/auth/signIn';
import ComponentOTPVerify from './module/auth/otp-verify';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComponentSignUp from './module/auth/signup';
import ComponentForgotPassword from './module/auth/forgot-password';
import ComponentResetPassword from './module/auth/reset-password';
import ComponentHome from './module/home';

const Stack = createNativeStackNavigator();
export default function EntryPoint() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={ComponentHome} />
        <Stack.Screen name="sign-in" component={ComponentSignIn} />
        <Stack.Screen name="sign-up" component={ComponentSignUp} />
        <Stack.Screen name="otp-verify" component={ComponentOTPVerify} />
        <Stack.Screen name="forgot-password" component={ComponentForgotPassword} />
        <Stack.Screen name="reset-password" component={ComponentResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
