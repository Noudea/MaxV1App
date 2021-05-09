import { StyleSheet } from 'react-native';
import ThemeColors from '../themes/ThemeColors'

export default StyleSheet.create({
  Default: {
    backgroundColor: ThemeColors.defaultTheme.background,
    color : ThemeColors.defaultTheme.text,
    flex:1,
    padding:30
  },
  redText: {
    color: 'red'
  },
  Header: {
      fontSize: 35
  }
});