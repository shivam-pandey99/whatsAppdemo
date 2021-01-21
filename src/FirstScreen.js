import React from 'react';
import { View, Text,Button } from  'react-native';
import Video from 'react-native-video';

export function SecondScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Second Screen</Text>
     </View>
    );
  }

 export  function NewGroupScreen  ({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="test"></Button>
      </View>
    );
  }

  export  function NewBroadCastScreen  ({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="test" onPress={() => navigation.navigate('SecondScreen')}></Button>
      </View>
    );
  }


  export  function WebScreen  ({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="test"></Button>
      </View>
    );
  }

  export  function StarredScreen  ({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="test"></Button>
      </View>
    );
  }

  export  function PaymentScreen ({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="test"></Button>
      </View>
    );
  }

  export  function Settings  ({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="test"></Button>
      </View>
    );
  }

