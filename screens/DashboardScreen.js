import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class DashboardScreen extends Component{
  render(){
    return(
      <View style = {{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>Dashboard Screen</Text>
      </View>
    );
  }
}