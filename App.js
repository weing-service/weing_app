import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import VoteList from './src/screens/vote/VoteList.js';
import MainPage from './src/screens/main/MainPage.js';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VoteList">
        <Stack.Screen name="mainPage" component={MainPage} options={{headerShown: false}}/>
        <Stack.Screen name="VoteList" component={VoteList} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;