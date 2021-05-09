import React from 'react';
import {Text} from 'react-native'
import { StyleSheet,View } from 'react-native';
import GlobalStyles from '../../styles/globalStyles'

const DefaultHeader = (props) => {
    return(<View style={styles.container}>
        <Text
        style={GlobalStyles.Header}
        >{props.title}</Text>
    </View>)
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'center'
  }
});

export default DefaultHeader