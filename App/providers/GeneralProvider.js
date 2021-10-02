import React, {useState, useEffect, useContext} from 'react';
import AuthContext from '../contexts/AuthContext';
import AuthProvider from './AuthProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const GeneralProvider = ({children, ...props}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const authContext = {
        isLoggedIn,
        setIsLoggedIn,
    };

    return (
         <SafeAreaProvider>
            <AuthContext.Provider value={authContext}>
                <AuthProvider>{children}</AuthProvider>
            </AuthContext.Provider>
         </SafeAreaProvider>
    );
};

export default GeneralProvider;
