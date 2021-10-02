import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TestScreen from '../../screens/TestScreen';
import HomeStack from '../stacks/home/HomeStack';
import TodoScreen from '../../screens/TodoScreen';

const Tab = createBottomTabNavigator();


const AppTabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Accueil" component={HomeStack} />
        <Tab.Screen name="Journal" component={TodoScreen} />
        <Tab.Screen name="Ajouter" component={TodoScreen} />
        <Tab.Screen name="To do list" component={TodoScreen} />
        <Tab.Screen name="Tracker" component={TodoScreen} />
    </Tab.Navigator>
  );
}


export default AppTabNavigator