/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/indexScreen';
import { BlogProvider } from './src/context/blogContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={IndexScreen} options={{ title: 'Blogs' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <BlogProvider>
    <App />
  </BlogProvider>
};
