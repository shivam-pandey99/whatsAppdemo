import React from "react";
import {View,Button,Text} from "react-native";

tab2 = ({navigation}) => 
  <View style={{justifyContent:'center',alignItems:'center', flex:1}}>
    <Button
      title="New Group"
      onPress={() => navigation.navigate('NewGroup')}
    />
  <Text style={{fontSize: 25,
  textAlign: 'center',
  color: 'black'}}>call</Text>
  </View>
export default tab2 ;