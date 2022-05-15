import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import BooksList from '../screens/Books/BooksList';
import LoginScreen from '../screens/LoginScreen';
import ItemDetails from '../screens/ItemDetails';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BooksList" component={BooksList} options={{ headerShown: false }} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}