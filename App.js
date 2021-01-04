import React,{ useState } from 'react';
import { Text,Dimensions} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faCamera} from '@fortawesome/free-solid-svg-icons'
import CameraScreen from './component/camerasec';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Modalopn from './popup/modal'
import { NewGroupScreen , Broadcast , Starred, Web, Payments,Settings ,Buttonfun } from './popup/newgroup';

import tab3 from './component/chat';
import tab1 from './component/statusec';
import tab2 from './component/callsec';
const Initialpage = () =>  {
let screenwidth = Dimensions.get("window").width;

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();


function TabStack()
{
  return <Tab.Navigator
  initialRouteName="chat"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          borderTopWidth : 3,
          borderTopColor: '#075e54',
          backgroundColor: '#075e54',
        },
        indicatorStyle: {
          borderBottomColor: 'white',
          borderBottomWidth: 2.5,
        },
      }}>
    <Tab.Screen 
    name="camera" 
    component={CameraScreen}
    options={{ headerTitle: props => <FontAwesomeIcon icon={faCamera} />}}
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
      headerStyle: { backgroundColor: '#075e54' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: '200' }
    }}>
    <MainStack.Screen name="Whatsapp" component={TabStack} options={{ title: 'Whatsapp', headerRight: () => (<Modalopn/>)}}/>
    <MainStack.Screen name="NewGroup" component = {NewGroupScreen} />
  </MainStack.Navigator>
</NavigationContainer>
 );
}

  
  
  const App = () => {
      return(
          <Text>CameraScreen</Text>
      );
  };

export default Initialpage ;