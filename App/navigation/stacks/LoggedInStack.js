import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
const Stack = createStackNavigator();

const LoggedInStack = () => {
    return (
        <Stack.Navigator headerMode='float'>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default LoggedInStack
