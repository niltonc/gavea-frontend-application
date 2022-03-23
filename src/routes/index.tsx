import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

import Welcome from '../screens/welcome';
import SingUp from '../screens/singup';
import Login from '../screens/login';
import Home from '../screens/home';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SingUp"
        component={SingUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        //  options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
