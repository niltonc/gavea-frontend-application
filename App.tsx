import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from 'styled-components';

import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';

import GaveaTheme from './src/styles/theme/theme';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={GaveaTheme}>
        <Routes />
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
