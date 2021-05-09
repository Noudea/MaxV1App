/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import type {Node} from 'react';
import {
  StatusBar,
} from 'react-native';

import GeneralProvider from './providers/GeneralProvider';
import AppLayout from './layouts/AppLayout';

const App: () => Node = () => {


  return (
    <NavigationContainer>
        <StatusBar />
        <GeneralProvider>
            <AppLayout></AppLayout>
        </GeneralProvider>
    </NavigationContainer>
  );
};


export default App;
