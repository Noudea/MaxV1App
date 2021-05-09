import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppTabNavigator from '../tabs/AppTabNavigator';


const Drawer = createDrawerNavigator();


const  BaseDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="App" component={AppTabNavigator} />
    </Drawer.Navigator>
  );
}

export default BaseDrawer