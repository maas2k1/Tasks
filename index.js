import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import rootReducer from './Screens/history/reducers';
import HistoryScreen from './Screens/history/historyscreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App from './App';
import FormScreen from './Screens/form/formscreen';

const store = createStore(rootReducer);
const Stack = createNativeStackNavigator();
const Root = () => (
  <Provider store={store}>
   <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name='Home' component={App} />

  <Stack.Screen name='History' component={HistoryScreen}/>
  <Stack.Screen name='FormScreen' component={FormScreen}/>
</Stack.Navigator>

   </NavigationContainer>
  </Provider>
);




AppRegistry.registerComponent('Tasks', () => Root);
