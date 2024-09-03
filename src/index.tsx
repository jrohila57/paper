import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PaperProvider } from 'react-native-paper';
import useThemeChanger from './core/hooks/useThemeChanger';
import routes from './resources/routes';

const Stack = createNativeStackNavigator();

export default function EntryPoint() {
  const { theme } = useThemeChanger();
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="home">
          {routes.map(({ component: c, name: n }, i) => (
            <Stack.Screen name={n} key={i} component={c} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
