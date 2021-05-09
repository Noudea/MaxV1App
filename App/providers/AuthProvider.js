import React from 'react';
import {useState, useEffect , useContext} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TestScreen from '../screens/TestScreen';
import AuthContext from '../contexts/AuthContext';


const Stack = createStackNavigator();

const AuthProvider = ({children, ...props}) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    // const context = useContext(AuthContext)
    
    useEffect(async () => {
        //check avec token jwt
        // console.log('context',context)
        const token = await getToken();
        // getToken();
        console.log('token', token);

        if (token) {
            //verifier le token grâce à un appelle api
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }

        setIsLoaded(true);
    }, []);
    
    const getToken = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            console.log('StoredTokenAuthProvider', token);
            return token;
            if (value !== null) {
                // value previously stored
            }
        } catch (e) {
            // error reading value
        }
    };

    return (
        <>
            {isLoaded ? (
                <>
                    {isLoggedIn ? (
                        <>{children}</>
                    ) : (
                        <Stack.Navigator>
                            <Stack.Screen
                                name="login"
                                component={LoginScreen}
                            />
                            <Stack.Screen
                                name="test"
                                component={TestScreen}
                            />
                        </Stack.Navigator>
                    )}
                </>
            ) : (
                <Text>Loading</Text>
            )}
        </>
    );
};



export default AuthProvider;
