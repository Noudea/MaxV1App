import React, {useState, useEffect, useContext} from 'react';
import GlobalStyle from '../styles/globalStyles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {View, Text, Button ,FlatList } from 'react-native';
import TodoItem from '../components/todo/TodoItems';

const TodoScreen = ({navigation}) => {
    const data = {
        title: 'Ma todoList',
        tasks: [{index : 1 ,title : 'tache 1',checked : true}, {index : 2,title : 'tache 2',checked : false},{index : 3,title : 'tache 2',checked : true}],
    };
    
    const renderItem = ({item}) => <TodoItem title={item.title} checked={item.checked}></TodoItem>;
    

    return (
        <View style={GlobalStyle.Default}>
            <Text>{data.title}</Text>
            <FlatList
                data={data.tasks}
                renderItem={renderItem}
                keyExtractor={item => item.index}
            />
        </View>
    );
};


export default TodoScreen;
