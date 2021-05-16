import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../../screens/LoginScreen'
import RegisterScreen from '../../../screens/RegisterScreen'

const Stack = createStackNavigator();

const LoginStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="login"
                component={LoginScreen}
            />
            <Stack.Screen
                name="test"
                component={RegisterScreen}
            />
        </Stack.Navigator>
    )
}


export default LoginStack