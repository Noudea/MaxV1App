import React from 'react'

import {View, Text, Button ,FlatList,StyleSheet  , StatusBar } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ThemeColors from '../../themes/ThemeColors'


const TodoItem = ({title,checked}) => {
    return(<>
        <View style={styles.item}>
            <BouncyCheckbox
                size={25}
                fillColor={ThemeColors.defaultTheme.tabBar}
                unfillColor="#FFFFFF"
                text={title}
                isChecked={checked}
                iconStyle={{borderColor: 'black'}}
                onPress={isChecked => {
                    true;
                }}
            />
        </View>
    </>)
}


const styles = StyleSheet.create({
  item: {
        paddingVertical:10,
        marginVertical:30,
        borderBottomWidth: 1,
        borderBottomColor : ThemeColors.defaultTheme.text
    },
  title: {
    fontSize: 32,
  },
});


export default TodoItem