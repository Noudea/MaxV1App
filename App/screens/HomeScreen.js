import React, { useState, useEffect,useContext } from 'react'
import GlobalStyle from '../styles/globalStyles'

import {View,Text, Button} from 'react-native'
import AuthContext from '../contexts/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen = ({navigation}) => {

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    const logout = () => {
        setIsLoggedIn(false);
        AsyncStorage.removeItem('token')
        AsyncStorage.clear()
    }


    return(<View style={GlobalStyle.View}>
        <Text>Home Screen</Text>
        {isLoggedIn ?  <Button onPress={logout} title="Logout"></Button>  :  <Text>Logged Out</Text>}
    </View>)
}

export default HomeScreen