import React, {useState, useEffect, useContext} from 'react';
import AuthContext from '../contexts/AuthContext';
import AuthProvider from './AuthProvider';

const GeneralProvider = ({children, ...props}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const authContext = {
        isLoggedIn,
        setIsLoggedIn,
    };

    return (
        <AuthContext.Provider value={authContext}>
            <AuthProvider>{children}</AuthProvider>
        </AuthContext.Provider>
    );
};

export default GeneralProvider;
