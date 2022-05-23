import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import VoteList from './src/screens/vote/voteList';
import VoteResult from './src/screens/vote/voteResult';
import VoteDo from './src/screens/vote/voteDo';
import VoteMake from './src/screens/vote/voteMake';
import VoteDate from './src/screens/vote/voteDate';
import Loading from './loading'
import Login from './src/screens/login/login';
import MainPage from './src/screens/main/mainPage';
import AddTodoPage from './src/screens/main/addTodoPage';
import AddProjectPage from './src/screens/main/AddProjectPage';
import Map from './src/screens/map/map';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName = "MainPage">
          <Tab.Screen name="VoteList" component={VoteList} options={{ headerShown: false, tabBarShowLabel : false }} />
          <Tab.Screen name="MainPage" component={MainPage} options={{ headerShown: false, tabBarShowLabel : false }} />
          <Tab.Screen name="Map" component={Map} options={{ headerShown: false, tabBarShowLabel : false }} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Loading" component={Loading} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="VoteList" component={VoteList} options={{headerShown: false}}/>
        <Stack.Screen name="VoteResult" component={VoteResult} options={{headerShown: false}}/>
        <Stack.Screen name="VoteDo" component={VoteDo} options={{headerShown: false}}/>
        <Stack.Screen name="VoteMake" component={VoteMake} options={{headerShown: false}}/>
        <Stack.Screen name="VoteDate" component={VoteDate} options={{headerShown: false}}/>
        <Stack.Screen name="AddProjectPage" component={AddProjectPage} options={{headerShown: false}}/>
        <Stack.Screen name="MainPage" component={MainPage} options={{headerShown: false}}/>
        <Stack.Screen name="AddTodoPage" component={AddTodoPage} options={{headerShown: false}}/>
        <Stack.Screen name="Map" component={Map} options={{headerShown: false}}/>
        <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;