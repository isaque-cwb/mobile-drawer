import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import MyDrawer from './src/components/mydrawer/index';
import Home from './src/pages/home';
import Notification from './src/pages/notification';


export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}