import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {SecondScreen , NewGroupScreen , NewBroadCastScreen , WebScreen, PaymentScreen , Settings , StarredScreen}from './src/FirstScreen';
import Header from './src/header';

const Stack = createStackNavigator();
const tab = createMaterialTopTabNavigator();

function tabstack() {
  return(
    <tab.Navigator>
      <tab.Screen name="chat"
      component={FirstScreen} />
      <tab.Screen name="call"
      component={FirstScreen} />
      <tab.Screen name="camera"
      component={FirstScreen} />
      <tab.Screen name="status"
      component={FirstScreen} />

    </tab.Navigator>
  );
} 

function FirstScreen  ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="test" onPress={() => navigation.navigate('SecondScreen')}></Button>
    </View>
  );
}



class HomeScreen extends Component {
  constructor(props){
    super(props);
    
}
render(){
  return (
      <NavigationContainer>
        <Stack.Navigator >
        <Stack.Screen name="WhatsApp" component={tabstack} 
        options={{
          title: "whatapp",
          header: () => <Header />
          
        }}/>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="NewGroupScreen" component={NewGroupScreen} />
        <Stack.Screen name="New BroadCast" component={NewBroadCastScreen} />
        <Stack.Screen name="WhatsApp Web" component={WebScreen} />
        <Stack.Screen name="Starred Message" component={StarredScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Settings" component={Settings} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
} 
export default HomeScreen;