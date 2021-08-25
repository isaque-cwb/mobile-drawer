import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../pages/home'
import Notification from '../../pages/notification'
import CustonDrawer from '../custonDrawer';


const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustonDrawer {...props} />} >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notification" component={Notification} />
    </Drawer.Navigator>
  )
}