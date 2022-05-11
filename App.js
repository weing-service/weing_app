import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import VoteList from './src/screens/vote/voteList';
import VoteResult from './src/screens/vote/voteResult';
import MainPage from './src/screens/main/mainPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VoteList">
        <Stack.Screen name="VoteList" component={VoteList} options={{headerShown: false}}/>
        <Stack.Screen name="VoteResult" component={VoteResult} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;