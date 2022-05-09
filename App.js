import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Vote1 from './src/screens/vote/vote1.js';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Vote1">
        <Stack.Screen name="Vote1" component={Vote1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;