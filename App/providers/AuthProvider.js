import React from 'react';
import {useState, useEffect , useContext} from 'react';
import {ActivityIndicator, Text, View , StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TestScreen from '../screens/TestScreen';
import AuthContext from '../contexts/AuthContext';
import axios from 'axios'
import GlobalStyles from '../styles/globalStyles';
import ThemeColors from '../themes/ThemeColors'
import LoginStack from '../navigation/stacks/loginStack/LoginStack';


const Stack = createStackNavigator();

const AuthProvider = ({children, ...props}) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    // const context = useContext(AuthContext)
    
    useEffect(async () => {
        //check avec token jwt
        // const getToken = async () => {
        //     try {
        //         const token = await AsyncStorage.getItem('token');
        //         console.log('StoredTokenAuthProvider', token);
        //         return token;
        //         if (value !== null) {
        //             // value previously stored
        //         }
        //     } catch (e) {
        //         // error reading value
        //     }
        // };
        // // console.log('context',context)
        // const token = await getToken();
        // // getToken();
        // console.log('token', token);

        // if (token) {
        //     //verifier le token grâce à un appelle api
        //     console.log('le token',token)
        //     axios.post('http://10.0.2.2:8080/api/token/verify',{
        //         token: token
        //     }).then((response) => {
        //         console.log('response',response.data.token)
        //         setIsLoggedIn(true);
        //         setIsLoaded(true);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //         setIsLoggedIn(false);
        //         setIsLoaded(true);
        //     });
        //     // setIsLoggedIn(true);
        // } else {
        //     setIsLoggedIn(false);
        //     setIsLoaded(true);
        // }
        setIsLoaded(true)
    }, []);
    

    return (
        <>
            {isLoaded ? (
                <>
                    {isLoggedIn ? (
                        <>{children}</>
                    ) : (
                        <LoginStack></LoginStack>
                        // <Stack.Navigator>
                        //     <Stack.Screen
                        //         name="login"
                        //         component={LoginScreen}
                        //     />
                        //     <Stack.Screen
                        //         name="test"
                        //         component={RegisterScreen}
                        //     />
                        // </Stack.Navigator>
                    )}
                </>
            ) : (
                <View style={[GlobalStyles.Default,styles.container, styles.horizontal]}>
                    <ActivityIndicator size="large" color={ThemeColors.defaultTheme.secondary}/>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});



export default AuthProvider;
