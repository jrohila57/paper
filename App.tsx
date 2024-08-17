import React from 'react';
import EntryPoint from './src';
import { store } from './src/core/store';
import { Provider as ReduxProvider } from 'react-redux';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <EntryPoint />
    </ReduxProvider>)
}
