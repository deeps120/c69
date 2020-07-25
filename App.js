
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,CreateSwitchNavigator} from 'react-navigation';
import {createBotttomTabNavigator} from 'react-navigation-tabs';
import BookTransactionScreen from './screens/bookTransaction';
import SearchScreen from './screens/searchScreen';

export default class App extends React.Component{
  render(){
  return (
  <AppContainer/>
  );
  }
}
const TabNavigator = createBotttomTabNavigator({
  Transaction:{
    screen:BookTransactionScreen
  
  },
  Search:{
    screen:SearchScreen
  }
})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
