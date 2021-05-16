import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeContext from '../contexts/ThemeContext'

const ThemeProvider = ({children,...props}) => {
    const [theme, setTheme] = useState(props.theme);
    const value = { 
        theme,
        setTheme,
    };
    
    useEffect(() => {

        const init = async() => {
            try {
                const storedTheme = await AsyncStorage.getItem('theme');
                if(!storedTheme) {
                    AsyncStorage.setItem('theme',theme)
                } else {
                    setTheme(storedTheme)
                }
            } catch(error) {
                console.log(error)
            }
        }
        init()
    }, [])

        return(
                <ThemeContext.Provider value = {value}>
                    {children}
                </ThemeContext.Provider>
        )
}

export default ThemeProvider