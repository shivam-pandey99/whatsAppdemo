import React , {useState} from "react";
import { StyleSheet, View , Image, TouchableOpacity ,Text } from "react-native";
import {useNavigation } from '@react-navigation/native'



function List(props) {
  const navigation = useNavigation();
  return(
  <View style={{flexDirection: 'row' }}>
      <Image source={props.ImageUri} 
      style={{width: 50 , height: 50 , borderRadius: 250 , margin:10 ,}}></Image>
      <View style={{flexDirection: 'row',flex:1 ,margin:14
       , height: 50, borderBottomWidth: 0.5 , borderBottomColor: 'grey'}}>
      <TouchableOpacity onPress={ () => navigation.navigate('Shivam Pandey' ,{name: props.name})}  >
      <View style={{marginTop: 3,}}>
          <Text style={{fontSize: 19,  }}>{props.name}</Text>
      </View>
      </TouchableOpacity>
      </View>
  </View>
      );
  }

  
export function Newgroup () {
  return(
<View>
<List
  name= 'Bill gates'
  ImageUri={require('../data/image/download.png')}
  /> 
   <List
   name= 'Mark Zuckerburg'
   ImageUri={require('../data/image/DSCN8403.png')}
   />
  </View>
);
}




