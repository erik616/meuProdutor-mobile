import React from 'react';
import { MyStack } from './utils/Stack';
import { NavigationContainer } from '@react-navigation/native';
// import { Home } from './src/screens/Home';

export default function App() {
  return (

    // <Home />
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>


  );
}
