import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TestScreen from '../../screens/TestScreen';
import HomeStack from '../stacks/home/HomeStack';
import TodoScreen from '../../screens/TodoScreen';

const Tab = createBottomTabNavigator();


const AppTabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="HomeApp" component={HomeStack} />
        <Tab.Screen name="TestScreen" component={TodoScreen} />
    </Tab.Navigator>
  );
}


export default AppTabNavigator