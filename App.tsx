import React from 'react';

import { ThemeProvider } from 'styled-components';

import { StatusBar } from 'expo-status-bar';
import { PersistGate } from 'zustand-persist';

import Routes from './src/routes';

import GaveaTheme from './src/styles/theme/theme';

export default function App() {
  return (
    <PersistGate>
      <ThemeProvider theme={GaveaTheme}>
        <Routes />
        <StatusBar />
      </ThemeProvider>
    </PersistGate>
  );
}
