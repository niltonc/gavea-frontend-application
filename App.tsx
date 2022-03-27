import React from 'react';

import { ThemeProvider } from 'styled-components';

import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';

import GaveaTheme from './src/styles/theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={GaveaTheme}>
      <Routes />
      <StatusBar />
    </ThemeProvider>
  );
}
