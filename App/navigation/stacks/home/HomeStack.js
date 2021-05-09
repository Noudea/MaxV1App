import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../../screens/HomeScreen';
import ThemeColors from '../../../themes/ThemeColors'
import DefaultHeader from '../../../components/headers/DefaultHeader';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
              screenOptions={{
        headerStyle: { backgroundColor: ThemeColors.defaultTheme.background },
      }}
        >
            <Stack.Screen
            options={{ headerTitle: props => <DefaultHeader title='Bonjour' {...props} /> }}
                name="Home"
                component={HomeScreen}
            />
        </Stack.Navigator>
    );
};


export default HomeStack;
