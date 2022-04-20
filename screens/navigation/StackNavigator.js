import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Login';
import Home from '../Home';
import SignUp from '../SignUp';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={SignUp} />
    </Stack.Navigator>
  );
}