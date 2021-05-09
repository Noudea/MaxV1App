import React from 'react'
import {View,Text} from 'react-native'

const TestScreen = ({navigation}) => {
    return(<View style={{flex: 1, justifyContent: 'center', alignItems: 'center',width:300, height : 500}}>
        <View style={{flex:1,flexGrow:1,backgroundColor:'green'}}></View>
        <View style={{flex:1,flexGrow:2,backgroundColor:'red'}}></View>
        <View style={{flex:1,flexGrow:1,backgroundColor:'blue'}}></View>
    </View>)
}

export default TestScreen