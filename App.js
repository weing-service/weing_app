import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import VoteList from './src/screens/vote/voteList';
import VoteResult from './src/screens/vote/voteResult';
import VoteDo from './src/screens/vote/voteDo';
import VoteMake from './src/screens/vote/voteMake';
import VoteDate from './src/screens/vote/voteDate';
import Login from './src/screens/login/login';
import MainPage from './src/screens/main/mainPage';
import AddTodoPage from './src/screens/main/addTodoPage';
import AddProjectPage from './src/screens/main/AddProjectPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="VoteList" component={VoteList} options={{headerShown: false}}/>
        <Stack.Screen name="VoteResult" component={VoteResult} options={{headerShown: false}}/>
        <Stack.Screen name="VoteDo" component={VoteDo} options={{headerShown: false}}/>
        <Stack.Screen name="VoteMake" component={VoteMake} options={{headerShown: false}}/>
        <Stack.Screen name="VoteDate" component={VoteDate} options={{headerShown: false}}/> */}
        {/* <Stack.Screen name="MainPage" component={MainPage} options={{headerShown: false}}/>
        <Stack.Screen name="AddTodoPage" component={AddTodoPage} options={{headerShown: false}}/> */}
        <Stack.Screen name="AddProjectPage" component={AddProjectPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;