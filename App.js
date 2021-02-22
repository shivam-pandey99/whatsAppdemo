import React,{ useState } from 'react';
import { View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faCamera , faVideo , faPhoneAlt, faEllipsisV} from '@fortawesome/free-solid-svg-icons'
import CameraScreen from './component/camerasec';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Modalopn from './popup/modal'

import { Newgroup } from './popup/newgroup';
import {Broadcast} from './popup/broadcast'
import {Payment} from './popup/payment'
import Web from "./popup/web";
import {Setting}from "./popup/setting"
import {Starred}from "./popup/starred";

import {ChatScreen} from './data/ChatScreen'

import {Contacts} from './data/Contacts'

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
    <MainStack.Screen name="New Group" component={Newgroup} />
    <MainStack.Screen name="BroadCast" component={Broadcast} />
    <MainStack.Screen name="Scan QRcode" component={Web} />
    <MainStack.Screen name="Starred" component={Starred} />
    <MainStack.Screen name="Payment" component={Payment} />
    <MainStack.Screen name="Settings" component={Setting} />

    <MainStack.Screen name="Shivam Pandey" component={ChatScreen} 
     options={({route}) => ({ title: route.params.name ,
       headerRight:()=>(<View 
        style={{
          flexDirection: 'row',
          width: 150 ,
          justifyContent: 'space-around',
          marginRight: 0 , 
        }}
        >
 <FontAwesomeIcon icon={faVideo} size={18} color={'white'} />
 <FontAwesomeIcon icon={faPhoneAlt} size={18} color={'white'}/>
 <FontAwesomeIcon icon={faEllipsisV} size={18} color={'white'}/>
        </View>)
      })}
   
  />

<MainStack.Screen name="Contacts" component={Contacts} />


  </MainStack.Navigator>
</NavigationContainer>
 );
}

export default Initialpage ;