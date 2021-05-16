import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import RegisterScreen from '../../screens/RegisterScreen';
const Stack = createStackNavigator();

const LoggedInStack = () => {
    return (
        <Stack.Navigator headerMode='float'>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );
};

export default LoggedInStack
