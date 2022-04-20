import React from "react";
import StackNavigator from './screens/navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
)
}