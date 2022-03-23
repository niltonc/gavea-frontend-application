import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import GeaveTheme from './styles/theme/theme';
import Routes from './routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={GeaveTheme}>
        <Routes />
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
