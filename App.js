import React,{ useState } from 'react';
import { Text,Dimensions} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faCamera} from '@fortawesome/free-solid-svg-icons'
import CameraScreen from './component/camerasec';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Modalopn from './popup/modal'

import { Newgroup } from './popup/newgroup';
import {Broadcast} from './popup/broadcast'
import {Payment} from './popup/payment'
import {Web} from "./popup/web";
import {Setting}from "./popup/setting"
import {Starred}from "./popup/starred";

import tab3 from './component/chat';
import tab1 from './component/statusec';
import tab2 from './component/callsec';

const Initialpage = () =>  {

const MainStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack(){
  return <Tab.Navigator
  initialRouteName="chat"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#fff',
        style: {
          shadowOpacity: 0 ,
          elevation: 0 ,
          borderTopWidth : 3,
          borderTopColor: '#075e54',
          backgroundColor: '#075e54',
        },
        indicatorStyle: {
          borderBottomColor: 'white',
          borderBottomWidth: 2.5,
        },
        showIcon: true ,        
      }}>
    <Tab.Screen 
    name="camera" 
    component={CameraScreen}
    options={{
      tabBarLabel: () => null,
      tabBarIcon : () => <FontAwesomeIcon icon={faCamera} color={'white'} size={18}/> 
    }}
    
    />
      <Tab.Screen 
       name="chat"
        component={tab3}
        options={{ title: "Chat",
        headerstyle: {backgroundColor: 'black'}}}
        />
      <Tab.Screen name="status" component={tab2}/>
      <Tab.Screen name="call" component={tab1}/>
    
  </Tab.Navigator>
}
return (
<NavigationContainer>
  <MainStack.Navigator
    initialRouteName="chat"
    screenOptions={{
      headerStyle: { backgroundColor: '#075e54',shadowOpacity:0,elevation:0 },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: '200' }
    }}>
    <MainStack.Screen name="Whatsapp" component={TabStack} options={{ title: 'Whatsapp', headerRight: () => (<Modalopn/>)}}/>
    <MainStack.Screen name="NewGroup" component={Newgroup} />
    <MainStack.Screen name="BroadCast" component={Broadcast} />
    <MainStack.Screen name="Web" component={Web} />
    <MainStack.Screen name="Starred" component={Starred} />
    <MainStack.Screen name="Payment" component={Payment} />
    <MainStack.Screen name="Settings" component={Setting} />

  </MainStack.Navigator>
</NavigationContainer>
 );
}

export default Initialpage ;