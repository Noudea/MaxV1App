import React, {useState, useEffect,useContext} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import AuthContext from '../contexts/AuthContext';


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const context = useContext(AuthContext)

    const login = () => {
        // console.log('formData : ',email,password)
        var data = JSON.stringify({
            email: 'admin@admin.com',
            password: 'adminadmin',
        });
        var config = {
            method: 'post',
            url: 'http://10.0.2.2:8080/api/auth/login',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                // console.log(response.data);
                if(response.data.token) {
                    const token = response.data.token;
                    saveToken(token);
                    setIsLoggedIn(true)
                } else {
                    //gerer les erreurs
                }
                // getToken();
            })
            .catch(function (error) {
                console.log(error);
            });

            // navigation.navigate("LoggedInStack")
    };

    const saveToken = async token => {
        try {
            let userToken = await AsyncStorage.setItem('token', token);
        } catch (error) {
            console.error(error);
        }
    };

    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('token');
            console.log('StoredToken', value);
            if (value !== null) {
                // value previously stored
            }
        } catch (e) {
            // error reading value
        }
    };

    const register = () => {
        
    }
    return (
        <View>
            <TextInput
                placeholder="email"
                autoCompleteType="email"
                textContentType="emailAddress"
                onChangeText={setEmail}
                // value={text}
            />
            <TextInput
                // onChangeText={onChangeNumber}
                // value={number}
                onChangeText={setPassword}
                placeholder="password"
                secureTextEntry={true}
            />
            <Button
                onPress={login}
                title="Login"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={register}
                title="Register"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
};

export default LoginScreen;
