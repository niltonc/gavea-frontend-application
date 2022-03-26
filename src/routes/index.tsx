import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/auth/signin';
import SignUp from '../screens/auth/signup';
import HomePage from '../screens/home';
import Welcome from '../screens/welcome';
import { RootStackParamList } from '../types';
import { useDataStore } from '../zustand/store';

export default function Routes() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const initialRouterName = useDataStore((state) => state.initialRouterName);

  return (
    <Stack.Navigator
      initialRouteName={initialRouterName}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
}
