import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BaseDrawer from '../navigation/drawers/BaseDrawer';
import AppTabNavigator from '../navigation/tabs/AppTabNavigator';
const Stack = createStackNavigator();

const AppLayout = () => {
    return (
        <>
            {/* <AppTabNavigator></AppTabNavigator> */}
        <Stack.Navigator>
            <Stack.Screen name="Home" component={BaseDrawer} />
        </Stack.Navigator>
        </>
    );
};

export default AppLayout;
