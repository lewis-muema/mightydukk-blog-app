/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/indexScreen';
import { Provider } from './src/context/blogContext';
import ShowScreen from './src/screens/showScreen';
import CreateScreen from './src/screens/createScreen';
import EditScreen from './src/screens/editScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={IndexScreen} options={{ title: 'Blogs' }} />
        <Stack.Screen name="Show" component={ShowScreen} options={{ title: '' }} />
        <Stack.Screen name="Create" component={CreateScreen} options={{ title: 'Create Blog' }} />
        <Stack.Screen name="Edit" component={EditScreen} options={{ title: 'Edit Blog' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <Provider>
    <App />
  </Provider>
};
