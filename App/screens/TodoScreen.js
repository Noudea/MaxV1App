import React, {useState, useEffect, useContext} from 'react';
import GlobalStyle from '../styles/globalStyles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {View, Text,FlatList } from 'react-native';
import TodoItem from '../components/todo/TodoItems';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'

const TodoScreen = ({navigation}) => {
    const data = {
        title: 'Ma todoList',
        tasks: [{index : 1 ,title : 'tache 1',checked : false}, {index : 2,title : 'tache 2',checked : false},{index : 3,title : 'tache 2',checked : false}],
    };
    
    const renderItem = ({item}) => <TodoItem title={item.title} checked={item.checked}></TodoItem>;
    

    return (
        <View style={GlobalStyle.View}>
            <Text>{data.title}</Text>
            <FlatList
                data={data.tasks}
                renderItem={renderItem}
                keyExtractor={item => item.index}
            />
            <Button
            type="clear"
            icon={
                <Icon
                name='plus'
                type='feather'
                />
            }
            title="Ajouter une tâche"
            />
            {/* <Button title="Ajouter une tâche"></Button> */}
        </View>
    );
};


export default TodoScreen;
