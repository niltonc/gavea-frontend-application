import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import { StatusBar } from 'expo-status-bar';

import { store } from './src/state/store';

import Routes from './src/routes';

import GaveaTheme from './src/styles/theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={GaveaTheme}>
      <Provider store={store}>
        <Routes />
        <StatusBar style="auto" />
      </Provider>
    </ThemeProvider>
  );
}
