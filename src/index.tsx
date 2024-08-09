import React from 'react';
import ComponentSignIn from './components/auth/componentSignIn';
import ComponentOTPVerify from './components/auth/componentOtpVerify';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function EntryPoint() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="sign-in">
        <Stack.Screen name="sign-in" component={ComponentSignIn} />
        <Stack.Screen name="otp-verify" component={ComponentOTPVerify} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
