import React from 'react';
import EntryPoint from './src';
import { PaperProvider } from 'react-native-paper';
import theme from './src/resources/theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <EntryPoint />
    </PaperProvider>
  );
}
